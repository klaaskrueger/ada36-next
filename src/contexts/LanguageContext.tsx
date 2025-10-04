'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  detectLanguage: () => Language;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('de');

  const detectLanguage = (): Language => {
    // Check if language is stored in localStorage
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('ada36-language') as Language;
      if (storedLanguage && (storedLanguage === 'de' || storedLanguage === 'en')) {
        return storedLanguage;
      }
    }

    // Detect browser language
    if (typeof window !== 'undefined') {
      const browserLanguage = navigator.language.toLowerCase();
      
      // Check for German variants
      if (browserLanguage.startsWith('de')) {
        return 'de';
      }
      
      // Check for English variants
      if (browserLanguage.startsWith('en')) {
        return 'en';
      }
      
      // Default to German for other languages
      return 'de';
    }

    // Server-side default
    return 'de';
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('ada36-language', lang);
    }
  };

  useEffect(() => {
    const detectedLanguage = detectLanguage();
    setLanguageState(detectedLanguage);
  }, []);

  const value: LanguageContextType = {
    language,
    setLanguage,
    detectLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
