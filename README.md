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
- `src/data/site.ts` — addresses: program, demo task id, demo route (QR), contact.
- `src/data/versions.ts` — "Versions and what's new" list (add an entry with each program release).
- `src/components/Placeholder.astro` — temporary screenshot places; real images go to `public/media`.
- `docs/TZ_Site.md` — the specification of the site.

## Branches

- `main` — working branch.
- `public` — the published site: Cloudflare builds from it. Publish = merge `main` into `public` and push.

## Folders not in git

- `inbox/` — source files handed over to Claude.
- `Claude outputs/` — files Claude hands over for manual placement.
