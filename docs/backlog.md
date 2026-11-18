# cosail.org — backlog

ТЗ — `docs/TZ_Site.md`. Итоги — `navcosailClaude/docs/archive/SUMMARY_2026-11-17.md` (вечер) и `SUMMARY_2026-11-18.md`.

## Сделано
- 18.11.2026 — партия Г: сайт выложен на cosail.org (Astro, EN/RU/TR), окно задачи работает и на чужой странице; программа 0.9.3-beta.47 (режим `embed`, `frame-ancestors *`). Настройки Cloudflare — `TZ_Site.md` §6.

## Открыто
- В6: название в шапке (пока «NavCoSail» рядом с логотипом CoSail).
- Турецкие тексты — проверить носителю языка.
- Новая, более красочная демо-задача — заменить `DEMO_TASK_ID` в `src/data/site.ts`.
- Ссылка на производителя карты (cosail.org) на учебной карте Arnor — в программе.
- Новая значимая версия программы — запись в `src/data/versions.ts`.

## Памятка — выкладка
`main` → `git switch public` → `git pull` → `git merge main` → `git push origin public` → `git switch main`. Сборка Cloudflare стартует сама; Node — переменная сборки `NODE_VERSION = 22.22.0`.
