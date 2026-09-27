import React from 'react';
import { ExternalLink, Compass, ShieldCheck } from 'lucide-react';
import { TranslationContent } from '../types';

interface CourseMateCTAProps {
  content: TranslationContent;
}

export const CourseMateCTA: React.FC<CourseMateCTAProps> = ({
  content,
}) => {
  const { liveDemoBanner } = content;

  return (
    <section className="py-16 sm:py-20 bg-[#F0F6FF] relative border-t border-[#2E80FF]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-white border border-[#2E80FF]/25 shadow-xl p-8 sm:p-12 overflow-hidden">
          {/* Subtle background nautical element */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#2E80FF]/5 rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F6FF] text-[#2E80FF] text-xs font-heading font-bold uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" />
                <span>nav.cosail.org</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-[#0F2C59] tracking-tight">
                {liveDemoBanner.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
                {liveDemoBanner.text}
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#10B981]">
                <ShieldCheck className="w-4 h-4" />
                <span>{liveDemoBanner.pwaNotice}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="https://nav.cosail.org"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#FF6B4A] hover:bg-[#fa5a36] text-white font-heading font-semibold text-sm sm:text-base shadow-lg shadow-[#FF6B4A]/30 transition-all transform hover:-translate-y-0.5 text-center"
              >
                <span>{liveDemoBanner.launchText}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/20 uppercase font-bold">
                  Public Beta
                </span>
                <ExternalLink className="w-4 h-4" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
