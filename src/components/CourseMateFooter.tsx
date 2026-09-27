import React, { useState } from 'react';
import { Mail, Copy, Check, Compass, ExternalLink, Shield, Anchor, Heart } from 'lucide-react';
import { Language, TranslationContent } from '../types';

interface CourseMateFooterProps {
  content: TranslationContent;
  lang: Language;
}

export const CourseMateFooter: React.FC<CourseMateFooterProps> = ({
  content,
  lang,
}) => {
  const { footer } = content;
  const [copied, setCopied] = useState(false);
  const emailAddress = 'info@cosail.org';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const isRu = lang === 'ru';
  const isTr = lang === 'tr';

  return (
    <footer className="bg-[#0F2C59] text-white pt-16 pb-12 border-t border-[#2E80FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#2E80FF] text-white flex items-center justify-center shadow-md">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                  CoSail
                </span>
                <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-white/10 text-[#2E80FF] font-heading font-bold border border-[#2E80FF]/30">
                  CourseMate
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#F0F6FF]/80 leading-relaxed max-w-md font-light">
              {footer.tagline}
            </p>

            <div className="text-xs text-[#64748B] flex items-center gap-1.5 pt-1">
              <Shield className="w-3.5 h-3.5 text-[#10B981]" />
              <span className="text-[#F0F6FF]/70">{footer.privacyNote}</span>
            </div>
          </div>

          {/* Col 2: Mail & Official Contact (Required by user: mail@cosail.org) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-heading font-bold text-[#2E80FF] uppercase tracking-wider">
              {footer.contactLabel}
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white text-sm font-mono font-semibold">
                  <Mail className="w-4 h-4 text-[#FF6B4A]" />
                  <span>{emailAddress}</span>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white font-medium flex items-center gap-1.5 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">{footer.emailCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#F0F6FF]/70" />
                      <span>{footer.copyEmail}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-[#F0F6FF]/60 leading-tight">
                {isRu
                  ? 'Для вопросов по навигатору, предложений по картографии WMM и сотрудничества со шкиперами.'
                  : isTr
                  ? 'Navigatör soruları, harita önerileri ve kaptan işbirlikleri için resmi iletişim.'
                  : 'For navigation inquiries, WMM cartography feedback, and skipper collaborations.'}
              </div>

              <a
                href={`mailto:${emailAddress}?subject=CoSail%20CourseMate%20Inquiry`}
                className="inline-block text-xs text-[#2E80FF] hover:text-[#5299ff] font-semibold underline underline-offset-2"
              >
                {isRu ? 'Написать письмо на почту →' : isTr ? 'E-posta Gönder →' : 'Send an Email →'}
              </a>
            </div>
          </div>

          {/* Col 3: Direct Reciprocal Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-heading font-bold text-[#2E80FF] uppercase tracking-wider">
              {footer.linksTitle}
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://nav.cosail.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#FF6B4A] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF6B4A]" />
                  <span>{footer.navigatorApp}</span>
                </a>
              </li>
              <li>
                <a
                  href="https://cosail.org"
                  className="text-[#F0F6FF]/80 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Anchor className="w-3.5 h-3.5 text-[#2E80FF]" />
                  <span>{footer.mainSite}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F0F6FF]/50 gap-4">
          <div>{footer.rights}</div>
          <div className="flex items-center gap-1">
            <span>Built for ocean navigators with</span>
            <span className="text-[#FF6B4A]">♥</span>
            <span>by CoSail</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
