// Addresses and settings of the site in one place (docs/TZ_Site.md).
// To show another demo task — change DEMO_TASK_ID only.

/** The program. */
export const NAV_URL = 'https://nav.cosail.org/';

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
export const DEMO_ROUTE_URL =
  'https://nav.cosail.org/?r=AQGm3DUSUHJvamVjdCAyMDI2LjExLjE3AQAAB1JvdXRlIDEJgteIAuKA0gEA1jqXUACJMOFOALVr3CQA72T0egCiZdp3AOJ3_iUAuiGNXgCrS7tTAC8kaQ';

/** Regattas and courses — alex-cosail.com in the visitor's language. */
export const ALEX_COSAIL_URL = { en: 'https://alex-cosail.com/', ru: 'https://alex-cosail.com/ru/', tr: 'https://alex-cosail.com/tr/' } as const;

/** Contact — the same as on alex-cosail.com (forwarded, personal address hidden). */
export const CONTACT_EMAIL = 'contact@alex-cosail.com';

export const PRIVACY_URL = `${NAV_URL}privacy/`;
export const TERMS_URL = `${NAV_URL}terms/`;
