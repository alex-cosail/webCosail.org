import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  Anchor, 
  Wind, 
  Sparkles, 
  Share2, 
  ShieldCheck, 
  ChevronRight, 
  Users, 
  CheckCircle2, 
  Send,
  Navigation
} from 'lucide-react';
import { Language } from '../types';

interface RoutesAnnouncementProps {
  lang: Language;
}

interface PlannedRoute {
  id: string;
  region: { en: string; ru: string; tr: string };
  title: { en: string; ru: string; tr: string };
  subtitle: { en: string; ru: string; tr: string };
  distance: string;
  duration: string;
  difficulty: { en: string; ru: string; tr: string };
  highlights: { en: string[]; ru: string[]; tr: string[] };
  seamanshipNotes: { en: string; ru: string; tr: string };
  windConditions: string;
  color: string;
}

const SAMPLE_ROUTES: PlannedRoute[] = [
  {
    id: 'fethiye-gocek',
    region: { 
      en: 'Turkey • Gulf of Fethiye & Göcek', 
      ru: 'Турция • Залив Фетхие и Гёчек', 
      tr: 'Türkiye • Fethiye ve Göcek Körfezi' 
    },
    title: { 
      en: 'Pine Bays & Ancient Ruins Circuit', 
      ru: 'Круиз по сосновым бухтам и античным руинам', 
      tr: 'Çam Koyları ve Antik Kalıntılar Rotası' 
    },
    subtitle: { 
      en: 'Fethiye — Sarsala — Wall Bay — Tomb Bay — Göcek', 
      ru: 'Фетхие — Сарсала — Уолл Бэй — Бухта Гробниц — Гёчек', 
      tr: 'Fethiye — Sarsala — Wall Bay — Mezar Koyu — Göcek' 
    },
    distance: '75 NM',
    duration: '7 Days',
    difficulty: { 
      en: 'Beginner / Flotilla Friendly', 
      ru: 'Для новичков / Шкиперская флотилия', 
      tr: 'Başlangıç / Filo Dostu' 
    },
    highlights: {
      en: ['Protected anchoring with stern-to-tree lines', 'Reliable afternoon thermal winds (12-16 kts)', 'Calm waters ideal for crew training'],
      ru: ['Защищенные стоянки с кормовыми концами за скалы/сосны', 'Предсказуемый дневной бриз (12-16 узлов)', 'Спокойная вода — идеально для тренировки экипажа'],
      tr: ['Kaya/ağaçlara koltuk halatı ile korunaklı demirleme', 'Güvenilir öğleden sonra termal rüzgarları (12-16 kt)', 'Mürettebat eğitimi için ideal sakin sular']
    },
    seamanshipNotes: {
      en: 'Good Seamanship: Check bottom holding in Wall Bay (steep drop-offs). Use long shore lines and trip line on rocky patches.',
      ru: 'Морская практика: В Уолл Бэй резкий свал глубин — отдавайте якорь на достаточной длине цепи. Рекомендуется буйреп на каменистых участках.',
      tr: 'İyi Denizcilik: Wall Bay\'de dik derinlik düşüşlerine dikkat edin. Kayalık zeminlerde bosa ve çıма halatına özen gösterin.'
    },
    windConditions: 'Meltemi light / Thermal breeze 10-18 kts',
    color: '#2E80FF'
  },
  {
    id: 'saronic-islands',
    region: { 
      en: 'Greece • Saronic Gulf', 
      ru: 'Греция • Саронический залив', 
      tr: 'Yunanistan • Saronik Körfezi' 
    },
    title: { 
      en: 'Classic Navigation & Island Heritage', 
      ru: 'Классическая навигация и острова Сароники', 
      tr: 'Klasik Navigasyon ve Ada Mirası' 
    },
    subtitle: { 
      en: 'Alimos (Athens) — Aegina — Poros — Hydra — Dokos', 
      ru: 'Алимос (Афины) — Эгина — Порос — Идра — Докос', 
      tr: 'Alimos (Atina) — Aegina — Poros — Hydra — Dokos' 
    },
    distance: '110 NM',
    duration: '7 Days',
    difficulty: { 
      en: 'Intermediate Coastal', 
      ru: 'Средний уровень / Прибрежное плавание', 
      tr: 'Orta Düzey Kıyı Seyri' 
    },
    highlights: {
      en: ['Dense ferry traffic separation near Piraeus', 'Stern-to town quay mooring practice', 'Unspoiled anchorages in Dokos fjord'],
      ru: ['Зоны разделения движения и интенсивный трафик у Пирея', 'Швартовка кормой к городской набережной (Town Quay)', 'Уединенная стоянка в дикой бухте острова Докос'],
      tr: ['Pire yakınlarında yoğun feribot trafiği ve TSS geçişi', 'Şehir rıhtımlarına kıçtan kara bağlama tecrübesi', 'Dokos fiyordunda el değmemiş vahşi demirleme']
    },
    seamanshipNotes: {
      en: 'Good Seamanship: Cross traffic schemes at right angles. Hydra harbour fills early — prepare anchor cross-foul awareness.',
      ru: 'Морская практика: Пересечение зон разделения строго под прямым углом. В гавани Идры плотная стоянка кормой — следите за перекрещиванием якорей.',
      tr: 'İyi Denizcilik: Trafik ayrım düzenlerini dik açıyla geçin. Hydra limanında demir karmaşasına (cross-anchor) dikkat edin.'
    },
    windConditions: 'Moderate Meltemi 15-25 kts',
    color: '#0F2C59'
  },
  {
    id: 'rhodes-symi-crossing',
    region: { 
      en: 'Dodecanese & Lycian Coast', 
      ru: 'Додеканес и Ликийское побережье', 
      tr: 'On İki Adalar ve Likya Kıyıları' 
    },
    title: { 
      en: 'International Passage & Channel Tactics', 
      ru: 'Международный переход и тактика проливов', 
      tr: 'Uluslararası Geçiş ve Boğaz Taktikleri' 
    },
    subtitle: { 
      en: 'Marmaris — Bozburun — Symi (Panormitis) — Rhodes', 
      ru: 'Мармарис — Бозбурун — Сими (Панормитис) — Родос', 
      tr: 'Marmaris — Bozburun — Simi (Panormitis) — Rodos' 
    },
    distance: '95 NM',
    duration: '5-7 Days',
    difficulty: { 
      en: 'Active Coastal / Passage Planning', 
      ru: 'Активный переход / Точный штурманский расчёт', 
      tr: 'Aktif Seyir / Geçiş Planlaması' 
    },
    highlights: {
      en: ['Clearance formalities & flag etiquette', 'Venturi wind acceleration around headlands', 'Scenic monastery fjord anchorage in Panormitis'],
      ru: ['Таможенные формальности и морской флажный этикет', 'Усиление ветра (эффект трубы) у мысов и между островами', 'Защищенный фиорд монастыря Панормитис'],
      tr: ['Gümrük/giriş formaliteleri ve bayrak protokolü', 'Burunlarda venturi rüzgar hızlanmaları ve kanal dalgaları', 'Panormitis manastır fiyordunda korunaklı demirleme']
    },
    seamanshipNotes: {
      en: 'Good Seamanship: Anticipate 10-15 knot gust increases off Cape Karaburun. Calculate magnetic variation with WMM 2025.',
      ru: 'Морская практика: Учитывайте усиление порывов на 10-15 узлов на выходе из пролива. Расчёт магнитного склонения по модели WMM 2025.',
      tr: 'İyi Denizcilik: Karaburun açıklarında rüzgar sağanaklarına hazırlıklı olun. WMM 2025 ile manyetik sapmayı önceden hesaplayın.'
    },
    windConditions: 'NW 15-28 kts in straits',
    color: '#FF6B4A'
  }
];

