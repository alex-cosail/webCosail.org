import React, { useState } from 'react';
import { Compass, Calendar, MapPin, Anchor, Users, Ship, ArrowRight, Star, ShieldCheck, Flame } from 'lucide-react';
import { Expedition, Language } from '../types';
import { ExpeditionModal } from './ExpeditionModal';

interface ExpeditionsCatalogProps {
  expeditions: Expedition[];
  currentLang: Language;
  selectedRegionFilter: string;
  selectedTypeFilter: string;
  onRegionChange: (region: string) => void;
  onTypeChange: (type: string) => void;
  onBookingSubmit: (title: string, contactData: any) => void;
}

export const ExpeditionsCatalog: React.FC<ExpeditionsCatalogProps> = ({
  expeditions,
  currentLang,
  selectedRegionFilter,
  selectedTypeFilter,
  onRegionChange,
  onTypeChange,
  onBookingSubmit,
}) => {
  const isRu = currentLang === 'ru';
  const [activeExpedition, setActiveExpedition] = useState<Expedition | null>(null);

  const regionTabs = [
    { id: 'all', label: isRu ? 'Все направления' : 'All Regions' },
    { id: 'turkey_greece', label: isRu ? 'Турция и Греция' : 'Turkey & Greece' },
    { id: 'mediterranean', label: isRu ? 'Балеары и Западное Средиземноморье' : 'Balearics & Med' },
    { id: 'norway', label: isRu ? 'Норвежские фьорды' : 'Norway Fjords' },
    { id: 'atlantic', label: isRu ? 'Канары & Атлантика' : 'Canary Islands' },
    { id: 'caribbean', label: isRu ? 'Карибы' : 'Caribbean' },
  ];

  const filtered = expeditions.filter((exp) => {
    const matchesRegion = selectedRegionFilter === 'all' || exp.region === selectedRegionFilter;
    const matchesType = selectedTypeFilter === 'all' || exp.yachtType === selectedTypeFilter;
    return matchesRegion && matchesType;
  });

  return (
    <section id="expeditions" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>{isRu ? 'Актуальные выходы 2026' : 'Upcoming Voyages 2026'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
              {isRu ? 'Каталог совместных экспедиций' : 'Co-Sailing Expeditions Roster'}
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl font-light">
              {isRu
                ? 'Реальные запланированные переходы с опытными шкиперами. Выбирайте маршрут, бронируйте свободные каюты и делите судовые расходы.'
                : 'Confirmed scheduled voyages led by licensed skippers. Reserve available berths and share operating costs.'}
            </p>
          </div>

          {/* Quick Vessel Type Toggle */}
          <div className="flex items-center gap-2 self-start md:self-end p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => onTypeChange('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedTypeFilter === 'all'
                  ? 'bg-cyan-500 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isRu ? 'Все яхты' : 'All Vessels'}
            </button>
            <button
              onClick={() => onTypeChange('Monohull')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedTypeFilter === 'Monohull'
                  ? 'bg-cyan-500 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isRu ? 'Монохулы' : 'Monohulls'}
            </button>
            <button
              onClick={() => onTypeChange('Catamaran')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                selectedTypeFilter === 'Catamaran'
                  ? 'bg-cyan-500 text-slate-950'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {isRu ? 'Катамараны' : 'Catamarans'}
            </button>
          </div>
        </div>

        {/* Region Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {regionTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onRegionChange(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedRegionFilter === tab.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Expeditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((exp) => (
            <div
              key={exp.id}
              className="rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1.5 shadow-xl shadow-black/30"
            >
              {/* Photo & tags */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                {/* Status Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-[11px] font-bold">
                    {exp.regionLabel}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[11px] font-semibold flex items-center gap-1">
                    <Flame className="w-3 h-3" />
                    {isRu ? `Осталось ${exp.spotsLeft} из ${exp.totalSpots}` : `${exp.spotsLeft} of ${exp.totalSpots} spots`}
                  </span>
                </div>

                {/* Vessel spec overlay */}
                <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-[11px] text-slate-300 font-medium">
                  <span className="bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur-sm">
                    {exp.yachtModel} ({exp.yachtLengthFt} ft)
                  </span>
                  <span className="bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur-sm">
                    {exp.durationDays} {isRu ? 'дней' : 'days'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2 leading-snug font-display">
                    {exp.title}
                  </h3>

                  {/* Dates & Route */}
                  <div className="mt-3 space-y-1.5 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{exp.dates}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{exp.startPort} → {exp.endPort}</span>
                    </div>
                  </div>

                  {/* Skipper */}
                  <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={exp.skipper.avatar}
                        alt={exp.skipper.name}
                        referrerPolicy="no-referrer"
                        className="w-8 h-8 rounded-full object-cover border border-cyan-500/30"
                      />
                      <div className="text-left">
                        <div className="text-xs font-semibold text-white leading-tight">
                          {exp.skipper.name}
                        </div>
                        <div className="text-[10px] text-cyan-400">
                          {exp.skipper.license.split('/')[0]}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{exp.skipper.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Footer price & CTA */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-semibold text-slate-400">
                      {isRu ? 'Доля в походе' : 'Per Person Share'}
                    </div>
                    <div className="text-2xl font-black text-white font-display">
                      {exp.pricePerPersonEur} €
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveExpedition(exp)}
                    className="px-4 py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 border border-cyan-500/30 text-xs font-bold transition-all flex items-center gap-1.5"
                  >
                    <span>{isRu ? 'Маршрут и бронь' : 'View Itinerary'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if filter doesn't match */}
        {filtered.length === 0 && (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
            <Compass className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <div className="text-lg font-bold text-white mb-1">
              {isRu ? 'Походов по выбранным фильтрам пока нет' : 'No expeditions match your selection'}
            </div>
            <p className="text-xs text-slate-400 mb-4">
              {isRu ? 'Попробуйте сбросить фильтры или оставьте индивидуальную заявку' : 'Try resetting filters or request a custom itinerary'}
            </p>
            <button
              onClick={() => {
                onRegionChange('all');
                onTypeChange('all');
              }}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white"
            >
              {isRu ? 'Сбросить фильтры' : 'Reset Filters'}
            </button>
          </div>
        )}
      </div>

      {/* Modal View */}
      {activeExpedition && (
        <ExpeditionModal
          expedition={activeExpedition}
          onClose={() => setActiveExpedition(null)}
          currentLang={currentLang}
          onBookingSubmit={onBookingSubmit}
        />
      )}
    </section>
  );
};
