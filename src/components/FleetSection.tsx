import React, { useState } from 'react';
import { Ship, Wind, Compass, Sparkles, Check, CheckCircle2, ChevronRight } from 'lucide-react';
import { Language } from '../types';

interface FleetSectionProps {
  currentLang: Language;
  onFilterVessel: (type: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ currentLang, onFilterVessel }) => {
  const isRu = currentLang === 'ru';
  const [activeTab, setActiveTab] = useState<'monohull' | 'catamaran' | 'performance'>('monohull');

  const fleetTypes = {
    monohull: {
      title: isRu ? 'Парусный монохул (Классическая круизная яхта)' : 'Classic Monohull Cruiser',
      models: 'Beneteau Oceanis, Dufour Grand Large, Hanse, Jeanneau Sun Odyssey (42–52 ft)',
      tag: isRu ? 'Истинный дух паруса' : 'Pure Sailing Spirit',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=80',
      description: isRu
        ? 'Классическая однокорпусная яхта с килем. Дарит непревзойденное ощущение ветра и гармонии с морем. При хождении бейдевинд идет с легким элегантным креном, развивая отличную динамику.'
        : 'The quintessential sailing experience. Monohulls slice through waves gracefully with responsive helm feedback and that iconic, exhilarating heel under sail.',
      pros: [
        isRu ? 'Великолепные ходовые качества против ветра' : 'Superior upwind pointing and sailing agility',
        isRu ? 'Доступная стоимость стоянок в маринах' : 'Standard marina slip fees and lower costs',
        isRu ? 'Аутентичный морской опыт и романтика паруса' : 'Authentic nautical tradition and ocean feel',
        isRu ? 'Оптимальный бюджет участия для экипажа' : 'Most economical cost-share ratio per person'
      ],
      specs: [
        { label: isRu ? 'Каюты' : 'Cabins', val: '3–5 кают (6–10 чел.)' },
        { label: isRu ? 'Осадка' : 'Draft', val: '1.9 – 2.3 м' },
        { label: isRu ? 'Крен' : 'Heel', val: '15° – 25° под парусом' },
        { label: isRu ? 'Круизная скорость' : 'Cruising Speed', val: '6.5 – 8.5 узлов' },
      ],
      filterKey: 'Monohull',
    },
    catamaran: {
      title: isRu ? 'Круизный парусный катамаран' : 'Luxury Cruising Catamaran',
      models: 'Lagoon, Fountaine Pajot, Bali, Nautitech (40–46 ft)',
      tag: isRu ? 'Максимум комфорта и простора' : 'Maximum Space & Stability',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      description: isRu
        ? 'Два корпуса, соединенные просторным салоном и носовой сеткой для загара. Катамаран практически не имеет крена на ходу, обладает огромной жилой площадью и малой осадкой для подхода к самым диким пляжам.'
        : 'Two hulls connected by a grand salon and forward trampoline net. Catamarans sail flat with no heel, massive private living quarters, and shallow draft to anchor steps from pristine sandbanks.',
      pros: [
        isRu ? 'Никакого крена: стабильность на ходу и на якоре' : 'Zero heel: walk around with ease while sailing',
        isRu ? 'Панорамный салон 360° и носовая сетка-батут' : 'Panoramic salon views and open forward trampoline',
        isRu ? 'Приватные поплавки: санузел в каждой каюте' : 'En-suite private bathrooms in almost every cabin',
        isRu ? 'Малая осадка для захода на коралловые отмели' : 'Shallow draft allows anchoring in shallow turquoise bays'
      ],
      specs: [
        { label: isRu ? 'Каюты' : 'Cabins', val: '4 каюты с санузлами' },
        { label: isRu ? 'Осадка' : 'Draft', val: '1.1 – 1.3 м' },
        { label: isRu ? 'Крен' : 'Heel', val: '0° – 5° (без качки)' },
        { label: isRu ? 'Круизная скорость' : 'Cruising Speed', val: '7.5 – 10 узлов' },
      ],
      filterKey: 'Catamaran',
    },
    performance: {
      title: isRu ? 'Спортивный круизер & Арктический спецкласс' : 'Performance Cruiser & Expedition Spec',
      models: 'X-Yachts, Pogo, Solaris, Bavaria Polar Spec (44–50 ft)',
      tag: isRu ? 'Скорость и автономность' : 'Speed & Ocean Endurance',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
      description: isRu
        ? 'Оснащены усиленным корпусом, углепластиковыми парусами или автономным отоплением Webasto для северных экспедиций. Идеальны для дальних морских переходов и любителей драйва.'
        : 'Reinforced hulls, composite sails, Webasto diesel heating, and advanced safety equipment for offshore passages, regattas, and high-latitude expeditions.',
      pros: [
        isRu ? 'Высокая скорость перехода: до 12-14 узлов на глиссировании' : 'High passage speeds up to 14+ knots',
        isRu ? 'Автономное отопление и опреснители для экспедиций' : 'Off-grid autonomous polar heaters & watermakers',
        isRu ? 'Продвинутая настройка парусов (ахтерштаг, оттяжка, спинакер)' : 'Advanced sail trim controls and spinnaker gear',
        isRu ? 'Интенсивный набор морских миль в логбук' : 'Rapid mileage accumulation for skipper certification'
      ],
      specs: [
        { label: isRu ? 'Каюты' : 'Cabins', val: '3–4 каюты' },
        { label: isRu ? 'Осадка' : 'Draft', val: '2.4 – 2.8 м' },
        { label: isRu ? 'Крен' : 'Heel', val: 'Спортивный, до 30°' },
        { label: isRu ? 'Круизная скорость' : 'Cruising Speed', val: '8.5 – 12 узлов' },
      ],
      filterKey: 'Monohull',
    },
  };

  const current = fleetTypes[activeTab];

  const handleFilterClick = () => {
    onFilterVessel(current.filterKey);
    const cat = document.getElementById('expeditions');
    if (cat) cat.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Ship className="w-3.5 h-3.5" />
            <span>{isRu ? 'Флот сообщества' : 'Our Sailing Fleet'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            {isRu ? 'На каких яхтах мы ходим' : 'Vessels in the CoSail Fleet'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            {isRu
              ? 'Все суда моложе 6 лет, проходят регулярный техосмотр, оснащены сертифицированным спас-оборудованием и современным навигационным комплексом.'
              : 'All yachts are well-maintained, equipped with certified safety gear, offshore radar, AIS, and modern communication electronics.'}
          </p>

          {/* Selector pills */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner">
            <button
              onClick={() => setActiveTab('monohull')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'monohull'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isRu ? 'Классический монохул' : 'Monohulls'}
            </button>
            <button
              onClick={() => setActiveTab('catamaran')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'catamaran'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isRu ? 'Круизный катамаран' : 'Catamarans'}
            </button>
            <button
              onClick={() => setActiveTab('performance')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'performance'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isRu ? 'Спорт & Экспедиции' : 'Performance & Expedition'}
            </button>
          </div>
        </div>

        {/* Fleet showcase */}
        <div className="rounded-3xl bg-slate-900/70 border border-slate-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[400px]">
              <img
                src={current.image}
                alt={current.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900" />
              <div className="absolute top-6 left-6">
                <span className="px-3 py-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold uppercase tracking-wider">
                  {current.tag}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white font-display mb-1">
                  {current.title}
                </h3>
                <div className="text-xs text-cyan-400 font-mono mb-4">
                  {current.models}
                </div>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                  {current.specs.map((s, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">{s.label}</div>
                      <div className="text-xs font-bold text-white mt-0.5">{s.val}</div>
                    </div>
                  ))}
                </div>

                {/* Key advantages */}
                <div className="space-y-2">
                  {current.pros.map((pro, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{pro}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {isRu ? 'Готовы подняться на борт?' : 'Ready to step onboard?'}
                </span>
                <button
                  onClick={handleFilterClick}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all flex items-center gap-2"
                >
                  <span>{isRu ? 'Найти походы на этом типе судна' : 'Find Trips on this Vessel'}</span>
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
