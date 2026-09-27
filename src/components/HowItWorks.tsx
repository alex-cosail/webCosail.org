import React, { useState } from 'react';
import { Compass, Users, DollarSign, Award, Shield, CheckCircle2, ChevronRight, Anchor, HeartHandshake, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface HowItWorksProps {
  currentLang: Language;
  onOpenBooking: () => void;
  onOpenSkipper: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ currentLang, onOpenBooking, onOpenSkipper }) => {
  const [activeTab, setActiveTab] = useState<'sailor' | 'skipper'>('sailor');
  const isRu = currentLang === 'ru';

  const sailorSteps = [
    {
      num: '01',
      title: isRu ? 'Выберите экспедицию и даты' : 'Choose Your Voyage & Dates',
      desc: isRu
        ? 'Изучите детальные маршруты по дням, фотографии яхты, список заходов в марины и профиль капитана.'
        : 'Explore detailed daily itineraries, yacht specifications, anchorage spots, and skipper profiles.',
      icon: Compass,
      tag: isRu ? 'Любой уровень подготовки' : 'All Skill Levels',
    },
    {
      num: '02',
      title: isRu ? 'Знакомство с капитаном' : 'Connect with Your Skipper',
      desc: isRu
        ? 'Перед выходом капитан связывается с вами в чате экипажа. Обсуждаются трансфер, особенности питания и пожелания.'
        : 'Connect with your captain in the crew chat before departure. Discuss provisioning preferences and packing.',
      icon: Users,
      tag: isRu ? 'Личный контакт' : 'Direct Chat',
    },
    {
      num: '03',
      title: isRu ? 'Прозрачное разделение расходов' : 'Transparent Cost-Sharing',
      desc: isRu
        ? 'Вы бронируете конкретное место в двухместной каюте. Судовые расходы (топливо, стоянки, продукты) делятся строго поровну по чекам.'
        : 'Book a berth in a private cabin. Operating costs (fuel, marina fees, provisions) are split transparently with zero markup.',
      icon: DollarSign,
      tag: isRu ? 'Без переплат' : 'No Hidden Fees',
    },
    {
      num: '04',
      title: isRu ? 'Поднимите паруса и получайте опыт' : 'Hoist the Sails & Learn',
      desc: isRu
        ? 'Управляйте яхтой у штурвала, учитесь настраивать грот и стаксель или просто загорайте на палубе с видом на острова.'
        : 'Take the helm, trim sails under the captain guidance, or simply relax on the sun deck with endless views.',
      icon: Anchor,
      tag: isRu ? 'Мили в Logbook' : 'Certified Miles',
    },
  ];

  const skipperSteps = [
    {
      num: '01',
      title: isRu ? 'Опубликуйте маршрут или переход' : 'Publish Your Trip Route',
      desc: isRu
        ? 'Укажите модель судна, акваторию, даты, свободные каюты и планируемую смету судовых расходов.'
        : 'Specify yacht model, cruising grounds, dates, available cabins, and estimated operating budget.',
      icon: Anchor,
      tag: isRu ? 'Для владельцев и шкиперов' : 'For Owners & Skippers',
    },
    {
      num: '02',
      title: isRu ? 'Верификация лицензии и профиля' : 'License & Profile Verification',
      desc: isRu
        ? 'Команда cosail.org проверяет ваши шкиперские документы (RYA, IYT, ISSA) и опыт для гарантии безопасности платформы.'
        : 'CoSail validates your skipper credentials (RYA, IYT, ISSA) and nautical miles to maintain trust.',
      icon: Shield,
      tag: isRu ? 'Знак доверия' : 'Verified Badge',
    },
    {
      num: '03',
      title: isRu ? 'Соберите адекватную команду' : 'Curate a Great Crew',
      desc: isRu
        ? 'Просматривайте заявки от участников, общайтесь заранее и формируйте дружный, гармоничный экипаж.'
        : 'Review member applications, chat directly, and curate a harmonious crew sharing your passion for the sea.',
      icon: Users,
      tag: isRu ? 'Совместимость' : 'Crew Match',
    },
    {
      num: '04',
      title: isRu ? 'Компенсируйте затраты на яхту' : 'Share Cruising Expenses',
      desc: isRu
        ? 'Экипаж берет на себя покрытие расходов на чартер, топливо и стоянки. Вы выходите в море чаще и без финансовых потерь.'
        : 'The crew covers the vessel charter fees, fuel, and dockage, allowing you to sail more frequently at zero cost.',
      icon: Award,
      tag: isRu ? 'Экономия до 100%' : 'Zero Personal Cost',
    },
  ];

  const currentSteps = activeTab === 'sailor' ? sailorSteps : skipperSteps;

  return (
    <section id="how-it-works" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isRu ? 'Концепция Co-Sailing' : 'The Co-Sailing Model'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            {isRu ? 'Как устроен совместный яхтинг на cosail.org' : 'How Co-Sailing Works at cosail.org'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            {isRu
              ? 'Ко-сейлинг — это как каршеринг или совместные экспедиции, но в мире яхтинга. Мы убрали наценки агентств и объединили тех, кто хочет в море, с теми, кто умеет им управлять.'
              : 'Co-sailing connects sea lovers with licensed skippers. By sharing charter expenses and ship funds, premium sailing becomes accessible to everyone.'}
          </p>

          {/* Audience Switcher Pills */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
            <button
              id="tab-btn-sailor"
              onClick={() => setActiveTab('sailor')}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'sailor'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isRu ? 'Я хочу в поход (Матрос / Гость)' : 'I want to sail (Guest / Crew)'}
            </button>
            <button
              id="tab-btn-skipper"
              onClick={() => setActiveTab('skipper')}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'skipper'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isRu ? 'Я капитан / владелец яхты' : 'I am a Skipper / Owner'}
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg shadow-black/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-slate-700 group-hover:text-cyan-400/80 transition-colors font-display">
                      {step.num}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-800/80 text-cyan-300 border border-slate-700/60">
                      {step.tag}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug font-display">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout Card: CoSail vs Commercial Agent vs Solo Charter */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                {isRu ? 'Почему именно CoSail' : 'The CoSail Advantage'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 font-display">
                {isRu
                  ? 'Сравнение форматов морских путешествий'
                  : 'Comparing Travel Formats at Sea'}
              </h3>
              <p className="mt-3 text-sm text-slate-300 font-light leading-relaxed">
                {isRu
                  ? 'Мы создали прозрачную экосистему, где каждый евро идет в дело — на аренду лучшей лодки и качественные продукты, а не в карманы посредников.'
                  : 'We created an ecosystem where every dollar supports top-tier vessels and fresh provisions rather than broker markups.'}
              </p>
              <div className="mt-6 flex items-center gap-3">
                {activeTab === 'sailor' ? (
                  <button
                    onClick={onOpenBooking}
                    className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs shadow-md shadow-cyan-500/20 flex items-center gap-2"
                  >
                    <span>{isRu ? 'Подобрать свой поход' : 'Select a Voyage'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={onOpenSkipper}
                    className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs shadow-md shadow-cyan-500/20 flex items-center gap-2"
                  >
                    <span>{isRu ? 'Стать капитаном CoSail' : 'Apply as Skipper'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* CoSail */}
              <div className="p-5 rounded-2xl bg-cyan-950/40 border-2 border-cyan-500/40 relative">
                <div className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider">
                  CoSail.org
                </div>
                <div className="text-lg font-bold text-white mt-1">Co-Sailing</div>
                <div className="text-2xl font-black text-cyan-400 mt-2 font-display">~850€ <span className="text-xs font-normal text-slate-400">/ нед.</span></div>
                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{isRu ? 'Деление расходов по чекам' : 'Actual split operating costs'}</span>
                  </li>
                  <li className="flex items-center gap-2 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{isRu ? 'Проверенные шкиперы' : 'Verified certified skippers'}</span>
                  </li>
                  <li className="flex items-center gap-2 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{isRu ? 'Крутое комьюнити' : 'Like-minded adventurers'}</span>
                  </li>
                </ul>
              </div>

              {/* Commercial Agency */}
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="text-xs font-semibold text-slate-400">{isRu ? 'Турагентства' : 'Charter Agency'}</div>
                <div className="text-base font-bold text-slate-200 mt-1">{isRu ? 'Коммерческий тур' : 'Commercial Tour'}</div>
                <div className="text-2xl font-black text-slate-300 mt-2 font-display">~1,850€ <span className="text-xs font-normal text-slate-500">/ нед.</span></div>
                <ul className="mt-4 space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-2 text-rose-400/90">
                    <span>✕</span>
                    <span>{isRu ? 'Комиссия агента 30-45%' : '30-45% broker commission'}</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-400">
                    <span>•</span>
                    <span>{isRu ? 'Случайный состав группы' : 'Random strangers'}</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-400">
                    <span>•</span>
                    <span>{isRu ? 'Скрытые доплаты на месте' : 'Hidden extras on dock'}</span>
                  </li>
                </ul>
              </div>

              {/* Solo Charter */}
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="text-xs font-semibold text-slate-400">{isRu ? 'Одиночный чартер' : 'Solo Yacht Charter'}</div>
                <div className="text-base font-bold text-slate-200 mt-1">{isRu ? 'Аренда всей лодки' : 'Full Boat Rental'}</div>
                <div className="text-2xl font-black text-slate-300 mt-2 font-display">~4,200€ <span className="text-xs font-normal text-slate-500">+ шкипер</span></div>
                <ul className="mt-4 space-y-2 text-xs text-slate-400">
                  <li className="flex items-center gap-2 text-rose-400/90">
                    <span>✕</span>
                    <span>{isRu ? 'Вся финансовая нагрузка на вас' : 'Full financial risk on you'}</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-400">
                    <span>•</span>
                    <span>{isRu ? 'Оплата работы наемного шкипера' : 'Skipper daily wage required'}</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-400">
                    <span>•</span>
                    <span>{isRu ? 'Страховой залог 3,000€+' : 'High refundable deposit'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
