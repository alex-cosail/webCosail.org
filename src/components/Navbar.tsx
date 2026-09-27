import React, { useState, useEffect } from 'react';
import { Compass, Anchor, Menu, X, Globe, UserCheck, ShieldCheck, Ship, Mail } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  currentLang: Language;
  onLangToggle: () => void;
  onOpenBooking: () => void;
  onOpenSkipper: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLangToggle,
  onOpenBooking,
  onOpenSkipper,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = {
    ru: {
      expeditions: 'Экспедиции',
      howItWorks: 'Как это работает',
      calculator: 'Калькулятор выгоды',
      destinations: 'Акватории',
      safety: 'Безопасность',
      faq: 'FAQ',
      becomeSkipper: 'Капитанам',
      findTrip: 'Подобрать поход',
      tagline: 'Сообщество совместного яхтинга',
    },
    en: {
      expeditions: 'Expeditions',
      howItWorks: 'How it Works',
      calculator: 'Cost Calculator',
      destinations: 'Destinations',
      safety: 'Safety',
      faq: 'FAQ',
      becomeSkipper: 'For Skippers',
      findTrip: 'Find a Voyage',
      tagline: 'Co-sailing community & platform',
    },
  }[currentLang];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-xl shadow-black/20 py-3'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="CoSail.org Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5 text-white animate-subtle-float" />
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-amber-400 rounded-full border-2 border-slate-950 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-slate-950 rounded-full"></span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  CoSail
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  .org
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                {t.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#expeditions"
              className="hover:text-cyan-400 transition-colors"
            >
              {t.expeditions}
            </a>
            <a
              href="#how-it-works"
              className="hover:text-cyan-400 transition-colors"
            >
              {t.howItWorks}
            </a>
            <a
              href="#calculator"
              className="hover:text-cyan-400 transition-colors"
            >
              {t.calculator}
            </a>
            <a
              href="#destinations"
              className="hover:text-cyan-400 transition-colors"
            >
              {t.destinations}
            </a>
            <a
              href="#safety"
              className="hover:text-cyan-400 transition-colors"
            >
              {t.safety}
            </a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">
              {t.faq}
            </a>
          </nav>

          {/* Action CTAs & Language Switcher */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              id="btn-lang-toggle"
              onClick={onLangToggle}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              title="Переключить язык / Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span className="uppercase">{currentLang}</span>
            </button>

            {/* Become a Skipper Button */}
            <button
              id="btn-nav-skipper"
              onClick={onOpenSkipper}
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-900/80 border border-slate-800 transition-colors flex items-center gap-1.5"
            >
              <Ship className="w-3.5 h-3.5 text-cyan-400" />
              {t.becomeSkipper}
            </button>

            {/* Primary Action Button */}
            <button
              id="btn-nav-book"
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-95 transition-all"
            >
              {t.findTrip}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="btn-mobile-lang"
              onClick={onLangToggle}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-cyan-400"
            >
              {currentLang.toUpperCase()}
            </button>
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 px-5 pt-3 pb-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <a
              href="#expeditions"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              {t.expeditions}
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              {t.howItWorks}
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              {t.calculator}
            </a>
            <a
              href="#destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              {t.destinations}
            </a>
            <a
              href="#safety"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              {t.safety}
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-cyan-400"
            >
              {t.faq}
            </a>
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSkipper();
              }}
              className="w-full py-2.5 rounded-xl text-sm font-semibold bg-slate-900 border border-slate-700 text-slate-200 flex items-center justify-center gap-2"
            >
              <Ship className="w-4 h-4 text-cyan-400" />
              {t.becomeSkipper}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
            >
              {t.findTrip}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
