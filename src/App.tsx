import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { TRANSLATIONS } from './data/translations';
import { CourseMateNavbar } from './components/CourseMateNavbar';
import { CourseMateHero } from './components/CourseMateHero';
import { RoutesAnnouncement } from './components/RoutesAnnouncement';
// import { CourseMateFeatures } from './components/CourseMateFeatures';
import { CourseMateCTA } from './components/CourseMateCTA';
import { CourseMateFooter } from './components/CourseMateFooter';

export default function App() {
  // Language state defaults to English, with 1-click switcher to Russian and Turkish
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('cosail_lang');
    if (saved === 'ru' || saved === 'en' || saved === 'tr') {
      return saved;
    }
    // Also check browser language:
    const navLang = navigator.language.toLowerCase();
    if (navLang.startsWith('ru')) return 'ru';
    if (navLang.startsWith('tr')) return 'tr';
    return 'en';
  });

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('cosail_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  const content = TRANSLATIONS[currentLang];

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F6FF] text-[#0F2C59] selection:bg-[#2E80FF] selection:text-white">
      {/* Top Navigation */}
      <CourseMateNavbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        content={content}
      />

      {/* Main Content Areas */}
      <main className="flex-grow">
        {/* Hero Welcome with Sailboat Visual */}
        <CourseMateHero
          content={content}
        />

        {/* Good Seamanship Routes Announcement & Future Catalog Preview */}
        <RoutesAnnouncement lang={currentLang} />

        {/* 4 Feature Cards & Interactive WMM 2025 Dead Reckoning Demo */}
        {/* <CourseMateFeatures content={content} lang={currentLang} /> */}

        {/* Cloudflare & Navigator Launch CTA */}
        <CourseMateCTA
          content={content}
        />
      </main>

      {/* Dedicated Footer with mail@cosail.org & Reciprocal links */}
      <CourseMateFooter
        content={content}
        lang={currentLang}
      />
    </div>
  );
}
