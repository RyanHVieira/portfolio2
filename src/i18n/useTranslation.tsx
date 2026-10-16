import { useLanguage } from './LanguageContext';

export const useTranslation = () => {
  const { t } = useLanguage();
  return t;
};

export const useTranslationObject = () => {
  const { tObject } = useLanguage();
  return tObject;
};

export { useLanguage };