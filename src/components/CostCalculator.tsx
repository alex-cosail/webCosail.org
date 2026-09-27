import React, { useState } from 'react';
import { Calculator, DollarSign, Users, Calendar, Ship, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';

interface CostCalculatorProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ currentLang, onOpenBooking }) => {
  const isRu = currentLang === 'ru';

  const [vesselType, setVesselType] = useState<'monohull' | 'catamaran'>('monohull');
  const [duration, setDuration] = useState<number>(7);
  const [crewSize, setCrewSize] = useState<number>(8);
  const [region, setRegion] = useState<'turkey' | 'spain' | 'norway' | 'caribbean'>('turkey');

  // Base charter estimates for whole boat (per 7 days)
  const baseWeeklyRates = {
    turkey: { monohull: 3800, catamaran: 6200, kittyPerPerson: 160 },
    spain: { monohull: 4200, catamaran: 6800, kittyPerPerson: 190 },
    norway: { monohull: 5400, catamaran: 8400, kittyPerPerson: 250 },
    caribbean: { monohull: 4900, catamaran: 7900, kittyPerPerson: 270 },
  };

  const selectedData = baseWeeklyRates[region];
  const boatCostWeekly = selectedData[vesselType];
  const boatCostDuration = Math.round((boatCostWeekly / 7) * duration);

  // CoSail math per person
  const charterPerPerson = Math.round(boatCostDuration / crewSize);
  const kittyPerPerson = Math.round((selectedData.kittyPerPerson / 7) * duration);
  const totalCoSailPerPerson = charterPerPerson + kittyPerPerson;

  // Comparison benchmarks
  // Hotel + excursions + ferries + dining:
  const hotelDailyRates = { turkey: 240, spain: 290, norway: 380, caribbean: 420 };
  const hotelEquivalentPerPerson = hotelDailyRates[region] * duration;

  // Solo full boat charter with hired skipper:
  const soloCharterTotal = boatCostDuration + 180 * duration + selectedData.kittyPerPerson * 2;

  const savingsVsHotel = Math.max(0, Math.round(((hotelEquivalentPerPerson - totalCoSailPerPerson) / hotelEquivalentPerPerson) * 100));

