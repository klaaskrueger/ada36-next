'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: 'de' | 'en') => {
    setLanguage(newLanguage);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => handleLanguageChange('de')}
        className={`language-btn ${language === 'de' ? 'active' : ''}`}
        aria-label="Deutsch"
      >
        DE
      </button>
      <button
        onClick={() => handleLanguageChange('en')}
        className={`language-btn ${language === 'en' ? 'active' : ''}`}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
