import React, { useState } from 'react';
import {
  Compass,
  Share2,
  GraduationCap,
  Smartphone,
  Image as ImageIcon,
  Cloud,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Send,
  Users,
  Crosshair,
  CloudSun,
  ShieldCheck,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react';
import { Language, TranslationContent } from '../types';

interface CourseMateFeaturesProps {
  content: TranslationContent;
  lang: Language;
}

export const CourseMateFeatures: React.FC<CourseMateFeaturesProps> = ({ content, lang }) => {
  const { features } = content;
  const isRu = lang === 'ru';
  const isTr = lang === 'tr';

  // Interactive Tab for practical showcase
  const [activeTab, setActiveTab] = useState<'plan' | 'paper' | 'school'>('plan');

  // Interactive Plan & Share state
  const [copiedShareLink, setCopiedShareLink] = useState(false);
  const [boatSpeed, setBoatSpeed] = useState<number>(6.5);
  const [selectedRouteIndex, setSelectedRouteIndex] = useState<number>(0);

  const sampleRoutes = [
    {
      nameRu: 'Бодрум → о. Кос → о. Сими',
      nameEn: 'Bodrum → Kos → Symi',
      nameTr: 'Bodrum → İstanköy → Sömbeki',
      nm: 44.5,
      hazardRu: 'Мелководье у мыса Кумбурну, интенсивное паромное движение',
      hazardEn: 'Shallow waters off Cape Kumburnu, high speed ferry traffic',
      hazardTr: 'Kumburnu sığlığı, yoğun feribot trafiği',
      weatherRu: 'Meltemi 16-20 kts (NW), к вечеру усиление до 25 kts',
      weatherEn: 'Meltemi 16-20 kts (NW), building to 25 kts by evening',
      weatherTr: 'Meltemi 16-20 kts (NW), akşama doğru 25 kts fırtına uyarısı',
    },
    {
      nameRu: 'Мармарис → о. Родос (Мандраки)',
      nameEn: 'Marmaris → Rhodes (Mandraki)',
      nameTr: 'Marmaris → Rodos (Mandraki)',
      nm: 26.8,
      hazardRu: 'Створный знак входа в бухту Мармариса, ветровая тень у мыса Кадырга',
      hazardEn: 'Marmaris bay entrance fairway, wind shadow south of Cape Kadirga',
      hazardTr: 'Marmaris boğaz geçişi, Kadırga Burnu güneyinde rüzgar gölgesi',
      weatherRu: 'WNW 12-15 kts, волнение 0.8 м, видимость более 10 миль',
      weatherEn: 'WNW 12-15 kts, sea state 0.8m, visibility > 10 NM',
      weatherTr: 'BKB 12-15 kts, dalga 0.8m, görüş 10 deniz milinden fazla',
    },
    {
      nameRu: 'Афины (Алимос) → о. Порос → о. Гидра',
      nameEn: 'Athens (Alimos) → Poros → Hydra',
      nameTr: 'Atina (Alimos) → Poros → İdra',
      nm: 38.2,
      hazardRu: 'Узкий фарватер пролива Порос, притопленные рифы восточнее Метаны',
      hazardEn: 'Narrow Poros channel, submerged reefs east of Methana peninsula',
      hazardTr: 'Dar Poros boğazı, Methana yarımadası doğusunda sığ kayalıklar',
      weatherRu: 'NE 14 kts, комфортный галфвинд, чистое небо',
      weatherEn: 'NE 14 kts, comfortable reaching, clear skies',
      weatherTr: 'KD 14 kts, apaz seyri, açık gökyüzü',
    },
  ];

  const currentRoute = sampleRoutes[selectedRouteIndex];
  const etaHours = (currentRoute.nm / boatSpeed).toFixed(1);

  const handleShareClick = () => {
    setCopiedShareLink(true);
    setTimeout(() => setCopiedShareLink(false), 2500);
  };

  return (
    <section id="features" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F6FF] border border-[#2E80FF]/25 text-[#2E80FF] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>{features.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0F2C59] tracking-tight">
            {features.sectionTitle}
          </h2>
          <p className="mt-4 text-base text-[#64748B] leading-relaxed">
            {features.sectionSubtitle}
          </p>
        </div>

        {/* 5 Core Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Passage Plan & 1-Click Share */}
          <div className="p-6 rounded-2xl bg-[#F0F6FF] border border-[#2E80FF]/15 hover:border-[#2E80FF]/40 transition-all shadow-sm flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white text-[#FF6B4A] flex items-center justify-center shadow-sm mb-5 group-hover:scale-105 transition-transform">
                <Share2 className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[#0F2C59] text-[10px] font-heading font-bold border border-slate-200 mb-3">
                {features.items.passagePlan.tag}
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0F2C59] mb-2 leading-snug">
                {features.items.passagePlan.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {features.items.passagePlan.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2E80FF]/15 flex items-center gap-2 text-xs font-semibold text-[#FF6B4A]">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>{isRu ? 'QR-код и прямая ссылка экипажу' : isTr ? 'QR ve anlık bağlantı' : 'QR code & crew link'}</span>
            </div>
          </div>

          {/* 2. Maritime Teaching & Instant Student Homework Review */}
          <div className="p-6 rounded-2xl bg-[#F0F6FF] border border-[#2E80FF]/15 hover:border-[#2E80FF]/40 transition-all shadow-sm flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white text-[#2E80FF] flex items-center justify-center shadow-sm mb-5 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[#0F2C59] text-[10px] font-heading font-bold border border-slate-200 mb-3">
                {features.items.teaching.tag}
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0F2C59] mb-2 leading-snug">
                {features.items.teaching.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {features.items.teaching.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2E80FF]/15 flex items-center gap-2 text-xs font-semibold text-[#2E80FF]">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>{isRu ? 'Интерактивный кабинет шкипера' : isTr ? 'Eğitmen kontrol paneli' : 'Interactive instructor panel'}</span>
            </div>
          </div>

          {/* 3. Pocket Co-Navigator at Sea (Hazards & Weather alerts) */}
          <div className="p-6 rounded-2xl bg-[#F0F6FF] border border-[#2E80FF]/15 hover:border-[#2E80FF]/40 transition-all shadow-sm flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white text-[#10B981] flex items-center justify-center shadow-sm mb-5 group-hover:scale-105 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[#0F2C59] text-[10px] font-heading font-bold border border-slate-200 mb-3">
                {features.items.smartNavigator.tag}
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0F2C59] mb-2 leading-snug">
                {features.items.smartNavigator.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {features.items.smartNavigator.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2E80FF]/15 flex items-center gap-2 text-xs font-semibold text-[#10B981]">
              <AlertTriangle className="w-4 h-4 text-[#FF6B4A]" />
              <span>{isRu ? 'Контроль мелей и прогноза' : isTr ? 'Sığlık ve fırtına takibi' : 'Active hazard & storm watch'}</span>
            </div>
          </div>

          {/* 4. Paper Chart Photo Calibration & Overlay */}
          <div className="p-6 rounded-2xl bg-[#F0F6FF] border border-[#2E80FF]/15 hover:border-[#2E80FF]/40 transition-all shadow-sm flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white text-[#0F2C59] flex items-center justify-center shadow-sm mb-5 group-hover:scale-105 transition-transform">
                <ImageIcon className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[#0F2C59] text-[10px] font-heading font-bold border border-slate-200 mb-3">
                {features.items.paperChartOverlay.tag}
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0F2C59] mb-2 leading-snug">
                {features.items.paperChartOverlay.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed">
                {features.items.paperChartOverlay.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2E80FF]/15 flex items-center gap-2 text-xs font-semibold text-[#0F2C59]">
              <Crosshair className="w-4 h-4 text-[#2E80FF]" />
              <span>{isRu ? 'Геопривязка любого листа' : isTr ? 'Herhangi bir haritayı bağla' : '2-point coordinate alignment'}</span>
            </div>
          </div>

          {/* 5. Cloud Storage & Multi-Device Sync */}
          <div className="p-6 rounded-2xl bg-[#F0F6FF] border border-[#2E80FF]/15 hover:border-[#2E80FF]/40 transition-all shadow-sm flex flex-col justify-between group md:col-span-2 lg:col-span-2">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white text-[#2E80FF] flex items-center justify-center shadow-sm mb-5 group-hover:scale-105 transition-transform">
                <Cloud className="w-6 h-6" />
              </div>
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[#0F2C59] text-[10px] font-heading font-bold border border-slate-200 mb-3">
                {features.items.cloudSync.tag}
              </div>
              <h3 className="text-lg font-bold font-heading text-[#0F2C59] mb-2 leading-snug">
                {features.items.cloudSync.title}
              </h3>
              <p className="text-xs text-[#64748B] leading-relaxed max-w-2xl">
                {features.items.cloudSync.desc}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#2E80FF]/15 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-[#0F2C59]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                <span>{isRu ? 'Единый профиль капитана: смартфон, планшет, штурманский ПК' : isTr ? 'Tek kaptan hesabı: telefon, tablet, masaüstü' : 'Unified captain profile: phone, tablet, navigation PC'}</span>
              </div>
              <span className="text-[11px] font-mono text-[#2E80FF] bg-white px-2.5 py-1 rounded-md border border-slate-200">
                cloud.cosail.org sync
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Functional Showcase with 3 Tabs */}
        <div className="mt-14 rounded-3xl bg-gradient-to-br from-[#0F2C59] to-[#16386d] text-white shadow-2xl border border-[#2E80FF]/30 overflow-hidden">
          {/* Tab Selector Header */}
          <div className="p-4 sm:p-6 bg-white/5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-heading font-bold text-[#FF6B4A] uppercase tracking-wider block">
                {isRu ? 'Интерактивная демонстрация' : isTr ? 'İnteraktif Deneyim' : 'Interactive Functional Sandbox'}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
                {isRu
                  ? 'Попробуйте ключевые возможности CourseMate в действии'
                  : isTr
                  ? 'CourseMate Temel Özelliklerini Hemen Deneyin'
                  : 'Experience CourseMate Key Workflows in Action'}
              </h3>
            </div>

            {/* Tab buttons */}
            <div className="inline-flex p-1 rounded-xl bg-white/10 border border-white/15">
              <button
                onClick={() => setActiveTab('plan')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'plan'
                    ? 'bg-[#FF6B4A] text-white shadow-md'
                    : 'text-[#F0F6FF]/80 hover:text-white'
                }`}
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{isRu ? '1. План & Шеринг' : isTr ? '1. Plan & Paylaşım' : '1. Plan & Share'}</span>
              </button>

              <button
                onClick={() => setActiveTab('paper')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'paper'
                    ? 'bg-[#2E80FF] text-white shadow-md'
                    : 'text-[#F0F6FF]/80 hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{isRu ? '2. Привязка карты' : isTr ? '2. Harita Kalibrasyonu' : '2. Chart Overlay'}</span>
              </button>

              <button
                onClick={() => setActiveTab('school')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === 'school'
                    ? 'bg-[#10B981] text-white shadow-md'
                    : 'text-[#F0F6FF]/80 hover:text-white'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{isRu ? '3. Обучение курсантов' : isTr ? '3. Öğrenci Eğitimi' : '3. Academy'}</span>
              </button>
            </div>
          </div>

          {/* TAB 1: PASSAGE PLAN & 1-CLICK SHARE */}
          {activeTab === 'plan' && (
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs text-[#2E80FF] font-mono font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                  <span>{isRu ? 'Быстрый расчет перехода + синхронизация' : 'Real-time passage computation'}</span>
                </div>

                <h4 className="text-2xl font-bold font-heading text-white">
                  {isRu
                    ? 'Подготовка маршрута и отправка команде за 1 секунду'
                    : isTr
                    ? 'Rota Hazırlığı ve Ekibe Anında İletim'
                    : 'Voyage Preparation & Instant Crew Dispatch'}
                </h4>

                <p className="text-xs sm:text-sm text-[#F0F6FF]/80 leading-relaxed">
                  {isRu
                    ? 'Выберите маршрут и скорость яхты. CourseMate рассчитывает точную дистанцию, ориентировочное время прибытия (ETA) и формирует готовую ссылку для экипажа.'
                    : 'Select passage legs and speed over ground. CourseMate computes distance, ETA, and packages a direct link for all crew members.'}
                </p>

                {/* Route Selector pills */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-heading font-bold text-[#F0F6FF]/70 uppercase tracking-wider block">
                    {isRu ? 'Пример маршрута перехода:' : 'Select Passage Sample:'}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {sampleRoutes.map((route, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedRouteIndex(idx)}
                        className={`p-2.5 rounded-xl text-xs font-semibold text-left transition-all border ${
                          selectedRouteIndex === idx
                            ? 'bg-white text-[#0F2C59] border-white shadow-md'
                            : 'bg-white/10 text-white border-white/10 hover:bg-white/15'
                        }`}
                      >
                        <div className="font-bold truncate">
                          {isRu ? route.nameRu : isTr ? route.nameTr : route.nameEn}
                        </div>
                        <div className="text-[11px] opacity-80 mt-0.5">{route.nm} NM</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Speed Slider */}
                <div className="pt-2 bg-white/10 p-4 rounded-xl border border-white/10">
                  <div className="flex justify-between text-xs font-semibold text-[#F0F6FF] mb-1">
                    <span>{isRu ? 'Расчетная скорость яхты (Speed Over Ground)' : 'Target Yacht Speed (SOG)'}</span>
                    <span className="font-mono text-[#FF6B4A] bg-white px-2 py-0.5 rounded text-[11px] font-bold">
                      {boatSpeed} kts
                    </span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="10"
                    step="0.5"
                    value={boatSpeed}
                    onChange={(e) => setBoatSpeed(Number(e.target.value))}
                    className="w-full h-2 bg-[#0F2C59] rounded-lg appearance-none cursor-pointer accent-[#FF6B4A]"
                  />
                  <div className="flex justify-between text-[10px] text-[#F0F6FF]/60 mt-1">
                    <span>4 kts (Слабый ветер)</span>
                    <span>7 kts (Крейсерская скорость)</span>
                    <span>10 kts (Свежий ветер / мотор)</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Crew Share Card & Pocket Navigator Live Watch */}
              <div className="lg:col-span-5 bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-heading font-bold text-white">
                    <Smartphone className="w-4 h-4 text-[#10B981]" />
                    <span>{isRu ? 'Штурман в смартфоне' : 'Pocket Co-Navigator'}</span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#10B981]/20 text-[#10B981] font-mono font-bold">
                    ACTIVE WATCH
                  </span>
                </div>

                {/* Calculation Summary */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-[#0F2C59]/60 border border-white/10">
                    <span className="text-[10px] text-[#F0F6FF]/60 uppercase font-heading font-semibold block">
                      {isRu ? 'Дистанция' : 'Distance'}
                    </span>
                    <span className="text-xl font-bold font-mono text-white">{currentRoute.nm} NM</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#0F2C59]/60 border border-white/10">
                    <span className="text-[10px] text-[#F0F6FF]/60 uppercase font-heading font-semibold block">
                      {isRu ? 'Время в пути (ETA)' : 'Est. Time En Route'}
                    </span>
                    <span className="text-xl font-bold font-mono text-[#10B981]">~{etaHours} h</span>
                  </div>
                </div>

                {/* Hazard Watch box */}
                <div className="p-3 rounded-xl bg-[#FF6B4A]/15 border border-[#FF6B4A]/30 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#FF6B4A]">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>{isRu ? 'Внимание штурмана (Опасный участок):' : 'Navigation Hazard Alert:'}</span>
                  </div>
                  <div className="text-[11px] text-[#F0F6FF]/90 leading-tight">
                    {isRu ? currentRoute.hazardRu : isTr ? currentRoute.hazardTr : currentRoute.hazardEn}
                  </div>
                </div>

                {/* Weather forecast watch */}
                <div className="p-3 rounded-xl bg-[#2E80FF]/15 border border-[#2E80FF]/30 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#2E80FF]">
                    <CloudSun className="w-3.5 h-3.5" />
                    <span>{isRu ? 'Прогноз погоды на переход:' : 'Weather & Sea State:'}</span>
                  </div>
                  <div className="text-[11px] text-[#F0F6FF]/90 leading-tight">
                    {isRu ? currentRoute.weatherRu : isTr ? currentRoute.weatherTr : currentRoute.weatherEn}
                  </div>
                </div>

                {/* One Click Share Trigger */}
                <div className="pt-2">
                  <button
                    onClick={handleShareClick}
                    className="w-full py-3 px-4 rounded-xl bg-[#FF6B4A] hover:bg-[#fa5a36] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B4A]/30 transition-all active:scale-95"
                  >
                    {copiedShareLink ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>{isRu ? 'Ссылка на план скопирована для экипажа!' : 'Passage Link Copied for Crew!'}</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-4 h-4 text-white" />
                        <span>{isRu ? 'Поделиться планом с командой в 1 клик' : 'Share Passage Plan With Crew in 1 Click'}</span>
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-center text-[#F0F6FF]/60 mt-1.5">
                    {isRu
                      ? 'Генерирует прямую ссылку для смартфона любого члена экипажа'
                      : 'Generates an instant mobile-ready link for all crew phones'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PAPER CHART PHOTO CALIBRATION */}
          {activeTab === 'paper' && (
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs text-[#2E80FF] font-mono font-semibold flex items-center gap-2">
                  <Crosshair className="w-4 h-4 text-[#2E80FF]" />
                  <span>{isRu ? 'Технология геопривязки фото карт' : 'Paper Chart Georeferencing'}</span>
                </div>

                <h4 className="text-2xl font-bold font-heading text-white">
                  {isRu
                    ? 'Ваша бумажная карта оживает на экране'
                    : isTr
                    ? 'Kağıt Haritanız Ekranda Canlanıyor'
                    : 'Bring Your Physical Paper Chart Onto Screen'}
                </h4>

                <p className="text-xs sm:text-sm text-[#F0F6FF]/80 leading-relaxed">
                  {isRu
                    ? 'Штурманы любят надежность и масштаб бумажных карт. В CourseMate вы просто фотографируете карту со штурманского стола, задаете две опорные координаты (маяк, мыс или координатную сетку), и программа автоматически калибрует изображение для прокладки курсов и путевых точек.'
                    : 'Navigators value the tactile clarity of paper charts. In CourseMate, photograph your chart, tap two geographic control points, and plan digital passages directly over your high-resolution physical map texture.'}
                </p>

                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/10 border border-white/10">
                    <span className="w-5 h-5 rounded-full bg-[#2E80FF] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      1
                    </span>
                    <span>
                      {isRu
                        ? 'Сделайте фото бумажной карты на телефон или загрузите скан'
                        : 'Take a photo of your paper chart with your phone or load a scan'}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/10 border border-white/10">
                    <span className="w-5 h-5 rounded-full bg-[#2E80FF] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      2
                    </span>
                    <span>
                      {isRu
                        ? 'Отметьте 2 ориентира (например, мыс Кадырга и маяк на о. Родос)'
                        : 'Mark 2 known landmarks (e.g. Cape lighthouse and island point)'}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/10 border border-white/10">
                    <span className="w-5 h-5 rounded-full bg-[#10B981] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      3
                    </span>
                    <span>
                      {isRu
                        ? 'Прокладывайте маршрут: локсодромии, дистанции и пеленги рисуются прямо на карте'
                        : 'Plot your route: rhumb lines, distances, and bearings are drafted over your paper chart'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Chart Overlay Graphic Demo */}
              <div className="lg:col-span-6 bg-[#0a1f3d] p-5 rounded-2xl border border-white/20 relative overflow-hidden shadow-inner">
                <div className="flex items-center justify-between pb-3 border-b border-white/15 text-xs">
                  <span className="font-heading font-bold text-white flex items-center gap-1.5">
                    <Crosshair className="w-3.5 h-3.5 text-[#2E80FF]" />
                    <span>{isRu ? 'Калибровка: Адмиралтейская карта #1664' : 'Calibration: Admiralty Chart #1664'}</span>
                  </span>
                  <span className="font-mono text-[11px] text-[#10B981] bg-[#10B981]/20 px-2 py-0.5 rounded">
                    Accuracy: 99.8%
                  </span>
                </div>

                {/* Visual Chart Canvas Simulation */}
                <div className="mt-4 relative h-64 rounded-xl bg-[#e8e4d9] border border-slate-400/50 overflow-hidden flex items-center justify-center text-slate-800">
                  {/* Subtle bathymetric lines and nautical grid */}
                  <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="nauticalGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2a4365" strokeWidth="0.5" strokeDasharray="2,2" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#nauticalGrid)" />
                    {/* Simulated coastline */}
                    <path d="M 20 40 Q 90 60 140 120 T 260 90 T 380 150 L 400 200 L 0 200 Z" fill="#d7ceb8" stroke="#8c7853" strokeWidth="1.5" />
                    {/* Depth contours */}
                    <path d="M 10 90 Q 120 110 200 160 T 350 140" fill="none" stroke="#718096" strokeWidth="1" strokeDasharray="4,4" />
                  </svg>

                  {/* Reference Point A */}
                  <div className="absolute top-12 left-16 flex items-center gap-1">
                    <div className="w-4 h-4 rounded-full border-2 border-[#FF6B4A] bg-[#FF6B4A]/30 flex items-center justify-center animate-pulse">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B4A]" />
                    </div>
                    <span className="text-[9px] font-mono font-bold bg-white/90 px-1 py-0.5 rounded shadow">
                      Pt A: 36°42.1'N
                    </span>
                  </div>

                  {/* Reference Point B */}
                  <div className="absolute bottom-12 right-20 flex items-center gap-1">
                    <div className="w-4 h-4 rounded-full border-2 border-[#2E80FF] bg-[#2E80FF]/30 flex items-center justify-center animate-pulse">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#2E80FF]" />
                    </div>
                    <span className="text-[9px] font-mono font-bold bg-white/90 px-1 py-0.5 rounded shadow">
                      Pt B: 28°14.6'E
                    </span>
                  </div>

                  {/* Plotted Rhumb Line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <line x1="80" y1="56" x2="310" y2="196" stroke="#0F2C59" strokeWidth="2.5" strokeDasharray="6,3" />
                    <circle cx="80" cy="56" r="4" fill="#0F2C59" />
                    <circle cx="310" cy="196" r="4" fill="#0F2C59" />
                  </svg>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#0F2C59]/90 text-white text-[11px] font-mono shadow-lg border border-white/20">
                    TC 142° • Dist 22.4 NM
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-[#F0F6FF]/70">
                  <span>{isRu ? 'Калибровочная сетка WGS84' : 'WGS84 projection matrix active'}</span>
                  <span className="text-[#FF6B4A] font-semibold">
                    {isRu ? 'Фото привязано к координатам' : 'Paper Chart Locked to GPS'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INSTRUCTOR & STUDENT CLASSROOM */}
          {activeTab === 'school' && (
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs text-[#10B981] font-mono font-semibold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>{isRu ? 'Инструмент яхтенных школ и инструкторов' : 'Sailing Academy & Instructor Suite'}</span>
                </div>

                <h4 className="text-2xl font-bold font-heading text-white">
                  {isRu
                    ? 'Рассылка навигационных задач и мгновенная проверка ответов'
                    : isTr
                    ? 'Navigasyon Görevleri Dağıtımı ve Anlık Değerlendirme'
                    : 'Distribute Navigation Tasks & Review Student Answers'}
                </h4>

                <p className="text-xs sm:text-sm text-[#F0F6FF]/80 leading-relaxed">
                  {isRu
                    ? 'Преподавателям больше не нужно проверять десятки бумажных чертежей вручную. Сформируйте задачу по прокладке курса, учету течения и ветрового дрейфа, разошлите студентам и мгновенно получайте графические решения с автоматической проверкой точности.'
                    : 'No more slow manual checks on paper chart tables. Create a passage assignment with current and leeway parameters, dispatch it to your class, and review each student’s graphic solution instantly.'}
                </p>

                <div className="pt-2 grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                    <span className="text-xs font-bold text-[#10B981] block mb-1">
                      {isRu ? '1. Создание задачи' : '1. Create Task'}
                    </span>
                    <span className="text-[11px] text-[#F0F6FF]/70">
                      {isRu ? 'Задайте координаты, силу ветра, снос и магнитное склонение' : 'Specify wind, leeway, current, and magnetic declination'}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/10 border border-white/10">
                    <span className="text-xs font-bold text-[#FF6B4A] block mb-1">
                      {isRu ? '2. Мгновенный ответ' : '2. Instant Review'}
                    </span>
                    <span className="text-[11px] text-[#F0F6FF]/70">
                      {isRu ? 'Курсант решает задачу на телефоне, преподаватель видит прокладку' : 'Student solves on mobile, instructor sees chart overlay'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Classroom Dashboard Mockup */}
              <div className="lg:col-span-6 bg-white/10 p-5 rounded-2xl border border-white/20 backdrop-blur-md space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-heading font-bold text-white">
                    <Users className="w-4 h-4 text-[#2E80FF]" />
                    <span>
                      {isRu ? 'Группа: Day Skipper / Coastal' : 'Class: Coastal Navigation 2026'}
                    </span>
                  </div>
                  <span className="text-[10px] bg-[#2E80FF]/20 text-[#2E80FF] px-2 py-0.5 rounded font-mono font-bold">
                    3/3 Submitted
                  </span>
                </div>

                {/* Assignment Title */}
                <div className="p-3 rounded-xl bg-[#0F2C59]/80 border border-white/10 text-xs">
                  <span className="text-[10px] text-[#2E80FF] font-bold uppercase block mb-0.5">
                    {isRu ? 'Текущее задание для группы:' : 'Active Classroom Assignment:'}
                  </span>
                  <div className="font-semibold text-white">
                    {isRu
                      ? 'Прокладка курса Мармарис → Родос с учетом течения 1.2 kts (S) и склонения +5.4°E'
                      : 'Course plot Marmaris → Rhodes allowing for 1.2 kts S current & +5.4°E declination'}
                  </div>
                </div>

                {/* Students list */}
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#10B981] text-white flex items-center justify-center font-bold text-[10px]">
                        А
                      </div>
                      <div>
                        <div className="font-bold text-white">Алексей Смирнов</div>
                        <div className="text-[10px] text-[#F0F6FF]/60">MC 208° • Дрейф учтен верно</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#10B981]/20 text-[#10B981] font-bold text-[10px]">
                      {isRu ? '100% Точно' : 'Verified'}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#2E80FF] text-white flex items-center justify-center font-bold text-[10px]">
                        М
                      </div>
                      <div>
                        <div className="font-bold text-white">Мария Кузнецова</div>
                        <div className="text-[10px] text-[#F0F6FF]/60">MC 207° • Снос течения скомпенсирован</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#10B981]/20 text-[#10B981] font-bold text-[10px]">
                      {isRu ? '98% Точно' : 'Verified'}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#FF6B4A] text-white flex items-center justify-center font-bold text-[10px]">
                        Д
                      </div>
                      <div>
                        <div className="font-bold text-white">Денис Волков</div>
                        <div className="text-[10px] text-[#F0F6FF]/60">MC 214° • Погрешность в поправке на ветер</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#FF6B4A]/20 text-[#FF6B4A] font-bold text-[10px]">
                      {isRu ? 'Требует правки' : 'Needs Review'}
                    </span>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-[#F0F6FF]/70">
                  <span>{isRu ? 'Мгновенный экспорт в логбук студента' : 'Exports directly to student logbook'}</span>
                  <a
                    href="https://nav.cosail.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#2E80FF] hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>{isRu ? 'Открыть модуль обучения' : 'Open Academy Suite'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
