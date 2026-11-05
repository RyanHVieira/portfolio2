import { useContext } from 'react';
import { LanguageContext } from './context';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useTranslation = () => {
  const { t } = useLanguage();
  return t;
};

export const useTranslationObject = () => {
  const { tObject } = useLanguage();
  return tObject;
};