  return (
    <section id="calculator" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>{isRu ? 'Интерактивный калькулятор' : 'Transparent Math'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            {isRu ? 'Рассчитайте выгоду ко-сейлинга' : 'Calculate Your Co-Sailing Advantage'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            {isRu
              ? 'Выберите параметры похода и посмотрите точный расчет стоимости на одного человека в формате CoSail по сравнению с отелем или арендой всей яхты в одиночку.'
              : 'Configure your voyage parameters to see transparent per-person costs compared to luxury coastal hotels and solo yacht charters.'}
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* 1. Vessel Type */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                {isRu ? '1. Тип судна' : '1. Vessel Type'}
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  id="calc-vessel-monohull"
                  onClick={() => setVesselType('monohull')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    vesselType === 'monohull'
                      ? 'bg-cyan-950/40 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm text-white mb-1">
                    {isRu ? 'Парусный монохул' : 'Monohull Sailboat'}
                  </div>
                  <div className="text-xs text-slate-400">
                    {isRu ? '45–50 футов, драйв, классика паруса' : '45–50 ft, true sailing thrill'}
                  </div>
                </button>

                <button
                  type="button"
                  id="calc-vessel-catamaran"
                  onClick={() => setVesselType('catamaran')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    vesselType === 'catamaran'
                      ? 'bg-cyan-950/40 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="font-bold text-sm text-white mb-1">
                    {isRu ? 'Круизный катамаран' : 'Cruising Catamaran'}
                  </div>
                  <div className="text-xs text-slate-400">
                    {isRu ? '42–46 футов, без крена, максимум места' : '42–46 ft, no heel, maximum space'}
                  </div>
                </button>
              </div>
            </div>

            {/* 2. Sailing Region */}
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                {isRu ? '2. Регион путешествия' : '2. Cruising Region'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'turkey', label: isRu ? 'Турция / Греция' : 'Turkey / Greece' },
                  { id: 'spain', label: isRu ? 'Балеары / Испания' : 'Balearics / Spain' },
                  { id: 'norway', label: isRu ? 'Норвегия / Фьорды' : 'Norway Fjords' },
                  { id: 'caribbean', label: isRu ? 'Карибы / Антилы' : 'Caribbean' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRegion(item.id as any)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      region === item.id
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Duration */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {isRu ? '3. Длительность похода' : '3. Voyage Duration'}
                </label>
                <span className="text-sm font-bold text-cyan-400">
                  {duration} {isRu ? (duration === 7 ? 'дней (1 неделя)' : `${duration} дней`) : `${duration} days`}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { days: 3, label: isRu ? '3 дня (Уикенд)' : '3 Days (Weekend)' },
                  { days: 7, label: isRu ? '7 дней (Стандарт)' : '7 Days (Standard)' },
                  { days: 14, label: isRu ? '14 дней (Экспедиция)' : '14 Days (Expedition)' },
                ].map((d) => (
                  <button
                    key={d.days}
                    type="button"
                    onClick={() => setDuration(d.days)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      duration === d.days
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Crew Size */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  {isRu ? '4. Размер экипажа (деление расходов)' : '4. Crew Sharing Size'}
                </label>
                <span className="text-sm font-bold text-cyan-400">
                  {crewSize} {isRu ? 'участников' : 'crew members'}
                </span>
              </div>
              <input
                id="calc-crew-slider"
                type="range"
                min="4"
                max="8"
                step="2"
                value={crewSize}
                onChange={(e) => setCrewSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                <span>4 человека (камерно)</span>
                <span>6 человек (оптимально)</span>
                <span>8 человек (максимум экономии)</span>
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30 border border-slate-800 shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isRu ? 'Формат CoSail (на чел.)' : 'CoSail Per Person'}
                </span>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {isRu ? `Экономия ~${savingsVsHotel}%` : `Save ~${savingsVsHotel}%`}
                </span>
              </div>

              {/* Main Total Number */}
              <div className="my-6 text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-white font-display">
                  ~{totalCoSailPerPerson}€
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {isRu ? `Итого за все ${duration} дней под ключ` : `Total for all ${duration} days`}
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 text-xs border-y border-slate-800/80 py-4 mb-6">
                <div className="flex justify-between text-slate-300">
                  <span>{isRu ? 'Доля в аренде яхты и шкипера:' : 'Charter berth & skipper share:'}</span>
                  <span className="font-semibold text-white">{charterPerPerson}€</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{isRu ? 'Судовая касса (еда, дизель, марины):' : 'Ship Kitty (food, fuel, moorings):'}</span>
                  <span className="font-semibold text-white">~{kittyPerPerson}€</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>{isRu ? 'В день на человека:' : 'Daily cost per sailor:'}</span>
                  <span className="font-medium text-cyan-400">~{Math.round(totalCoSailPerPerson / duration)}€ / день</span>
                </div>
              </div>

              {/* Alternatives comparison */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">{isRu ? 'Отель 4* + экскурсии/паромы:' : '4* Hotel + ferries & trips:'}</span>
                  <span className="font-semibold text-slate-300 line-through">~{hotelEquivalentPerPerson}€</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-400">{isRu ? 'Аренда всей лодки одному:' : 'Solo charter with skipper:'}</span>
                  <span className="font-semibold text-slate-300 line-through">~{soloCharterTotal}€</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                id="btn-calc-book"
                onClick={onOpenBooking}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 active:scale-95 transition-all flex items-center justify-center gap-2 group"
              >
                <span>{isRu ? 'Подобрать поход по этим параметрам' : 'Book a Voyage with this Setup'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="mt-3 text-center flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{isRu ? 'Без комиссий агентств. Прямая судовая роль.' : 'Direct crew roster. No broker fees.'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
