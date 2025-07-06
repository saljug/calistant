import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from '../locales/en.json';
import trTranslations from '../locales/tr.json';
import deTranslations from '../locales/de.json';
import frTranslations from '../locales/fr.json';
import esTranslations from '../locales/es.json';
import jaTranslations from '../locales/ja.json';
import itTranslations from '../locales/it.json';
import ptTranslations from '../locales/pt.json';
import azTranslations from '../locales/az.json';

const resources = {
  en: { translation: enTranslations },
  tr: { translation: trTranslations },
  de: { translation: deTranslations },
  fr: { translation: frTranslations },
  es: { translation: esTranslations },
  ja: { translation: jaTranslations },
  it: { translation: itTranslations },
  pt: { translation: ptTranslations },
  az: { translation: azTranslations },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n; 