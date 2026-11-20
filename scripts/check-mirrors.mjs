// Checks the sites and their Russian mirrors. Exits 1 if something is down,
// so the GitHub workflow fails and GitHub sends an e-mail.
//
// 1. Direct check (from wherever the script runs): GET with browser-like
//    headers, follows redirects, expects 200 and a marker text in the body.
//    Browser headers matter: on 20.11.2026 nav.ru.cosail.org gave 200 to plain
//    curl but a cached Firebase "Site Not Found" 404 to every browser
//    (CDN cache keyed by Accept-Encoding).
// 2. From Russia: check-host.net nodes in Moscow / St Petersburg (data
//    centres, so mobile-operator blocking may differ). Only status codes
//    (2xx/3xx = ok; check-host does not follow redirects).
//    A URL counts as down from Russia if at least half the nodes fail;
//    a single failing node is reported as a warning (nodes are flaky).
//
// Run: node scripts/check-mirrors.mjs   (Node 18+, no dependencies)

const SITES = [
  // url, marker in body, check from Russia too
  { url: 'https://ru.cosail.org/', marker: 'NavCoSail', ru: true },
  { url: 'https://ru.cosail.org/en/', marker: 'NavCoSail', ru: true },
  { url: 'https://nav.ru.cosail.org/', marker: 'NavCoSail', ru: true },
  { url: 'https://nav.ru.cosail.org/main.dart.js', marker: 'dartProgram', ru: true },
  { url: 'https://ru.alex-cosail.com/', marker: 'Beneteau', ru: true },
  { url: 'https://ru.alex-cosail.com/en/', marker: 'Beneteau', ru: true },
  // Main sites (Cloudflare): direct only, from Russia they are expected to fail
  { url: 'https://cosail.org/', marker: 'NavCoSail', ru: false },
  { url: 'https://nav.cosail.org/', marker: 'NavCoSail', ru: false },
  { url: 'https://alex-cosail.com/', marker: 'Beneteau', ru: false },
];

const BAD_MARKERS = ['Site Not Found'];

const BROWSER_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36',
  Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'ru-RU,ru;q=0.9,en;q=0.8',
};

const CHECK_HOST = 'https://check-host.net';
const RU_NODES = ['ru1.node.check-host.net', 'ru2.node.check-host.net', 'ru3.node.check-host.net'];

const errors = [];
const warnings = [];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function checkDirect({ url, marker }) {
  for (let attempt = 1; ; attempt++) {
    try {
      const res = await fetch(url, { headers: BROWSER_HEADERS, redirect: 'follow', signal: AbortSignal.timeout(30000) });
      const body = await res.text();
      const bad = BAD_MARKERS.find((m) => body.includes(m));
      if (res.status !== 200) throw new Error(`HTTP ${res.status}${bad ? ` (${bad})` : ''}`);
      if (bad) throw new Error(`page shows "${bad}"`);
      if (!body.includes(marker)) throw new Error(`no "${marker}" in page`);
      console.log(`ok    direct  ${url}`);
      return;
    } catch (e) {
      if (attempt < 2) { await sleep(10000); continue; } // one retry against blips
      errors.push(`direct: ${url} — ${e.message}`);
      console.log(`FAIL  direct  ${url} — ${e.message}`);
      return;
    }
  }
}

async function getJson(url) {
  const res = await fetch(url, { headers: { Accept: 'application/json' }, signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`check-host HTTP ${res.status}`);
  return res.json();
}

async function checkFromRussia({ url }) {
  let result;
  try {
    const q = new URLSearchParams({ host: url });
    for (const n of RU_NODES) q.append('node', n);
    const { request_id } = await getJson(`${CHECK_HOST}/check-http?${q}`);
    for (let i = 0; i < 12; i++) {
      await sleep(5000);
      result = await getJson(`${CHECK_HOST}/check-result/${request_id}`);
      if (RU_NODES.every((n) => result[n] !== null && result[n] !== undefined)) break;
    }
  } catch (e) {
    // check-host itself is unavailable: not our outage, do not alarm
    warnings.push(`russia: ${url} — check-host.net unavailable (${e.message})`);
    console.log(`warn  russia  ${url} — check-host.net unavailable (${e.message})`);
    return;
  }
  const failed = [];
  let answered = 0;
  for (const n of RU_NODES) {
    const r = result?.[n];
    if (!r) continue; // node did not answer in time
    answered++;
    const [ok, , text, code] = r[0] ?? [];
    // check-host does not follow redirects: "/" -> "/ru/" gives 302, that is fine
    if (ok !== 1 || !/^[23]\d\d$/.test(code ?? '')) failed.push(`${n.split('.')[0]}: ${[code, text ?? 'error'].filter(Boolean).join(' ')}`);
  }
  if (answered === 0) {
    warnings.push(`russia: ${url} — no node answered`);
    console.log(`warn  russia  ${url} — no node answered`);
  } else if (failed.length * 2 >= answered) {
    errors.push(`russia: ${url} — ${failed.join('; ')}`);
    console.log(`FAIL  russia  ${url} — ${failed.join('; ')}`);
  } else if (failed.length) {
    warnings.push(`russia: ${url} — ${failed.join('; ')}`);
    console.log(`warn  russia  ${url} — ${failed.join('; ')}`);
  } else {
    console.log(`ok    russia  ${url} (${answered} nodes)`);
  }
}

await Promise.all([
  ...SITES.map(checkDirect),
  ...SITES.filter((s) => s.ru).map(checkFromRussia),
]);

const summary = [
  errors.length ? `## Down\n${errors.map((e) => `- ${e}`).join('\n')}` : '## All sites OK',
  warnings.length ? `## Warnings\n${warnings.map((w) => `- ${w}`).join('\n')}` : '',
].filter(Boolean).join('\n\n');
console.log(`\n${summary}`);
if (process.env.GITHUB_STEP_SUMMARY) {
  const { appendFileSync } = await import('node:fs');
  appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary + '\n');
}
process.exit(errors.length ? 1 : 0);
