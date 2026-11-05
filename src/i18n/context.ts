import { createContext } from 'react';

export interface LanguageContextProps {
  language: 'en' | 'pt';
  setLanguage: (lang: 'en' | 'pt') => void;
  t: (key: string) => string;
  tObject: (key: string) => any;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);
