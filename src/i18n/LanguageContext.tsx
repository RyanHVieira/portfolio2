import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { LanguageContext } from './context';

const getInitialLanguage = (): 'en' | 'pt' => {
  try {
    const saved = localStorage.getItem('portfolio_language');
    if (saved === 'en' || saved === 'pt') {
      return saved;
    }
  } catch {
    // ignore storage errors
  }

  if (typeof navigator !== 'undefined') {
    const userLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
    for (const lang of userLanguages) {
      if (lang && lang.toLowerCase().startsWith('pt')) {
        return 'pt';
      }
    }
  }

  return 'en';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<'en' | 'pt'>(getInitialLanguage);
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    document.documentElement.lang = language;
    import(`../locales/${language}.json`).then(module => {
      setTranslations(module.default);
    });
  }, [language]);

  const setLanguage = (lang: 'en' | 'pt') => {
    setLanguageState(lang);
    try {
      localStorage.setItem('portfolio_language', lang);
    } catch {
      // ignore
    }
  };

  const t = (key: string): string => {
    const value = key.split('.').reduce((obj, k) => (obj && obj[k] !== null && obj[k] !== undefined) ? obj[k] : undefined, translations);
    return typeof value === 'string' ? value : key;
  };

  const tObject = (key: string): any => {
    return key.split('.').reduce((obj, k) => (obj && obj[k] !== null && obj[k] !== undefined) ? obj[k] : undefined, translations);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tObject }}>
      {children}
    </LanguageContext.Provider>
  );
};
