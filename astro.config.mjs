// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// cosail.org — showcase of the NavCoSail navigation program (docs/TZ_Site.md).
// Same setup as alex-cosail.com: static pages, EN at "/", RU at "/ru/", TR at "/tr/".
export default defineConfig({
  site: 'https://cosail.org',
  // All page URLs end with "/" (matches how Cloudflare serves dist/<page>/index.html)
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
