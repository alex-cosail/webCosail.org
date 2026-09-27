import React, { useState } from 'react';
import { Globe, Wind, Thermometer, Calendar, Compass, ArrowRight, Anchor } from 'lucide-react';
import { DESTINATION_HUBS } from '../data/mockData';
import { Language } from '../types';

interface DestinationsMapProps {
  currentLang: Language;
  onSelectRegion: (regionId: string) => void;
}

export const DestinationsMap: React.FC<DestinationsMapProps> = ({ currentLang, onSelectRegion }) => {
  const isRu = currentLang === 'ru';
  const [activeHubIndex, setActiveHubIndex] = useState(0);

  const hub = DESTINATION_HUBS[activeHubIndex];

  const handleGoToRegion = () => {
    let filterKey = 'all';
    if (hub.id === 'dest-turkey-greece') filterKey = 'turkey_greece';
    if (hub.id === 'dest-med') filterKey = 'mediterranean';
    if (hub.id === 'dest-norway') filterKey = 'norway';
    if (hub.id === 'dest-canaries') filterKey = 'atlantic';
    if (hub.id === 'dest-caribbean') filterKey = 'caribbean';

    onSelectRegion(filterKey);
    const catEl = document.getElementById('expeditions');
    if (catEl) {
      catEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="destinations" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>{isRu ? 'География и акватории' : 'Cruising Grounds'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            {isRu ? 'Ключевые акватории сообщества CoSail' : 'Featured CoSail Sailing Regions'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            {isRu
              ? 'От теплого Эгейского моря с уединенными якорными стоянками до арктических фьордов Норвегии и океанских пассатов Канар.'
              : 'From warm turquoise Mediterranean coves to dramatic Norwegian fjords and steady trade winds of the Atlantic.'}
          </p>
        </div>

        {/* Hub Selector Navigation */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {DESTINATION_HUBS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveHubIndex(idx)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeHubIndex === idx
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <Anchor className="w-3.5 h-3.5" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Hub Feature Showcase Card */}
        <div className="rounded-3xl bg-slate-900/70 border border-slate-800 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Visual Photography */}
            <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px]">
              <img
                src={hub.image}
                alt={hub.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-cyan-500/90 text-slate-950 text-xs font-bold uppercase tracking-wider">
                  {hub.season}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 font-display">
                  {hub.name}
                </h3>
              </div>
            </div>

            {/* Details & Specs */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-white font-display mb-3">
                  {hub.title}
                </h4>

                {/* Weather & Conditions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-[11px] text-slate-400 font-semibold uppercase flex items-center gap-1.5 mb-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {isRu ? 'Сезон' : 'Season'}
                    </div>
                    <div className="text-xs font-bold text-white">{hub.season}</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-[11px] text-slate-400 font-semibold uppercase flex items-center gap-1.5 mb-1">
                      <Thermometer className="w-3.5 h-3.5 text-cyan-400" />
                      {isRu ? 'Вода' : 'Water Temp'}
                    </div>
                    <div className="text-xs font-bold text-white">{hub.waterTemp}</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="text-[11px] text-slate-400 font-semibold uppercase flex items-center gap-1.5 mb-1">
                      <Wind className="w-3.5 h-3.5 text-cyan-400" />
                      {isRu ? 'Ветер' : 'Wind'}
                    </div>
                    <div className="text-xs font-bold text-white truncate" title={hub.windCondition}>{hub.windCondition}</div>
                  </div>
                </div>

                <div className="text-xs text-slate-300 mb-6 bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
                  <span className="font-semibold text-cyan-400 block mb-1">
                    {isRu ? 'Кому особенно подходит:' : 'Ideal For:'}
                  </span>
                  {hub.idealFor}
                </div>

                {/* Popular routes */}
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {isRu ? 'Популярные маршруты в этой акватории:' : 'Popular Cruising Routes:'}
                  </div>
                  <div className="space-y-1.5">
                    {hub.popularRoutes.map((route, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span>{route}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {isRu ? 'Места в ближайших экипажах' : 'Available crew spots'}
                </span>
                <button
                  onClick={handleGoToRegion}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/20 flex items-center gap-2 transition-all"
                >
                  <span>{isRu ? 'Смотреть экспедиции региона' : 'View Regional Expeditions'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
