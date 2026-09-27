import React from 'react';
import { Share2, ExternalLink, Crosshair, Smartphone } from 'lucide-react';
import { TranslationContent } from '../types';
import { SailboatIllustration } from './SailboatIllustration';

interface CourseMateHeroProps {
  content: TranslationContent;
}

export const CourseMateHero: React.FC<CourseMateHeroProps> = ({
  content,
}) => {
  const { hero } = content;

  return (
    <section className="relative overflow-hidden pt-8 sm:pt-14 pb-16 sm:pb-24 bg-[#F0F6FF]">
      {/* Background subtle radial glow and nautical lines */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2E80FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#FF6B4A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#2E80FF]/30 shadow-sm text-xs font-heading font-semibold text-[#0F2C59]">
              <span className="w-2 h-2 rounded-full bg-[#2E80FF]" />
              <span>{hero.badge}</span>
              <span className="text-[#64748B]">•</span>
              <span className="text-[#2E80FF] font-mono">nav.cosail.org</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#0F2C59] tracking-tight leading-[1.12]">
              {hero.titleStart}{' '}
              <span className="text-[#2E80FF] underline decoration-[#FF6B4A] decoration-wavy decoration-2">
                {hero.titleHighlight}
              </span>{' '}
              {hero.titleEnd}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl">
              {hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="https://nav.cosail.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#FF6B4A] hover:bg-[#fa5a36] text-white font-heading font-semibold text-base shadow-xl shadow-[#FF6B4A]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>{hero.ctaPrimary}</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

            </div>

            {/* Key 3 Specs Pills */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-[#2E80FF]/15">
              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F0F6FF] flex items-center justify-center text-[#FF6B4A] shrink-0">
                  <Share2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-heading font-bold text-xs text-[#0F2C59]">
                    {hero.quickStats.gpsStat}
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                    {hero.quickStats.gpsDesc}
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F0F6FF] flex items-center justify-center text-[#2E80FF] shrink-0">
                  <Crosshair className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-heading font-bold text-xs text-[#0F2C59]">
                    {hero.quickStats.wmmStat}
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                    {hero.quickStats.wmmDesc}
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#F0F6FF] flex items-center justify-center text-[#10B981] shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-heading font-bold text-xs text-[#0F2C59]">
                    {hero.quickStats.cartographyStat}
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-0.5 leading-snug">
                    {hero.quickStats.cartographyDesc}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual: Authentic Sailboat from ColorPicture.png */}
          <div className="lg:col-span-5 flex justify-center">
            <SailboatIllustration />
          </div>
        </div>
      </div>
    </section>
  );
};
