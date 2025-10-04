import { useLanguage } from '@/contexts/LanguageContext';

type TranslationKey = string;
type TranslationValue = string | { [key: string]: string | TranslationValue };
type TranslationsObject = Record<string, TranslationValue>;

interface UseTranslationReturn {
  t: (key: TranslationKey) => string;
  tObject: (key: TranslationKey) => TranslationValue | Record<string, never>;
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
}

export const useTranslation = (translations: { de: TranslationsObject; en: TranslationsObject }): UseTranslationReturn => {
  const { language, setLanguage } = useLanguage();

  const getNestedValue = (obj: TranslationsObject, path: string): TranslationValue | undefined => {
    return path.split('.').reduce((current: TranslationValue | undefined, key: string) => {
      if (current && typeof current === 'object' && current !== null && key in current) {
        return (current as Record<string, TranslationValue>)[key];
      }
      return undefined;
    }, obj as TranslationValue);
  };

  const t = (key: TranslationKey): string => {
    const translation = getNestedValue(translations[language], key);
    
    if (typeof translation === 'string') {
      return translation;
    }
    
    if (typeof translation === 'object' && translation !== null) {
      // If it's an object, try to get a 'text' property or return the first string value
      const textValue = (translation as Record<string, TranslationValue>).text;
      if (textValue && typeof textValue === 'string') {
        return textValue;
      }
      
      const firstStringValue = Object.values(translation as Record<string, TranslationValue>).find(value => typeof value === 'string');
      if (firstStringValue) {
        return firstStringValue as string;
      }
    }
    
    // Fallback to German if not found in current language
    if (language !== 'de') {
      const fallbackTranslation = getNestedValue(translations.de, key);
      if (typeof fallbackTranslation === 'string') {
        return fallbackTranslation;
      }
    }
    
    // Return the key if no translation found
    return key;
  };

  const tObject = (key: TranslationKey): TranslationValue | Record<string, never> => {
    const translation = getNestedValue(translations[language], key);
    
    if (translation !== undefined) {
      return translation;
    }
    
    // Fallback to German if not found in current language
    if (language !== 'de') {
      const fallbackTranslation = getNestedValue(translations.de, key);
      if (fallbackTranslation !== undefined) {
        return fallbackTranslation;
      }
    }
    
    // Return empty object if no translation found
    return {};
  };

  return {
    t,
    tObject,
    language,
    setLanguage,
  };
};
