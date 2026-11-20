# cosail.org

Showcase site of the **NavCoSail** navigation program (https://nav.cosail.org).
Astro + Tailwind, static pages, three languages: EN at `/`, RU at `/ru/`, TR at `/tr/`.

## Run locally

```
npm install
npm run dev
```
Open http://localhost:4321/ (and `/ru/`, `/tr/`).

## Where things are

- `src/components/HomePage.astro` — the home page, all blocks.
- `src/i18n/home.ts` — all texts (EN / RU / TR).
- `src/data/site.ts` — addresses: program, demo task id, demo route (QR), contact; main site or mirror (build variables).
- `src/data/versions.ts` — "Versions and what's new" list (add an entry with each program release).
- `src/components/Placeholder.astro` — temporary screenshot places; real images go to `public/media`.
- `docs/TZ_Site.md` — the specification of the site.

## Mirror for Russia (ru.cosail.org)

From Russian mobile internet Cloudflare does not open, so the same `public`
branch is also built with mirror settings and deployed to Firebase Hosting
(project `cosail-b71fa`, site `cosail-org-ru`, domain `ru.cosail.org`,
DNS record in Cloudflare **DNS only / grey cloud**). TZ:
`navcosailClaude/docs/TZ_Russia_Mirror.md` §5.

- `.github/workflows/mirror.yml`: on push to `public` and by hand. Secret
  `FIREBASE_SERVICE_ACCOUNT`; optional variable `NAV_MIRROR_URL` (program address
  on the mirror, default `https://nav.ru.cosail.org/`).
- Build variables: `PUBLIC_MIRROR=1`, `PUBLIC_NAV_URL`. Local test:
  `PUBLIC_MIRROR=1 npx astro build --outDir dist-mirror`.
- On the mirror all links go to mirrors: program -> `nav.ru.cosail.org`,
  events -> `ru.alex-cosail.com`. QR image: `public/media/qr-demo-route-ru.svg`
  (encodes the demo route on `nav.ru.cosail.org`; if the route changes, remake
  both QR images).
- Russian is the default on the mirror: `ru.cosail.org/` redirects (302) to
  `/ru/`, English is served at `/en/` (redirect + rewrite in `firebase.json`).
  Language switch and logo use `sitePath()` (`src/i18n/ui.ts`); the main site
  is unchanged (English at `/`).
- Canonical / hreflang of the mirror point to cosail.org.
- Footer: main site shows "mirror: ru.cosail.org", the mirror shows
  "main address: cosail.org" (`src/components/MirrorNote.astro`).

## Mirror check (twice a day)

`.github/workflows/check-mirrors.yml` runs `scripts/check-mirrors.mjs` at
06:00 and 18:00 UTC+3 (runs from `main`) and by hand. It checks the mirrors
(`ru.cosail.org`, `nav.ru.cosail.org`, `ru.alex-cosail.com`) and the main sites:

- directly, with browser headers (`Accept-Encoding: br` matters: a stale
  Firebase CDN "Site Not Found" was served only to browsers), expecting 200
  and a marker text;
- from Russia via check-host.net nodes (Moscow, St Petersburg; data centres,
  mobile operators may differ), mirrors only. Down = at least half the nodes
  fail; one failing node is only a warning.

If something is down the run fails and GitHub e-mails about it (setting:
github.com/settings/notifications -> Actions -> e-mail, failed workflows
only). The list of addresses is at the top of the script. Local run:
`node scripts/check-mirrors.mjs`.

Stale CDN 404 fix (20.11.2026, `nav.ru.cosail.org`): make a new Firebase
release of the same content (e.g. clone the live version via Hosting API
`versions:clone` and release it); `firebase hosting:clone live live` is refused.

## Branches

- `main` — working branch.
- `public` — the published site: Cloudflare builds from it. Publish = merge `main` into `public` and push.

## Folders not in git

- `inbox/` — source files handed over to Claude.
- `Claude outputs/` — files Claude hands over for manual placement.
