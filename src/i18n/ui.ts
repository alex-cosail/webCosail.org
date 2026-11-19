// Languages of the site. English is the default and lives at "/",
// Russian at "/ru/", Turkish at "/tr/".
// Mirror ru.cosail.org: "/" redirects to "/ru/" and English is served at "/en/"
// (firebase.json), so links inside the mirror use sitePath(), not localizePath().
import { IS_MIRROR } from '../data/site';

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

/**
 * Link to a page inside this copy of the site (language switch, logo).
 * Main site: the same as localizePath(). Mirror: English gets "/en/", because
 * the mirror's "/" redirects to Russian. Canonical / hreflang keep localizePath()
 * (they point to cosail.org).
 * sitePath('en', '/') -> '/' on cosail.org, '/en/' on ru.cosail.org
 */
export function sitePath(lang: Lang, path: string): string {
  const p = localizePath(lang, path);
  return IS_MIRROR && lang === defaultLang ? `/en${p}` : p;
}
