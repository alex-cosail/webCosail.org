import React from 'react';
import { Compass, Calendar, MapPin, Users, Ship, ArrowRight, ShieldCheck, Waves, Star } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  currentLang: Language;
  onSearch: (region: string, type: string) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ currentLang, onSearch, onOpenBooking }) => {
  const [selectedRegion, setSelectedRegion] = React.useState('all');
  const [selectedShipType, setSelectedShipType] = React.useState('all');

  const handleQuickFilter = () => {
    onSearch(selectedRegion, selectedShipType);
    const catalogEl = document.getElementById('expeditions');
    if (catalogEl) {
      catalogEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isRu = currentLang === 'ru';

  return (
    <section id="hero-section" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Photography with deep nautical gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=2000&q=85"
          alt="Sailing yacht in the Mediterranean"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 duration-1000 ease-out"
        />
        {/* Dark oceanic overlay and soft vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.18),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6 shadow-inner backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>{isRu ? 'Официальная платформа совместного яхтинга cosail.org' : 'Official co-sailing network at cosail.org'}</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300">{isRu ? 'Сезон 2026 открыт' : 'Season 2026 Open'}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-4xl font-display">
          {isRu ? (
            <>
              Открывайте мир <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">под парусом</span> в компании единомышленников
            </>
          ) : (
            <>
              Sail the world <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">together</span> with verified skippers & crews
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
          {isRu
            ? 'CoSail объединяет проверенных капитанов, владельцев судов и путешественников. Делите расходы на аренду яхты, открывайте дикие лагуны и учитесь парусному спорту без переплат.'
            : 'CoSail connects verified yacht skippers, boat owners, and adventurous travelers. Share yacht charter costs, discover hidden anchorages, and learn the art of sailing.'}
        </p>

        {/* Quick Search / Filter Box */}
        <div className="w-full max-w-4xl mt-10 p-3 sm:p-4 rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-slate-800/80 shadow-2xl shadow-black/60">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Destination Selection */}
            <div className="flex flex-col text-left px-3 py-2 rounded-xl bg-slate-950/60 border border-slate-800/60 focus-within:border-cyan-500/50 transition-colors">
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {isRu ? 'Акватория / Регион' : 'Sailing Region'}
              </label>
              <select
                id="hero-select-region"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-slate-900 text-white">{isRu ? 'Все направления' : 'All Regions'}</option>
                <option value="turkey_greece" className="bg-slate-900 text-white">{isRu ? 'Турция и Греция (Эгейское море)' : 'Turkey & Greece (Aegean)'}</option>
                <option value="mediterranean" className="bg-slate-900 text-white">{isRu ? 'Балеары и Средиземное море' : 'Balearics & Western Med'}</option>
                <option value="norway" className="bg-slate-900 text-white">{isRu ? 'Норвежские фьорды & Лофотены' : 'Norway Fjords & Lofoten'}</option>
                <option value="atlantic" className="bg-slate-900 text-white">{isRu ? 'Канары & Атлантический океан' : 'Canary Islands & Atlantic'}</option>
                <option value="caribbean" className="bg-slate-900 text-white">{isRu ? 'Карибские острова (Мартиника)' : 'Caribbean Islands'}</option>
              </select>
            </div>

            {/* Vessel Type Selection */}
            <div className="flex flex-col text-left px-3 py-2 rounded-xl bg-slate-950/60 border border-slate-800/60 focus-within:border-cyan-500/50 transition-colors">
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                <Ship className="w-3.5 h-3.5 text-cyan-400" />
                {isRu ? 'Тип яхты' : 'Vessel Type'}
              </label>
              <select
                id="hero-select-ship"
                value={selectedShipType}
                onChange={(e) => setSelectedShipType(e.target.value)}
                className="bg-transparent text-white text-sm font-medium focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-slate-900 text-white">{isRu ? 'Любой тип (Монохул / Катамаран)' : 'Any Vessel Type'}</option>
                <option value="Monohull" className="bg-slate-900 text-white">{isRu ? 'Парусный монохул (Классика)' : 'Monohull Sailboat'}</option>
                <option value="Catamaran" className="bg-slate-900 text-white">{isRu ? 'Круизный катамаран (Простор)' : 'Cruising Catamaran'}</option>
              </select>
            </div>

            {/* Action CTA Button */}
            <div className="sm:col-span-2 lg:col-span-1 flex items-center">
              <button
                id="btn-hero-search"
                onClick={handleQuickFilter}
                className="w-full h-full min-h-[50px] px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <span>{isRu ? 'Найти экспедицию' : 'Find Expeditions'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Quick trust metrics under bar */}
          <div className="mt-3 pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-center sm:justify-between text-xs text-slate-400 gap-3 px-2">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{isRu ? 'Лицензии RYA & IYT проверены' : 'Verified RYA & IYT licenses'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>{isRu ? 'Судовая касса без наценок' : 'Transparent Ship Kitty'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>{isRu ? 'Средний рейтинг шкиперов 4.98' : '4.98 average skipper rating'}</span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 w-full max-w-4xl text-center">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">1,400+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{isRu ? 'Выходов в море' : 'Completed voyages'}</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-display">до -65%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{isRu ? 'Экономия на чел.' : 'Savings vs solo charter'}</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">3,200+</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{isRu ? 'Членов сообщества' : 'Community sailors'}</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">100%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">{isRu ? 'Безопасность экипажа' : 'Safety vetted standards'}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
