// Addresses and settings of the site in one place (docs/TZ_Site.md).
// To show another demo task — change DEMO_TASK_ID only.
//
// Two copies of the site from one code base (program repo:
// navcosailClaude/docs/TZ_Russia_Mirror.md §5):
//   main    cosail.org     Cloudflare, build variables empty
//   mirror  ru.cosail.org  Firebase Hosting for Russia, built by
//                          .github/workflows/mirror.yml with PUBLIC_MIRROR=1
// On the mirror every link goes to the mirrors (program, alex-cosail.com).
// Canonical / hreflang stay on the main address (astro.config.mjs `site`),
// so search engines treat the mirror as a copy.
//
// Build variables:
//   PUBLIC_MIRROR=1        -> this build is the mirror
//   PUBLIC_NAV_URL=<url>   -> mirror only: address of the program
//                             (empty = https://nav.ru.cosail.org/)

export const MAIN_URL = 'https://cosail.org/';
export const MIRROR_URL = 'https://ru.cosail.org/';

export const IS_MIRROR = import.meta.env.PUBLIC_MIRROR === '1';

/** The program: main address, or its mirror for Russia. */
export const NAV_URL = IS_MIRROR
  ? (import.meta.env.PUBLIC_NAV_URL || 'https://nav.ru.cosail.org/').replace(/\/?$/, '/')
  : 'https://nav.cosail.org/';

/** Demo training task for the "For schools" block (TZ §4.1). Alexey will
 *  prepare a more colourful one later — then replace this id. */
export const DEMO_TASK_ID = '2a02a0d7-18b8-4e44-816e-bdf6b4079635';

/** Task in the window on the page: no "home", fullscreen + new tab buttons
 *  (program 0.9.3-beta.47, docs of the program: TZ_Cosail_Org_Site.md §5). */
export const DEMO_TASK_EMBED_URL = `${NAV_URL}?t=${DEMO_TASK_ID}&embed=1`;

/** The same task as an ordinary link (new tab). */
export const DEMO_TASK_URL = `${NAV_URL}?t=${DEMO_TASK_ID}`;

/** One line for a school's Moodle page (TZ §4.1). */
export const MOODLE_SNIPPET =
  `<iframe src="${DEMO_TASK_EMBED_URL}" width="100%" height="640" allow="fullscreen; clipboard-write"></iframe>`;

/** Demo route behind the QR code (block 3) — given by Alexey 17.11.2026. */
const DEMO_ROUTE =
  'AQGm3DUSUHJvamVjdCAyMDI2LjExLjE3AQAAB1JvdXRlIDEJgteIAuKA0gEA1jqXUACJMOFOALVr3CQA72T0egCiZdp3AOJ3_iUAuiGNXgCrS7tTAC8kaQ';
export const DEMO_ROUTE_URL = `${NAV_URL}?r=${DEMO_ROUTE}`;

/** QR image of the demo route. The mirror's one encodes
 *  https://nav.ru.cosail.org/?r=… (README: "Mirror"). Route changed -> remake both. */
export const DEMO_ROUTE_QR = IS_MIRROR ? '/media/qr-demo-route-ru.svg' : '/media/qr-demo-route.png';

/** Regattas and courses — alex-cosail.com (mirror: ru.alex-cosail.com) in the visitor's language. */
const ALEX = IS_MIRROR ? 'https://ru.alex-cosail.com/' : 'https://alex-cosail.com/';
export const ALEX_COSAIL_URL = { en: ALEX, ru: `${ALEX}ru/`, tr: `${ALEX}tr/` } as const;

/** Contact — the same as on alex-cosail.com (forwarded, personal address hidden). */
export const CONTACT_EMAIL = 'contact@alex-cosail.com';

export const PRIVACY_URL = `${NAV_URL}privacy/`;
export const TERMS_URL = `${NAV_URL}terms/`;
