// Texts of the home page (docs/TZ_Site.md §3–§5). RU — Alexey's words,
// EN / TR — translations (TR to be checked by a native speaker).
import type { Lang } from './ui';

export const home: Record<Lang, {
  meta: { title: string; description: string };
  logoAlt: string;
  nav: { features: string; qr: string; schools: string; events: string; versions: string };
  open: string;
  openShort: string;
  hero: { badge: string; h1: string; sub: string; more: string };
  features: {
    title: string;
    sub: string;
    items: { title: string; text: string; cta: string; shot: string }[];
  };
  qr: { title: string; text: string; steps: string[]; caption: string; openRoute: string; alt: string };
  schools: {
    badge: string;
    title: string;
    text: string;
    start: string;
    startNote: string;
    fullscreen: string;
    newTab: string;
    anyTitle: string;
    anyText: string;
    moodleTitle: string;
    copy: string;
    copied: string;
    moodleNote: string;
    shot: string;
  };
  events: { title: string; text: string; btn: string };
  versions: { title: string; sub: string; showAll: string; hideAll: string; months: string[] };
  footer: { program: string; events: string; privacy: string; terms: string; contact: string; tagline: string };
  placeholder: string;
}> = {
  en: {
    meta: {
      title: 'NavCoSail — real charts and navigation tools in your pocket',
      description: 'A navigation program for sailors in your browser: routes in a few clicks, passage plans to share with the crew, paper charts from the chart table. Training tasks for sailing schools.',
    },
    logoAlt: 'CoSail logo',
    nav: { features: 'Features', qr: 'Route as QR', schools: 'For schools', events: 'Events', versions: "What's new" },
    open: 'Open the program',
    openShort: 'Open',
    hero: {
      badge: 'Navigation program for sailors',
      h1: 'Real charts and navigation tools — in your pocket',
      sub: 'NavCoSail works in the browser on a computer and a smartphone: plotting, courses and distances, passage plan — nothing to install.',
      more: 'What it can do',
    },
    features: {
      title: 'What the program can do',
      sub: 'From a quick sketch to a full passage plan — with the same tools on a computer and a phone.',
      items: [
        {
          title: 'A route in a few clicks',
          text: 'Sketch a route right on the start screen: waypoints, courses and distances appear at once. Nothing to set up.',
          cta: 'Try it',
          shot: 'Fast Route on the start screen',
        },
        {
          title: 'The full picture of the passage',
          text: 'Build a route with turning points, courses and time underway and put together a passage plan. Share it with the crew, transfer it to your chart plotter or follow it from your smartphone in the mobile version of the app.',
          cta: 'Plan a passage',
          shot: 'Route and Passage Plan',
        },
        {
          title: 'No subscription for the area?',
          text: 'Photograph the paper chart from your chart table, tie it to the map by a few points — and work on it in the program just like on an electronic chart.',
          cta: 'Add a chart',
          shot: 'Paper chart in the program',
        },
      ],
    },
    qr: {
      title: 'Do you have a plan for the perfect week-long route?',
      text: 'Just put it on your page as a QR code! A guest points a phone camera at it — and the route opens in the program.',
      steps: ['Build the route', 'Press “Share”', 'Save the QR code and place it anywhere'],
      caption: 'Scan it — this is a real route',
      openRoute: 'Open the route',
      alt: 'QR code of a demo route in NavCoSail',
    },
    schools: {
      badge: 'For schools and instructors',
      title: 'Teach reliable methods — in the new reality',
      text: 'Want to teach your students reliable navigation methods in the new reality? Use all the tools of the program. Below is a live training task — you can solve it right here.',
      start: 'Solve the task here',
      startNote: 'The program opens inside this window',
      fullscreen: 'Full screen',
      newTab: 'Open in a new tab',
      anyTitle: 'Any tasks',
      anyText: 'An instructor creates a task on the training chart: the text, the questions, the reference solution. The student solves it, the program checks the answers and sends the result to the instructor. A training chart for your school — on request.',
      moodleTitle: 'Embed it in your website or learning platform — one line of code',
      copy: 'Copy',
      copied: 'Copied',
      moodleNote: 'Works in Moodle and any platform that accepts HTML; where only links are allowed, the task opens by link.',
      shot: 'Training task: chart and task text',
    },
    events: {
      title: 'Cosail regattas and courses',
      text: 'Crew recruitment for the regattas is open. ISSA courses in Marmaris: theory and practice, from preparing the yacht to sailing on your own.',
      btn: 'Schedule on alex-cosail.com',
    },
    versions: {
      title: "Versions and what's new",
      sub: 'The program keeps growing — here is what appeared recently.',
      showAll: 'All versions',
      hideAll: 'Hide',
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    footer: {
      program: 'Program',
      events: 'Regattas and courses',
      privacy: 'Privacy policy',
      terms: 'Terms of use',
      contact: 'Contact',
      tagline: 'NavCoSail — a CoSail project',
    },
    placeholder: 'Screenshot',
  },

  ru: {
    meta: {
      title: 'NavCoSail — настоящие карты и навигационные инструменты в кармане',
      description: 'Навигационная программа для яхтсменов в браузере: маршрут за несколько кликов, план перехода для команды, бумажная карта со штурманского стола. Учебные задачи для парусных школ.',
    },
    logoAlt: 'Логотип CoSail',
    nav: { features: 'Возможности', qr: 'Маршрут в QR', schools: 'Для школ', events: 'Мероприятия', versions: 'Новое' },
    open: 'Открыть программу',
    openShort: 'Открыть',
    hero: {
      badge: 'Навигационная программа для яхтсменов',
      h1: 'Настоящие карты и навигационные инструменты — у вас в кармане',
      sub: 'NavCoSail работает в браузере на компьютере и смартфоне: прокладка, курсы и расстояния, план перехода — без установки.',
      more: 'Что умеет',
    },
    features: {
      title: 'Что умеет программа',
      sub: 'От быстрой прикидки до полного плана перехода — одни и те же инструменты на компьютере и в телефоне.',
      items: [
        {
          title: 'Маршрут за несколько кликов',
          text: 'Прикиньте маршрут прямо на первом экране: точки, курсы и расстояния появляются сразу. Ничего не нужно настраивать.',
          cta: 'Попробовать',
          shot: 'Быстрый маршрут на первом экране',
        },
        {
          title: 'Полная картина перехода',
          text: 'Постройте маршрут с точками поворота, курсами и временем в пути и соберите план перехода. Поделитесь им с командой, перенесите в навигатор или ведите яхту со смартфона в мобильной версии приложения.',
          cta: 'Спланировать переход',
          shot: 'Маршрут и Passage Plan',
        },
        {
          title: 'Нет нужной подписки?',
          text: 'Сфотографируйте бумажную карту со штурманского стола, привяжите её по нескольким точкам — и работайте на ней в программе так же, как на электронной.',
          cta: 'Добавить карту',
          shot: 'Бумажная карта в программе',
        },
      ],
    },
    qr: {
      title: 'У вас есть план идеального маршрута на неделю?',
      text: 'Просто разместите его в виде QR-кода на своей страничке! Гость наводит камеру телефона — и маршрут открывается в программе.',
      steps: ['Постройте маршрут', 'Нажмите «Поделиться»', 'Сохраните QR-код и разместите где угодно'],
      caption: 'Отсканируйте — это настоящий маршрут',
      openRoute: 'Открыть маршрут',
      alt: 'QR-код демонстрационного маршрута в NavCoSail',
    },
    schools: {
      badge: 'Для школ и преподавателей',
      title: 'Учите надёжным методам — в новой реальности',
      text: 'Хотите учить студентов надёжным методам навигации в новой реальности — пользуйтесь всеми инструментами программы. Ниже — живая учебная задача: её можно решить прямо здесь.',
      start: 'Решить задачу здесь',
      startNote: 'Программа откроется в этом окне',
      fullscreen: 'На весь экран',
      newTab: 'Открыть в новой вкладке',
      anyTitle: 'Задания могут быть любыми',
      anyText: 'Преподаватель составляет задачу на учебной карте: условие, вопросы, эталонное решение. Студент решает, программа проверяет ответы и отправляет итог преподавателю. Учебную карту для вашей школы подготовим по запросу.',
      moodleTitle: 'Встраивание в ваш сайт или учебную платформу — одна строка кода',
      copy: 'Скопировать',
      copied: 'Скопировано',
      moodleNote: 'Подходит для Moodle и любой платформы, где можно вставить HTML. Где можно дать только ссылку — задача откроется по ссылке.',
      shot: 'Учебная задача: карта и условие',
    },
    events: {
      title: 'Регаты и курсы Cosail',
      text: 'Набор в экипаж на регаты открыт. Курсы ISSA в Мармарисе: теория и практика — от подготовки яхты до самостоятельного плавания.',
      btn: 'Расписание на alex-cosail.com',
    },
    versions: {
      title: 'Версии и новшества',
      sub: 'Программа растёт — вот что появилось недавно.',
      showAll: 'Все версии',
      hideAll: 'Свернуть',
      months: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
    },
    footer: {
      program: 'Программа',
      events: 'Регаты и курсы',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      contact: 'Связаться',
      tagline: 'NavCoSail — проект CoSail',
    },
    placeholder: 'Скриншот',
  },

  tr: {
    meta: {
      title: 'NavCoSail — gerçek haritalar ve seyir araçları cebinizde',
      description: 'Tarayıcıda yelkenciler için seyir programı: birkaç tıklamayla rota, ekiple paylaşılan seyir planı, harita masasındaki kâğıt harita. Yelken okulları için eğitim görevleri.',
    },
    logoAlt: 'CoSail logosu',
    nav: { features: 'Özellikler', qr: 'QR rota', schools: 'Okullar için', events: 'Etkinlikler', versions: 'Yenilikler' },
    open: 'Programı aç',
    openShort: 'Aç',
    hero: {
      badge: 'Yelkenciler için seyir programı',
      h1: 'Gerçek haritalar ve seyir araçları — cebinizde',
      sub: 'NavCoSail bilgisayarda ve akıllı telefonda tarayıcıda çalışır: rota çizimi, rotalar ve mesafeler, seyir planı — kurulum gerekmez.',
      more: 'Neler yapabilir',
    },
    features: {
      title: 'Program neler yapabilir',
      sub: 'Hızlı bir taslaktan tam seyir planına — bilgisayarda ve telefonda aynı araçlarla.',
      items: [
        {
          title: 'Birkaç tıklamayla rota',
          text: 'Rotayı doğrudan başlangıç ekranında çizin: noktalar, rotalar ve mesafeler hemen görünür. Hiçbir ayar gerekmez.',
          cta: 'Deneyin',
          shot: 'Başlangıç ekranında hızlı rota',
        },
        {
          title: 'Seyrin tam resmi',
          text: 'Dönüş noktaları, rotalar ve seyir süresiyle bir rota oluşturun ve seyir planını hazırlayın. Ekibinizle paylaşın, navigasyon cihazınıza aktarın veya uygulamanın mobil sürümünde akıllı telefondan takip edin.',
          cta: 'Seyir planla',
          shot: 'Rota ve Passage Plan',
        },
        {
          title: 'Gerekli abonelik yok mu?',
          text: 'Harita masanızdaki kâğıt haritanın fotoğrafını çekin, birkaç noktadan haritaya bağlayın — ve programda elektronik harita gibi üzerinde çalışın.',
          cta: 'Harita ekle',
          shot: 'Programda kâğıt harita',
        },
      ],
    },
    qr: {
      title: 'Bir haftalık mükemmel rota planınız var mı?',
      text: 'Onu sayfanıza QR kodu olarak koyun! Misafir telefon kamerasını tutar — ve rota programda açılır.',
      steps: ['Rotayı oluşturun', '“Paylaş”a basın', 'QR kodunu kaydedin ve istediğiniz yere koyun'],
      caption: 'Tarayın — bu gerçek bir rota',
      openRoute: 'Rotayı aç',
      alt: 'NavCoSail’de örnek rotanın QR kodu',
    },
    schools: {
      badge: 'Okullar ve eğitmenler için',
      title: 'Güvenilir yöntemleri öğretin — yeni gerçeklikte',
      text: 'Öğrencilerinize yeni gerçeklikte güvenilir seyir yöntemlerini öğretmek mi istiyorsunuz? Programın tüm araçlarını kullanın. Aşağıda canlı bir eğitim görevi var — burada çözebilirsiniz.',
      start: 'Görevi burada çöz',
      startNote: 'Program bu pencerede açılır',
      fullscreen: 'Tam ekran',
      newTab: 'Yeni sekmede aç',
      anyTitle: 'Her türlü görev',
      anyText: 'Eğitmen eğitim haritasında görev hazırlar: metin, sorular, örnek çözüm. Öğrenci çözer, program cevapları kontrol eder ve sonucu eğitmene gönderir. Okulunuza özel eğitim haritası — talep üzerine.',
      moodleTitle: 'Sitenize veya eğitim platformunuza yerleştirin — tek satır kod',
      copy: 'Kopyala',
      copied: 'Kopyalandı',
      moodleNote: 'Moodle’da ve HTML kabul eden her platformda çalışır; yalnızca bağlantıya izin verilen yerlerde görev bağlantıyla açılır.',
      shot: 'Eğitim görevi: harita ve görev metni',
    },
    events: {
      title: 'Cosail regatları ve kursları',
      text: 'Regatlar için ekip alımı açık. Marmaris’te ISSA kursları: yatın hazırlanmasından bağımsız seyre kadar teori ve pratik.',
      btn: 'Program alex-cosail.com’da',
    },
    versions: {
      title: 'Sürümler ve yenilikler',
      sub: 'Program büyümeye devam ediyor — son eklenenler burada.',
      showAll: 'Tüm sürümler',
      hideAll: 'Gizle',
      months: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    },
    footer: {
      program: 'Program',
      events: 'Regatlar ve kurslar',
      privacy: 'Gizlilik politikası',
      terms: 'Kullanım koşulları',
      contact: 'İletişim',
      tagline: 'NavCoSail — bir CoSail projesi',
    },
    placeholder: 'Ekran görüntüsü',
  },
};
