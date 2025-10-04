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
      
      <style jsx>{`
        .language-switcher {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        
        .language-btn {
          background: none;
          border: 1px solid #ccc;
          padding: 0.25rem 0.5rem;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
          border-radius: 4px;
        }
        
        .language-btn:hover {
          background-color: #f5f5f5;
          border-color: #999;
        }
        
        .language-btn.active {
          background-color: #333;
          color: white;
          border-color: #333;
        }
        
        .language-btn.active:hover {
          background-color: #555;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;
