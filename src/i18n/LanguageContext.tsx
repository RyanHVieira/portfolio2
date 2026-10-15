import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface LanguageContextProps {
  language: 'en' | 'pt';
  setLanguage: (lang: 'en' | 'pt') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  // Store translations to avoid re-importing on every render
  const [translations, setTranslations] = useState<Record<string, any>>({});

  useEffect(() => {
    // Dynamically import the JSON file for the selected language
    import(`../locales/${language}.json`).then(module => {
      setTranslations(module.default);
    });
  }, [language]);

  const t = (key: string): string => {
    const value = key.split('.').reduce((obj, k) => (obj && obj[k] !== null && obj[k] !== undefined) ? obj[k] : undefined, translations);
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};