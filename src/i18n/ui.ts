// Languages of the site. English is the default and lives at "/",
// Russian at "/ru/", Turkish at "/tr/".
export const languages = {
  en: 'EN',
  ru: 'RU',
  tr: 'TR',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const langList = Object.keys(languages) as Lang[];

// HTML lang / og:locale codes
export const htmlLang: Record<Lang, string> = { en: 'en', ru: 'ru', tr: 'tr' };
export const ogLocale: Record<Lang, string> = { en: 'en_US', ru: 'ru_RU', tr: 'tr_TR' };

/**
 * Build a localized URL. Page URLs always end with "/" (Astro builds
 * "hemithea/index.html", and Cloudflare redirects "/hemithea" -> "/hemithea/").
 * `path` is the language-neutral route: "/" or "/hemithea/"; an anchor is kept.
 * localizePath('ru', '/hemithea')     -> '/ru/hemithea/'
 * localizePath('en', '/')             -> '/'
 * localizePath('tr', '/#schedule')    -> '/tr/#schedule'
 */
export function localizePath(lang: Lang, path: string): string {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const hashAt = path.indexOf('#');
  const hash = hashAt >= 0 ? path.slice(hashAt) : '';
  let route = hashAt >= 0 ? path.slice(0, hashAt) : path;
  if (!route.startsWith('/')) route = `/${route}`;
  if (!route.endsWith('/')) route = `${route}/`;
  return `${prefix}${route}${hash}`;
}
