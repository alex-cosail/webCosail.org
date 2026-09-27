import { Language, TranslationContent } from '../types';

export const TRANSLATIONS: Record<Language, TranslationContent> = {
  en: {
    nav: {
      tagline: 'Smart Passage Planning & Interactive Navigation Workbench',
      features: 'Core Capabilities',
      specs: 'Cloudflare & Deployment',
      offlineBadge: 'WMM 2025 • Cloud Sync Ready',
      launchBtn: 'Launch CourseMate',
    },
    hero: {
      badge: 'Marine Passage Planning & Navigator Platform',
      titleStart: 'Passage Planning Made Fast & Precise.',
      titleHighlight: 'Modern Tools & Traditional Seamanship.',
      titleEnd: '',
      subtitle:
        'Craft comprehensive offshore passage plans in minutes using modern tools and traditional nautical methods. Share voyages with your crew in one click, calibrate photos of real paper charts, train students with instant homework reviews, and navigate offshore with a watchful pocket companion.',
      ctaPrimary: 'Launch CourseMate (Public Beta)',
      ctaSecondary: 'Technical Specs & Architecture',
      quickStats: {
        gpsStat: '1-Click Share',
        gpsDesc: 'Instant crew passage plan sync',
        wmmStat: 'Paper Chart Overlay',
        wmmDesc: 'Calibrate photos of paper charts',
        cartographyStat: 'Pocket Navigator',
        cartographyDesc: 'Hazard alerts & weather watch',
      },
    },
    features: {
      sectionBadge: 'Functional Architecture',
      sectionTitle: 'Everything for Passage Planning, Education & At-Sea Navigation',
      sectionSubtitle:
        'A single seamless workflow: plan with modern and classic tools on desktop, sync to cloud, train navigation students, and carry a dependable co-navigator on your smartphone.',
      items: {
        passagePlan: {
          title: 'Fast & Precise Passage Planning',
          desc: 'Quickly prepare high-quality passage plans combining modern digital precision with classic navigation conventions. Share the complete route, waypoints, and ETA calculations with your crew in a single click.',
          tag: '1-Click Crew Sharing',
        },
        teaching: {
          title: 'Interactive Navigation Classroom',
          desc: 'Built for sailing instructors and maritime academies. Explain practical navigational tasks visually, distribute assignments to students, and review individual solutions and chart plottings in real time.',
          tag: 'Instructor & Student Workbench',
        },
        smartNavigator: {
          title: 'Pocket Co-Navigator at Sea',
          desc: 'Keep CourseMate on your smartphone throughout the passage. Like a trusted first mate, it continuously tracks your passage plan, alerting you to navigational hazards, restricted zones, and worsening weather forecasts.',
          tag: 'Hazard & Weather Warnings',
        },
        paperChartOverlay: {
          title: 'Paper Chart Photo Calibration',
          desc: 'Take a photo of any physical paper chart, align geographic anchor points, and plot your entire digital passage plan directly onto your authentic chart image. Seamless bridge between paper and screen.',
          tag: 'Georeferenced Chart Overlay',
        },
        cloudSync: {
          title: 'Cloud Projects & Multi-Device Sync',
          desc: 'Registered captains can store all voyage projects, route archives, and custom overlays securely in the cloud. Access, edit, and navigate your plans from anywhere in the world on any tablet, phone, or laptop.',
          tag: 'Worldwide Cloud Storage',
        },
      },
    },
    liveDemoBanner: {
      heading: 'Ready to build and share your next passage plan?',
      text: 'Experience CourseMate directly in your browser on tablet, phone, or laptop. Save your projects to the cloud, calibrate your paper charts, and invite your crew with one click.',
      launchText: 'Open nav.cosail.org',
      pwaNotice: 'PWA Offline Ready • Multi-device Cloud Sync • Paper Chart Overlay',
    },
    deployment: {
      badge: 'Cloudflare Pages Architecture',
      title: 'Cloudflare DNS, SPA Fallback & Security Headers',
      subtitle:
        'Technical checklist and pre-configured deployment artifacts for hosting at nav.cosail.org and cosail.org.',
      openModalBtn: 'View Cloudflare Config Files (_redirects & _headers)',
      dnsTitle: 'Cloudflare DNS Routing',
      dnsDesc:
        'CNAME records configured with Orange Cloud (Proxied) for automatic SSL, edge DDoS protection, and instant global CDN caching.',
      cfPagesTitle: 'Flutter Web SPA Fallback',
      cfPagesDesc:
        'Single-page application deep routing handled via Cloudflare _redirects to avoid 404 errors on direct navigation or page refresh.',
    },
    footer: {
      tagline: 'CoSail - CourseMate • Dedicated to precision seamanship, practical navigation education, and freedom at sea.',
      contactLabel: 'Official Contact & Captain Inquiries',
      emailCopied: 'Copied to clipboard!',
      copyEmail: 'Copy Email',
      rights: '© 2026 CoSail Association. All rights reserved.',
      linksTitle: 'Navigation & Community',
      mainSite: 'CoSail Main Site (cosail.org)',
      navigatorApp: 'CourseMate App (nav.cosail.org)',
      community: 'Captain Network',
      privacyNote: 'Encrypted Cloud Sync for Registered Users • No telemetry tracking.',
    },
  },
  ru: {
    nav: {
      tagline: 'Подготовка плана перехода и морская навигационная среда',
      features: 'Возможности',
      specs: 'Cloudflare и архитектура',
      offlineBadge: 'WMM 2025 • Облачная синхронизация',
      launchBtn: 'Открыть CourseMate',
    },
    hero: {
      badge: 'Платформа подготовки переходов и навигации',
      titleStart: 'Быстрая и качественная подготовка плана перехода.',
      titleHighlight: 'Современные методы и классика навигации.',
      titleEnd: '',
      subtitle:
        'Готовьте профессиональный план перехода за считанные минуты, объединяя удобные цифровые методы и традиционные инструменты. Делитесь маршрутом с командой в один клик, привязывайте фото реальных бумажных карт, обучайте курсантов и держите надежного штурмана в своем смартфоне.',
      ctaPrimary: 'Открыть CourseMate (nav.cosail.org)',
      ctaSecondary: 'Архитектура и Cloudflare',
      quickStats: {
        gpsStat: 'Шеринг в 1 клик',
        gpsDesc: 'Отправка плана перехода экипажу',
        wmmStat: 'Бумажные карты',
        wmmDesc: 'Привязка любого фото карты',
        cartographyStat: 'Штурман в море',
        cartographyDesc: 'Опасности и ухудшение погоды',
      },
    },
    features: {
      sectionBadge: 'Функционал программы',
      sectionTitle: 'Всё для планирования переходов, обучения и контроля на вахте',
      sectionSubtitle:
        'Единая экосистема для шкиперов, преподавателей и экипажей: готовьте маршрут на компьютере, синхронизируйте через облако, обучайте студентов и выходите в море со смартфоном-штурманом.',
      items: {
        passagePlan: {
          title: 'Быстрая подготовка плана перехода и шеринг в 1 клик',
          desc: 'Быстро и качественно готовьте детальный план перехода, используя современные удобные методы и традиционные штурманские инструменты. Отправляйте готовый маршрут, контрольные точки и расчет времени перехода всей команде в один клик.',
          tag: 'Шеринг экипажу в 1 клик',
        },
        teaching: {
          title: 'Инструмент для преподавателей навигации',
          desc: 'Дает возможность преподавателям быстро и наглядно учить навигации на реальных практических задачах: формируйте и рассылайте учебные задания, мгновенно получайте и проверяйте прокладку любого студента.',
          tag: 'Обучение и моментальная проверка',
        },
        smartNavigator: {
          title: 'Надежный штурман в смартфоне на переходе',
          desc: 'На переходе держите под рукой смартфон с приложением, которое, как опытный штурман, строго следует плану перехода: своевременно напоминает об опасных участках акватории, мелях, навигационных ограничениях и ухудшении прогноза погоды.',
          tag: 'Контроль опасностей и погоды',
        },
        paperChartOverlay: {
          title: 'Привязка фото любой бумажной карты',
          desc: 'Сфотографируйте вашу физическую бумажную карту, выполните быструю геопривязку контрольных ориентиров и готовьте план перехода прямо на ней. Идеальный мост между классической картой на штурманском столе и цифровым экраном.',
          tag: 'Геопривязка фото карт',
        },
        cloudSync: {
          title: 'Облачные проекты и доступ отовсюду',
          desc: 'Зарегистрированные пользователи могут надежно сохранять свои навигационные проекты на сервере и иметь к ним мгновенный доступ в любой точке мира с любого устройства — смартфона, планшета или ноутбука.',
          tag: 'Доступ по всему миру',
        },
      },
    },
    liveDemoBanner: {
      heading: 'Готовы спланировать переход и поделиться с экипажем?',
      text: 'Запустите CourseMate прямо в браузере на смартфоне, планшете или компьютере. Храните проекты в облаке, привязывайте фотографии бумажных карт и отправляйте план команде за одну секунду.',
      launchText: 'Запустить nav.cosail.org',
      pwaNotice: 'Офлайн PWA • Облачная синхронизация • Привязка бумажных карт',
    },
    deployment: {
      badge: 'Архитектура Cloudflare Pages',
      title: 'Настройки Cloudflare DNS, SPA-маршрутизация и заголовки',
      subtitle:
        'Чек-лист и готовые конфигурационные файлы для развертывания на nav.cosail.org и cosail.org.',
      openModalBtn: 'Посмотреть файлы конфигурации (_redirects и _headers)',
      dnsTitle: 'DNS-маршрутизация Cloudflare',
      dnsDesc:
        'CNAME записи с включенным «оранжевым облаком» (Proxied) для автоматического SSL, защиты от DDoS и кэширования статических ассетов.',
      cfPagesTitle: 'SPA Fallback для Flutter Web',
      cfPagesDesc:
        'Перенаправление всех внутренних маршрутов на index.html через файл _redirects для предотвращения ошибок 404 при обновлении страницы.',
    },
    footer: {
      tagline: 'CoSail - CourseMate • Создано для морского братства, шкиперов, преподавателей навигации и безопасных переходов.',
      contactLabel: 'Официальный контакт и связь со шкиперами',
      emailCopied: 'Скопировано в буфер обмена!',
      copyEmail: 'Скопировать Email',
      rights: '© 2026 CoSail Association. Все права защищены.',
      linksTitle: 'Навигация и ссылки',
      mainSite: 'Главный сайт (cosail.org)',
      navigatorApp: 'Приложение CourseMate (nav.cosail.org)',
      community: 'Сообщество капитанов',
      privacyNote: 'Защищенная облачная синхронизация для зарегистрированных пользователей • Без скрытой телеметрии.',
    },
  },
  tr: {
    nav: {
      tagline: 'Seyir Planlama ve Denizcilik Çalışma Platformu',
      features: 'Özellikler',
      specs: 'Cloudflare ve Dağıtım',
      offlineBadge: 'WMM 2025 • Bulut Eşitleme Hazır',
      launchBtn: 'CourseMate\'i Başlat',
    },
    hero: {
      badge: 'Deniz Seyir Planlama ve Eğitim Platformu',
      titleStart: 'Hızlı ve Kusursuz Seyir Planlaması.',
      titleHighlight: 'Geleneksel Denizcilik ve Modern Yöntemler.',
      titleEnd: '',
      subtitle:
        'Geleneksel denizcilik araçları ve modern pratik yöntemleri birleştirerek dakikalar içinde eksiksiz seyir planı hazırlayın. Planınızı tek tıkla ekibinizle paylaşın, basılı harita fotoğraflarını kalibre edin, öğrencilere görevler atayın ve cebinizdeki güvenilir şturmanla güvenle seyredin.',
      ctaPrimary: 'CourseMate\'i Başlat (Public Beta)',
      ctaSecondary: 'Teknik Özellikler ve Mimari',
      quickStats: {
        gpsStat: 'Tek Tıkla Paylaş',
        gpsDesc: 'Ekibe anında seyir planı gönderimi',
        wmmStat: 'Basılı Harita',
        wmmDesc: 'Herhangi bir harita fotoğrafını kalibre et',
        cartographyStat: 'Cepteki Kılavuz',
        cartographyDesc: 'Tehlike uyarıları ve hava takibi',
      },
    },
    features: {
      sectionBadge: 'Fonksiyonel Mimari',
      sectionTitle: 'Seyir Planlama, Eğitim ve Denizdeki Seyir Kontrolü',
      sectionSubtitle:
        'Kaptanlar, eğitmenler ve mürettebat için tek ekosistem: masaüstünde rota hazırlayın, bulutta saklayın, öğrencileri eğitin ve akıllı telefonunuzdaki şturmanla seyre çıkın.',
      items: {
        passagePlan: {
          title: 'Hızlı Seyir Planı Hazırlama ve Tek Tıkla Paylaşım',
          desc: 'Modern dijital kolaylıkları ve klasik denizcilik kurallarını kullanarak yüksek kaliteli seyir planlarını hızla hazırlayın. Hazırladığınız rotayı, seyir sürelerini ve varış tahminlerini tek tıkla tüm ekiple paylaşın.',
          tag: 'Ekiple Tek Tıkla Paylaşım',
        },
        teaching: {
          title: 'Eğitmenler İçin İnteraktif Navigasyon Sınıfı',
          desc: 'Denizcilik okulları ve yelken eğitmenleri için özel araç: öğrencilere pratik navigasyon görevleri atayın, rota çalışmalarını ve cevapları anlık olarak görüntüleyip kontrol edin.',
          tag: 'Eğitim ve Anında Değerlendirme',
        },
        smartNavigator: {
          title: 'Seyirde Cepteki Güvenilir Şturman',
          desc: 'Seyir esnasında akıllı telefonunuz güvenilir bir şturman gibi yanınızda: seyir planını takip eder, sığlıkları, tehlikeli alanları ve kötüleşen hava tahminlerini size önceden hatırlatır.',
          tag: 'Tehlike ve Hava Durumu Uyarıları',
        },
        paperChartOverlay: {
          title: 'Basılı Harita Fotoğrafı Kalibrasyonu',
          desc: 'Fiziksel kağıt haritanızın fotoğrafını çekin, referans noktalarını bağlayın ve tüm dijital seyir planınızı doğrudan bu harita fotoğrafı üzerinde hazırlayın. Klasik harita masası ile ekran arasında kusursuz köprü.',
          tag: 'Coğrafi Harita Kalibrasyonu',
        },
        cloudSync: {
          title: 'Bulut Projeleri ve Dünyanın Her Yerinden Erişim',
          desc: 'Kayıtlı kullanıcılar tüm seyir projelerini ve rotalarını sunucuda güvenle saklayabilir; dünyanın herhangi bir yerinde telefon, tablet veya dizüstü bilgisayardan anında erişebilir.',
          tag: 'Dünya Çapında Bulut Depolama',
        },
      },
    },
    liveDemoBanner: {
      heading: 'Seyir planınızı hazırlayıp ekibinizle paylaşmaya hazır mısınız?',
      text: 'CourseMate\'i tarayıcınızda açın, projelerinizi bulutta saklayın, basılı harita fotoğraflarınızı kalibre edin ve seyir planınızı ekibinize saniyeler içinde iletin.',
      launchText: 'nav.cosail.org Adresini Aç',
      pwaNotice: 'PWA Çevrimdışı • Bulut Eşitleme • Basılı Harita Kalibrasyonu',
    },
    deployment: {
      badge: 'Cloudflare Pages Mimarisi',
      title: 'Cloudflare DNS, SPA Yönlendirme ve Güvenlik Başlıkları',
      subtitle:
        'nav.cosail.org ve cosail.org adreslerinde barındırma için teknik kontrol listesi ve hazır yapılandırma dosyaları.',
      openModalBtn: 'Cloudflare Yapılandırma Dosyalarını Gör (_redirects & _headers)',
      dnsTitle: 'Cloudflare DNS Yönlendirmesi',
      dnsDesc:
        'Otomatik SSL, DDoS koruması ve küresel CDN önbelleği için Turuncu Bulut (Proxied) özellikli CNAME kayıtları.',
      cfPagesTitle: 'Flutter Web SPA Fallback',
      cfPagesDesc:
        'Sayfa yenilendiğinde 404 hatasını önlemek için tüm iç rotaların _redirects ile index.html\'e yönlendirilmesi.',
    },
    footer: {
      tagline: 'CoSail - CourseMate • Hassas denizcilik, navigasyon eğitimi ve denizdeki özgürlüğe adanmıştır.',
      contactLabel: 'Resmi İletişim & Kaptan Başvuruları',
      emailCopied: 'Panoya kopyalandı!',
      copyEmail: 'E-postayı Kopyala',
      rights: '© 2026 CoSail Derneği. Tüm hakları saklıdır.',
      linksTitle: 'Bağlantılar ve Topluluk',
      mainSite: 'CoSail Ana Sayfası (cosail.org)',
      navigatorApp: 'CourseMate Uygulaması (nav.cosail.org)',
      community: 'Kaptan Ağı',
      privacyNote: 'Kayıtlı kullanıcılar için şifreli bulut depolama • Gizli telemetri veya izleme yoktur.',
    },
  },
};

