import React from 'react';
import { Star, MessageSquareQuote, Compass, Anchor } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';
import { Language } from '../types';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const isRu = currentLang === 'ru';

  return (
    <section className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{isRu ? 'Истории и отзывы' : 'Crew Stories'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
            {isRu ? 'Что говорят участники походов' : 'What Our Sailors Say'}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 font-light leading-relaxed">
            {isRu
              ? 'Истории людей, которые открыли для себя парусный спорт благодаря совместным походам на cosail.org.'
              : 'Real experiences from people who embraced the world of sailing through cosail.org voyages.'}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-xl shadow-black/20"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Trip badge */}
                <div className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-3">
                  {t.tripTitle}
                </div>

                <p className="text-sm text-slate-300 font-light leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-cyan-500/30"
                  />
                  <div>
                    <div className="text-xs font-bold text-white">{t.author}</div>
                    <div className="text-[11px] text-slate-400">{t.city} • {t.role}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] uppercase font-semibold text-slate-500">
                    {isRu ? 'Пройдено' : 'Logged'}
                  </div>
                  <div className="text-xs font-bold text-cyan-400 font-mono">
                    {t.milesTraveled} NM
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
