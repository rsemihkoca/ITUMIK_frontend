import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import translationEN from "./locales/en/translation.json";
import translationTR from "./locales/tr/translation.json";

// Create object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

//i18N Initialization
i18n.use(initReactI18next).init({
  resources,
  lng: "tr",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
