import React from 'react';
import { ShieldCheck, Anchor, HeartPulse, Radio, FileText, CheckCircle2, Lock } from 'lucide-react';
import { Language } from '../types';

interface SafetySectionProps {
  currentLang: Language;
}

export const SafetySection: React.FC<SafetySectionProps> = ({ currentLang }) => {
  const isRu = currentLang === 'ru';

  const safetyItems = [
    {
      icon: ShieldCheck,
      title: isRu ? 'Верификация капитанов 100%' : '100% Verified Skipper Licensure',
      desc: isRu
        ? 'Мы лично проверяем международные сертификаты RYA Yachtmaster, IYT Worldwide или ISSA, плавательский ценз (от 5,000+ миль) и реальные отзывы членов экипажа.'
        : 'All captains undergo strict verification of RYA, IYT, or ISSA yachtmaster credentials, documented logbook miles, and maritime background checks.',
    },
    {
      icon: HeartPulse,
      title: isRu ? 'Обязательный инструктаж (Day 1)' : 'Mandatory Day 1 Safety Briefing',
      desc: isRu
        ? 'Перед выходом в море каждый участник проходит индивидуальную подгонку автоматического спасжилета, тренировку работы с лебедками и правила безопасности на палубе.'
        : 'Before leaving port, every crew member is fitted with an automatic inflatable lifejacket and briefed on deck safety protocols.',
    },
    {
      icon: Radio,
      title: isRu ? 'Аварийное и спутниковое оснащение' : 'Offshore Safety & Satellite Gear',
      desc: isRu
        ? 'Сертифицированный спасательный плот SOLAS, спутниковый аварийный радиобуй EPIRB, морская рация VHF с DSC, пиротехника и расширенная судовая аптечка.'
        : 'SOLAS life rafts, satellite EPIRB beacons, DSC-enabled marine VHF radios, flares, and comprehensive offshore first aid kits on every boat.',
    },
    {
      icon: FileText,
      title: isRu ? 'Прозрачная судовая касса (Kitty)' : 'Transparent Ship Kitty Ledger',
      desc: isRu
        ? 'Все судовые расходы (стоянки в портах, дизель, питание) ведутся в общем приложении или судовом журнале с сохранением чеков. Никаких наценок — строго по себестоимости.'
        : 'Cruising funds (provisions, fuel, harbor dockage) are tracked openly with receipts in a shared crew ledger. Zero commercial margin.',
    },
  ];

  return (
    <section id="safety" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>{isRu ? 'Безопасность и доверие' : 'Safety & Trust'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            {isRu ? 'Ваша безопасность — наш главный приоритет' : 'Safety Standards on Every Nautical Mile'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            {isRu
              ? 'Яхтинг на cosail.org — это не рискованный экстрим, а безопасное, комфортное и предсказуемое морское путешествие под руководством опытных профессионалов.'
              : 'Co-sailing is not extreme risk-taking; it is structured, joyful seamanship governed by maritime safety regulations and experienced leadership.'}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-emerald-400 mb-5 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Code of Ethics and Crew Agreement */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Anchor className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-white text-base">
                {isRu ? 'Морской кодекс CoSail и судовая роль' : 'The CoSail Crew Code & Seamanship Ethics'}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {isRu
                  ? 'Уважение к природе, взаимопомощь на борту и чистота океана — основа каждого выхода.'
                  : 'Respect for marine wildlife, crew camaraderie, and ocean stewardship on every journey.'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700">
              SOLAS • RYA • IYT • ISSA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
