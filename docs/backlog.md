# cosail.org — backlog

ТЗ — `docs/TZ_Site.md`. Итог сессии 17.11.2026 — `navcosailClaude/docs/archive/SUMMARY_2026-11-17.md` (вечерняя сессия).

## Следующее — выкладка (партия Г)
1. Релиз программы 0.9.3-beta.47 (режим окна `embed`, `frame-ancestors *`) — без него окно задачи на сайте не откроется.
2. `wrangler.toml` / `wrangler.json`: оставить один файл, `assets.not_found_handling: "404-page"` вместо `single-page-application`, статика из `./dist`.
3. `public/_headers`: убрать старое (заголовки Flutter, `X-Frame-Options`, `Access-Control-Allow-Origin: *`); при желании — кэш для `/media/*` и `/_astro/*`.
4. Cloudflare: команда сборки `npm run build`, папка `dist`, Node ≥ 22.22.
5. Слияние `main` → `public`, проверка: `/`, `/ru/`, `/tr/`, телефон, окно задачи («Решить задачу здесь», «На весь экран», новая вкладка), QR и «Открыть маршрут», ссылки на alex-cosail.com, политику и условия, 404.

## Открыто
- В6: название в шапке (пока «NavCoSail» рядом с логотипом CoSail).
- Турецкие тексты — проверить носителю языка.
- Новая, более красочная демо-задача — заменить `DEMO_TASK_ID` в `src/data/site.ts`.
- Ссылка на производителя карты (cosail.org) на учебной карте Arnor — в программе.
- Новая значимая версия программы — запись в `src/data/versions.ts`.
