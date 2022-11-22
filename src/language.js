import i18next from "i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const apiKey = "mxg1FAWZDFTTolibVk7j0Q";
const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

i18next
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "uz",

        ns: ["default"],
        defaultNS: "default",

        detection: {
            caches: ["localStorage", "cookie"],
        },

        supportedLngs: ["ru", "en", "uz"],

        backend: {
            loadPath: loadPath
        }
    })