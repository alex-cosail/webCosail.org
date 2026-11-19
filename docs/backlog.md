# cosail.org — backlog

ТЗ — `docs/TZ_Site.md`. Итоги — `navcosailClaude/docs/archive/SUMMARY_2026-11-17.md` (вечер), `SUMMARY_2026-11-18.md`, `SUMMARY_2026-11-19.md` (вечер и поздний вечер). Следующие правки по всем сайтам — `navcosailClaude/docs/BACKLOG.md` п.37.
Правило: вопросы и предложения Claude → ответ Алексея → только потом код.

## Сделано
- 20.11.2026 — новый логотип и favicon (из alex-cosail.com, старый был обрезан по краям); ссылки на зеркала для английского ведут на `/en/` (подвал → `ru.cosail.org/en/`, регаты на зеркале → `ru.alex-cosail.com/en/`). Коммит `2b983ba`.
- 19.11.2026 — тексты RU/EN/TR (формулировки Алексея): «…на штурманском столе, на компьютере и в телефоне»; карточка «Нет платной подписки?» — «Открытые карты мира уже внутри приложения! А если их недостаточно — …»; блок QR «У вас есть планы идеальных маршрутов?». Коммит `66ea6bf`.
- 19.11.2026 — зеркало `ru.cosail.org` (Firebase, сайт `cosail-org-ru`) выложено и работает; русский по умолчанию: `/` → `/ru/`, английский — `/en/` (`firebase.json`, `sitePath()` в `src/i18n/ui.ts`); `no-cache` для адресов на «/». Коммиты `adec6ab`, `b2f6b57`.
- 19.11.2026 — новая демо-задача «Для школ» `267ab7d6` (было в «Открыто»).
- 18.11.2026 — партия Г: сайт выложен на cosail.org (Astro, EN/RU/TR), окно задачи работает и на чужой странице; программа 0.9.3-beta.47 (режим `embed`, `frame-ancestors *`). Настройки Cloudflare — `TZ_Site.md` §6.

## Открыто
- В6: название в шапке (пока «NavCoSail» рядом с логотипом CoSail).
- Турецкие тексты — проверить носителю языка (вместе с переводами Claude от 19.11: подзаголовок функций, карточка карт, блок QR); EN-переводы 19.11 — посмотреть Алексею.
- Зеркало: предложение — пункт «`ru.cosail.org/` открывается по-русски» в `navcosailClaude/docs/TEST_Russia_Mirrors.md` (ждёт решения).
- Ссылка на производителя карты (cosail.org) на учебной карте Arnor — в программе.
- Новая значимая версия программы — запись в `src/data/versions.ts`.

## Памятка — выкладка
`main` → `git switch public` → `git pull` → `git merge main` → `git push origin public` → `git switch main`. Сборка Cloudflare стартует сама; Node — переменная сборки `NODE_VERSION = 22.22.0`. Push в `public` запускает и **Mirror (Firebase)** (≈30 с). Если зеркало надо перевыложить без пуша: Actions → Mirror (Firebase) → Run workflow, или с компьютера: сборка `PUBLIC_MIRROR=1 npm run build` → `firebase deploy --only hosting:cosail-org-ru --project cosail-b71fa`. Проверять `firebase.json` — только в preview-канале (`firebase hosting:channel:deploy test --expires 1h`), локальный `firebase serve` redirects/headers не применяет.
