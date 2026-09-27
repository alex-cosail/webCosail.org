import React from 'react';
import { Compass, ExternalLink, Globe, ChevronRight } from 'lucide-react';
import { Language, TranslationContent } from '../types';

interface CourseMateNavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  content: TranslationContent;
}

export const CourseMateNavbar: React.FC<CourseMateNavbarProps> = ({
  currentLang,
  onLanguageChange,
  content,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#2E80FF]/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <a
            href="https://cosail.org"
            className="flex items-center gap-2.5 group"
            title="CoSail - Maritime Association"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0F2C59] text-white flex items-center justify-center shadow-md shadow-[#0F2C59]/20 group-hover:bg-[#2E80FF] transition-colors">
              <Compass className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-[#0F2C59] tracking-tight">
                  CoSail
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-[#2E80FF]/10 text-[#2E80FF] font-heading font-bold border border-[#2E80FF]/25">
                  CourseMate
                </span>
              </div>
              <p className="text-[11px] text-[#64748B] hidden sm:block">
                nav.cosail.org
              </p>
            </div>
          </a>
        </div>



        {/* Right actions: Language Switcher & CTA button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="inline-flex items-center p-1 rounded-xl bg-[#F0F6FF] border border-slate-200">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded-lg text-xs font-heading font-bold transition-all ${currentLang === 'en'
                  ? 'bg-white text-[#0F2C59] shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F2C59]'
                }`}
              title="English"
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('ru')}
              className={`px-2.5 py-1 rounded-lg text-xs font-heading font-bold transition-all ${currentLang === 'ru'
                  ? 'bg-white text-[#0F2C59] shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F2C59]'
                }`}
              title="Русский"
            >
              RU
            </button>
            <button
              onClick={() => onLanguageChange('tr')}
              className={`px-2.5 py-1 rounded-lg text-xs font-heading font-bold transition-all ${currentLang === 'tr'
                  ? 'bg-white text-[#0F2C59] shadow-sm'
                  : 'text-[#64748B] hover:text-[#0F2C59]'
                }`}
              title="Türkçe"
            >
              TR
            </button>
          </div>

          {/* Primary CTA (Solar Coral #FF6B4A, Montserrat SemiBold, White text) */}
          <a
            href="https://nav.cosail.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-[#FF6B4A] hover:bg-[#fa5a36] text-white font-heading font-semibold text-xs sm:text-sm shadow-md shadow-[#FF6B4A]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{content.nav.launchBtn}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 uppercase font-bold">
              Public Beta
            </span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
