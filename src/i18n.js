import i18n from 'i18next'
import LanguageDetector from "i18next-browser-languagedetector"
import {initReactI18next} from 'react-i18next'
import XHR from 'i18next-xhr-backend'
import languageEN from './locate/en/translate.json'
import languagePTBR from './locate/pt-br/translate.json'
import backend from "i18next-xhr-backend";

i18n
.use(LanguageDetector)
.use(XHR)
.use(initReactI18next)
.init({
    resources: {
        en: languageEN,
        ptbr: languagePTBR
    },
    /* default language when load the website in browser */
    lng: "ptbr",
    /* When react i18next not finding any language to as default in borwser */
    fallbackLng: "ptbr",
    /* debugger For Development environment */
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },
    react: {
        wait: true,
        bindI18n: 'languageChanged loaded',
        bindStore: 'added removed',
        nsMode: 'default'
    }
})

export default i18n;