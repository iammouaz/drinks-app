import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enLocale from 'i18n/en/translation.json'
import trLocale from 'i18n/tr/translation.json'

export function i18nextInit() {
   if (localStorage.getItem('i18nextLng') === null) {
      localStorage.setItem('i18nextLng', 'en')
   }
   i18n.use(initReactI18next).init({
      resources: {
         en: {
            translation: enLocale
         },
         tr: {
            translation: trLocale
         }
      },
      fallbackLng: ['en', 'tr'],
      interpolation: {
         escapeValue: false
      }
   })
}