export const RoutesAnnouncement: React.FC<RoutesAnnouncementProps> = ({ lang }) => {
  const [suggestModalOpen, setSuggestModalOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [routeName, setRouteName] = useState('');
  const [routeRegion, setRouteRegion] = useState('');
  const [skipperEmail, setSkipperEmail] = useState('');
  const [notes, setNotes] = useState('');

  const handleSendSuggestion = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[CourseMate Routes Proposal] ${routeName} (${routeRegion})`);
    const body = encodeURIComponent(
      `Route: ${routeName}\nRegion: ${routeRegion}\nFrom: ${skipperEmail}\nNotes:\n${notes}`
    );
    window.location.href = `mailto:mail@cosail.org?subject=${subject}&body=${body}`;
    setFormSent(true);
    setTimeout(() => {
      setSuggestModalOpen(false);
      setFormSent(false);
      setRouteName('');
      setRouteRegion('');
      setNotes('');
    }, 2500);
  };

  const t = {
    en: {
      badge: 'Coming in Next Version',
      title: 'Seamanship Route Hub & Passage Plan Library',
      subtitle:
        'Proven sailing routes adhering to Good Seamanship practice: verified safe anchorages, tidal and wind gates, navigational hazards, and 1-click export to your CourseMate workbench.',
      shareTitle: 'Created by Skippers, Verified by Practice',
      shareDesc:
        'In the next major update, you will be able to share your own passage plans, download community routes in GPX, and review tested routes from experienced skippers and certified sailing instructors.',
      sampleBadge: 'Preview • Route Archetypes',
      suggestBtn: 'Submit a Route for Version 1.1',
      openInFuture: 'Will open in CourseMate in 1 click',
      pointsOfInterest: 'Key Nautical Insights:',
      seamanshipStandard: 'Good Seamanship Standard',
      modalTitle: 'Suggest a Passage Plan for the Community',
      modalDesc: 'Have a well-documented coastal or offshore route? Submit its key waypoints and safety notes to be included in the official CourseMate Route Library.',
      formRouteName: 'Route Name (e.g., Göcek Bays Circuit)',
      formRegion: 'Cruising Region (e.g., Turkey / Aegean / Baltic)',
      formEmail: 'Your Contact Email / Call Sign',
      formNotes: 'Key Anchoring Spots & Seamanship Warnings',
      formSubmit: 'Submit Passage Plan via mail@cosail.org',
      formSuccess: 'Thank you, Skipper! Your route proposal has been sent to mail@cosail.org.',
      modalClose: 'Cancel'
    },
    ru: {
      badge: 'Анонс • В следующей версии',
      title: 'Библиотека проверенных маршрутов и Морская практика',
      subtitle:
        'Готовые маршруты, соответствующие принципам хорошей морской практики (Good Seamanship): безопасные якорные стоянки, ветровые режимы, опасности на курсе и перенос в CourseMate в один клик.',
      shareTitle: 'Создано шкиперами, проверено морем',
      shareDesc:
        'В ближайшем обновлении вы сможете делиться своими планами переходов, скачивать маршруты сообщества в GPX и использовать проверенные планы от сертифицированных инструкторов и опытных капитанов.',
      sampleBadge: 'Превью • Примеры маршрутов следующего релиза',
      suggestBtn: 'Предложить свой маршрут в первый выпуск',
      openInFuture: 'Открытие в CourseMate в 1 клик',
      pointsOfInterest: 'Навигационные особенности:',
      seamanshipStandard: 'Морская практика (Safety First)',
      modalTitle: 'Предложить маршрут для морской библиотеки',
      modalDesc: 'Есть проверенный и любимый маршрут? Поделитесь ключевыми точками, проверенными стоянками и предупреждениями для других шкиперов.',
      formRouteName: 'Название маршрута (например, По сосновым бухтам Гёчека)',
      formRegion: 'Акватория (например, Турция / Киклады / Балтика)',
      formEmail: 'Ваш контактный email или позывной',
      formNotes: 'Ключевые стоянки, глубины и особенности безопасности',
      formSubmit: 'Отправить маршрут на mail@cosail.org',
      formSuccess: 'Спасибо, шкипер! Черновик предложения отправлен на mail@cosail.org.',
      modalClose: 'Отмена'
    },
    tr: {
      badge: 'Gelecek Sürümde',
      title: 'İyi Denizcilik Rota Kütüphanesi ve Geçiş Planları',
      subtitle:
        'İyi denizcilik ilkelerine uygun rotalar: güvenli demirleme yerleri, rüzgar koridorları, seyir tehlikeleri ve CourseMate çalışma alanına tek tıkla aktarım.',
      shareTitle: 'Kaptanlar Tarafından Hazırlandı, Denizde Test Edildi',
      shareDesc:
        'Gelecek büyük güncellemede kendi geçiş planlarınızı paylaşabilecek, topluluk rotalarını GPX formatında indirebilecek ve deneyimli eğitmenlerin onaylı rotalarını kullanabileceksiniz.',
      sampleBadge: 'Önizleme • Gelecek Sürüm Rota Örnekleri',
      suggestBtn: 'Sürüm 1.1 İçin Rota Öner',
      openInFuture: 'CourseMate\'te 1 tıkla açılacak',
      pointsOfInterest: 'Seyir ve Güvenlik Detayları:',
      seamanshipStandard: 'İyi Denizcilik Standardı',
      modalTitle: 'Topluluk İçin Rota Planı Öner',
      modalDesc: 'Deneyimlediğiniz güvenli bir rota mı var? Temel noktaları, demir yerlerini ve emniyet notlarını CourseMate Kütüphanesi için iletin.',
      formRouteName: 'Rota Adı (Örn: Göcek Koyları Çemberi)',
      formRegion: 'Seyir Bölgesi (Örn: Türkiye / Ege / Akdeniz)',
      formEmail: 'İletişim E-postanız',
      formNotes: 'Önemli demir yerleri, derinlikler ve seyir uyarıları',
      formSubmit: 'mail@cosail.org Üzerinden Gönder',
      formSuccess: 'Teşekkürler Kaptan! Rota öneriniz mail@cosail.org adresine iletildi.',
      modalClose: 'Vazgeç'
    }
  }[lang];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Compass rose ambient background element */}
      <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-96 h-96 opacity-5 pointer-events-none">
        <Compass className="w-full h-full text-[#0F2C59]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E80FF]/10 border border-[#2E80FF]/25 text-xs font-heading font-bold text-[#2E80FF] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B4A]" />
            <span>{t.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#0F2C59] tracking-tight leading-tight">
            {t.title}
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#F0F6FF] border border-[#2E80FF]/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#2E80FF] text-white flex items-center justify-center shadow-md shadow-[#2E80FF]/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#0F2C59]">
              {lang === 'ru' ? 'Стандарт морской практики' : lang === 'tr' ? 'İyi Denizcilik İlkeleri' : 'Good Seamanship Standard'}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {lang === 'ru' 
                ? 'Каждый маршрут содержит расчет перехода, резервные укрытия от шторма, глубины, характер грунта и рекомендации по безопасной швартовке.'
                : lang === 'tr'
                ? 'Her rota geçiş hesaplamaları, fırtına sığınakları, dip yapısı ve emniyetli bağlama tavsiyelerini içerir.'
                : 'Each passage includes backup storm havens, seabed holding data, night entrance cautions, and mooring recommendations.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F0F6FF] border border-[#2E80FF]/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B4A] text-white flex items-center justify-center shadow-md shadow-[#FF6B4A]/20">
              <Share2 className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#0F2C59]">
              {lang === 'ru' ? 'Обмен между шкиперами' : lang === 'tr' ? 'Kaptanlar Arası Paylaşım' : 'Skipper-to-Skipper Sharing'}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {lang === 'ru'
                ? 'Публикуйте авторские маршруты, делитесь секретными якорными стоянками с экипажем или скачивайте проверенные треки сообщества.'
                : lang === 'tr'
                ? 'Kendi rotalarınızı yayınlayın, gizli koyları mürettebatınızla paylaşın veya topluluğun test ettiği rotaları indirin.'
                : 'Publish your passage plans, share hidden anchorages with fellow sailors, or download verified tracks directly to your plotter.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#F0F6FF] border border-[#2E80FF]/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F2C59] text-white flex items-center justify-center shadow-md shadow-[#0F2C59]/20">
              <Navigation className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-base text-[#0F2C59]">
              {lang === 'ru' ? 'Интеграция с CourseMate' : lang === 'tr' ? 'CourseMate Entegrasyonu' : '1-Click CourseMate Sync'}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
              {lang === 'ru'
                ? 'Один клик — и все точки поворота, магнитные склонения (WMM 2025) и дистанции мгновенно загружаются на ваш планшет.'
                : lang === 'tr'
                ? 'Tek bir tıkla tüm dönüş noktaları, manyetik sapmalar (WMM 2025) ve mesafeler çalışma alanınıza anında yüklenir.'
                : 'One click instantly loads all waypoints, magnetic variations (WMM 2025), and distances onto your navigation table.'}
            </p>
          </div>
        </div>

        {/* Sample Routes Gallery (3 Archetypes) */}
        <div className="mt-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <div className="text-xs font-heading font-bold text-[#FF6B4A] uppercase tracking-wider">
                {t.sampleBadge}
              </div>
              <h3 className="text-xl font-heading font-bold text-[#0F2C59] mt-0.5">
                {lang === 'ru' ? 'Примеры маршрутов первого каталога' : lang === 'tr' ? 'İlk Kataloğun Örnek Rotaları' : 'First Catalog Route Examples'}
              </h3>
            </div>

            <button
              onClick={() => setSuggestModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2E80FF] hover:bg-[#1a6de8] text-white text-xs sm:text-sm font-heading font-bold shadow-md shadow-[#2E80FF]/25 transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t.suggestBtn}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {SAMPLE_ROUTES.map((route) => (
              <div
                key={route.id}
                className="rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Header ribbon */}
                <div className="p-5 border-b border-slate-100 bg-[#F0F6FF]/60 flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-heading font-semibold text-[#2E80FF] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {route.region[lang]}
                    </span>
                    <h4 className="text-base font-heading font-bold text-[#0F2C59] mt-1 group-hover:text-[#2E80FF] transition-colors">
                      {route.title[lang]}
                    </h4>
                  </div>
                  <span className="shrink-0 text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[#0F2C59]">
                    {route.distance}
                  </span>
                </div>

                {/* Subtitle / Leg */}
                <div className="px-5 py-3 bg-white border-b border-slate-100 flex items-center justify-between text-xs text-[#64748B]">
                  <span className="truncate font-medium">{route.subtitle[lang]}</span>
                  <span className="shrink-0 font-semibold text-[#0F2C59] ml-2">{route.duration}</span>
                </div>

                {/* Body Details */}
                <div className="p-5 space-y-4 flex-grow text-xs">
                  <div>
                    <div className="text-[11px] font-heading font-bold text-[#0F2C59] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Anchor className="w-3.5 h-3.5 text-[#2E80FF]" />
                      <span>{t.pointsOfInterest}</span>
                    </div>
                    <ul className="space-y-1.5 text-[#64748B]">
                      {route.highlights[lang].map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Seamanship Box */}
                  <div className="p-3 rounded-xl bg-[#F0F6FF] border border-[#2E80FF]/15 text-[#0F2C59]">
                    <div className="font-heading font-bold text-[10px] uppercase tracking-wider text-[#FF6B4A] flex items-center gap-1 mb-1">
                      <Wind className="w-3 h-3" />
                      <span>{t.seamanshipStandard}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-[#0F2C59]/80 font-normal">
                      {route.seamanshipNotes[lang]}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#64748B] italic">
                    {t.openInFuture}
                  </span>
                  <span className="text-xs font-heading font-bold text-[#2E80FF] flex items-center gap-1">
                    v1.1
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout Footer */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#0F2C59] to-[#1E3E7B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#F0F6FF]">
              <Users className="w-3.5 h-3.5 text-[#FF6B4A]" />
              <span>{t.shareTitle}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
              {lang === 'ru' 
                ? 'Хотите первыми опубликовать свой маршрут?' 
                : lang === 'tr' 
                ? 'Kendi rotanızı ilk yayınlayanlardan olmak ister misiniz?' 
                : 'Want to be among the first featured route authors?'}
            </h3>
            <p className="text-xs sm:text-sm text-[#F0F6FF]/80 leading-relaxed">
              {t.shareDesc}
            </p>
          </div>

          <button
            onClick={() => setSuggestModalOpen(true)}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#FF6B4A] hover:bg-[#fa5a36] text-white font-heading font-bold text-sm shadow-lg shadow-[#FF6B4A]/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{t.suggestBtn}</span>
          </button>
        </div>
      </div>

      {/* Suggest Route Modal */}
      {suggestModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            {formSent ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#10B981]/10 text-[#10B981] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-heading font-bold text-[#0F2C59]">
                  {t.formSuccess}
                </h4>
              </div>
            ) : (
              <form onSubmit={handleSendSuggestion} className="space-y-4 text-left">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#2E80FF] uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF6B4A]" />
                    <span>v1.1 Early Submissions</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0F2C59]">
                    {t.modalTitle}
                  </h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {t.modalDesc}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-heading font-bold text-[#0F2C59] mb-1">
                      {t.formRouteName}
                    </label>
                    <input
                      type="text"
                      required
                      value={routeName}
                      onChange={(e) => setRouteName(e.target.value)}
                      placeholder="e.g. Marmaris — Fethiye — Göcek Passage"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2E80FF] focus:ring-1 focus:ring-[#2E80FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-[#0F2C59] mb-1">
                      {t.formRegion}
                    </label>
                    <input
                      type="text"
                      required
                      value={routeRegion}
                      onChange={(e) => setRouteRegion(e.target.value)}
                      placeholder="e.g. Mediterranean / Turkey / Lycian Coast"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2E80FF] focus:ring-1 focus:ring-[#2E80FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-[#0F2C59] mb-1">
                      {t.formEmail}
                    </label>
                    <input
                      type="email"
                      required
                      value={skipperEmail}
                      onChange={(e) => setSkipperEmail(e.target.value)}
                      placeholder="skipper@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2E80FF] focus:ring-1 focus:ring-[#2E80FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-[#0F2C59] mb-1">
                      {t.formNotes}
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Anchor depth, night approach warnings, fuel/water spots..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#2E80FF] focus:ring-1 focus:ring-[#2E80FF]"
                    />
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSuggestModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-xs font-heading font-semibold text-[#64748B] hover:text-[#0F2C59] hover:bg-slate-100 transition-colors"
                  >
                    {t.modalClose}
                  </button>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#2E80FF] hover:bg-[#1a6de8] text-white text-xs font-heading font-bold shadow-md shadow-[#2E80FF]/25 transition-all flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.formSubmit}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
