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
            week2: "Expenses - ",
            week3: " weeks ago",
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
            week2: "Gastos - hace ",
            week3: " semanas",
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
            week2: "Despeses - fa ",
            week3: " setmanes",
            today: "Despeses avui",
            percentage: "respecte a ahir",
          },
        },
      },
    },
  });

export default i18n;
