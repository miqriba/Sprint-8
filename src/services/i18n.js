import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            balance: "Total balance",
            week: "Expenses - last week",
            today: "Expenses today",
            percentage: "compared to yesterday",
          },
        },
      },
      es: {
        translation: {
          description: {
            balance: "Balance total",
            week: "Gastos - última semana",
            today: "Gastos hoy",
            percentage: "respecto ayer",
          },
        },
      },
      ca: {
        translation: {
          description: {
            balance: "Balanç total",
            week: "Despeses - última setmana",
            today: "Despeses avui",
            percentage: "respecte a ahir",
          },
        },
      },
    },
  });

export default i18n;
