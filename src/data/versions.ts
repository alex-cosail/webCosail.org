// "Versions and what's new" (docs/TZ_Site.md §5). Newest first.
// Only significant versions — where a function of the program was fully
// completed (Alexey 17.11.2026), about 5–6 steps back. Add a new entry when
// the next function is finished and released. Plain words, three languages.

export interface Version {
  version: string; // as in the program (kAppVersion)
  date: string; // YYYY-MM-DD
  notes: { en: string[]; ru: string[]; tr: string[] };
}

export const versions: Version[] = [
  {
    version: '0.9.3-beta.46',
    date: '2026-11-17',
    notes: {
      en: ['Training module for schools: an instructor creates a task on a training chart, a student solves it by link on a computer or a phone, the program checks the answers and sends the result to the instructor. Questions to the instructor right from the task; lighthouse lights flash in task texts with their real character.'],
      ru: ['Учебный модуль для школ: преподаватель составляет задачу на учебной карте, студент решает её по ссылке на компьютере или телефоне, программа проверяет ответы и отправляет итог преподавателю. Вопрос преподавателю — прямо из задачи; огни маяков в условии мигают по настоящей характеристике.'],
      tr: ['Okullar için eğitim modülü: eğitmen eğitim haritasında görev hazırlar, öğrenci bağlantıyla bilgisayarda veya telefonda çözer, program cevapları kontrol edip sonucu eğitmene gönderir. Eğitmene soru doğrudan görevden; görev metnindeki fener ışıkları gerçek karakterleriyle yanıp söner.'],
    },
  },
  {
    version: '0.9.3-beta.36',
    date: '2026-11-15',
    notes: {
      en: ['Our own vector chart layer: shorelines, piers, depth contours and soundings, seabed, buoys and beacons — visible to everyone, no sign-in needed.'],
      ru: ['Собственный векторный слой карты: береговая линия, причалы, изобаты и отметки глубин, грунт, буи и вехи — виден всем, без регистрации.'],
      tr: ['Kendi vektör harita katmanımız: kıyı çizgisi, iskeleler, derinlik eğrileri ve iskandil değerleri, deniz tabanı, şamandıralar ve işaretler — herkes görebilir, kayıt gerekmez.'],
    },
  },
  {
    version: '0.9.3-beta.27',
    date: '2026-11-12',
    notes: {
      en: ['Paper charts in the app: photograph a chart, tie it to the map by its corners and a few points — and work on it like on an electronic chart. Charts travel with the project file.'],
      ru: ['Бумажные карты в программе: сфотографируйте карту, привяжите её по углам и нескольким точкам — и работайте на ней, как на электронной. Карты передаются вместе с проектом.'],
      tr: ['Uygulamada kâğıt haritalar: haritanın fotoğrafını çekin, köşelerinden ve birkaç noktadan bağlayın — elektronik harita gibi üzerinde çalışın. Haritalar proje dosyasıyla birlikte gider.'],
    },
  },
  {
    version: '0.9.3-beta.11',
    date: '2026-11-09',
    notes: {
      en: ['Fast Route on the start screen, on a computer and a phone: sketch a route in a few clicks, see courses and distances, share it as a link or QR code, save it into a project.'],
      ru: ['Быстрый маршрут на первом экране — на компьютере и телефоне: прикиньте маршрут за несколько кликов, сразу курсы и расстояния, поделитесь ссылкой или QR-кодом, сохраните в проект.'],
      tr: ['Başlangıç ekranında hızlı rota — bilgisayarda ve telefonda: birkaç tıklamayla rota çizin, rotaları ve mesafeleri hemen görün, bağlantı veya QR kodu olarak paylaşın, projeye kaydedin.'],
    },
  },
  {
    version: '0.9.3-beta.4',
    date: '2026-10-21',
    notes: {
      en: ['Sign-in with Google or email. Everything works without an account too; registered users get a little more.'],
      ru: ['Вход через Google или email. Всё работает и без аккаунта, а зарегистрированным доступно немного больше.'],
      tr: ['Google veya e-posta ile giriş. Her şey hesapsız da çalışır; kayıtlı kullanıcılar biraz daha fazlasına erişir.'],
    },
  },
  {
    version: '0.9.3-beta.1',
    date: '2026-10-18',
    notes: {
      en: ['Detailed 10 and 20 m depth contours along the coast from Bodrum to Antalya and a shallow-water warning.'],
      ru: ['Подробные изобаты 10 и 20 м вдоль берега от Бодрума до Антальи и предупреждение о малых глубинах.'],
      tr: ['Bodrum’dan Antalya’ya kıyı boyunca ayrıntılı 10 ve 20 m derinlik eğrileri ve sığ su uyarısı.'],
    },
  },
];
