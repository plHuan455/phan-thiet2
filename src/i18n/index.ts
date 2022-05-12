/* eslint-disable no-restricted-syntax */
import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import CONSTANTS from './constants';
import FUNCTIONS from './functions';

i18n
  .use(initReactI18next)
  .use(HttpBackend)
  .init({
    // https://www.i18next.com/overview/configuration-options
    fallbackLng: CONSTANTS.LANGUAGE_LIST[0],
    lng: FUNCTIONS.initLanguage(), // Detect not work, if lng turn on
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: `${process.env.REACT_APP_API_BASE_URL}systems/fe-translations?locale={{lng}}`,
    },
    ns: ['translation', 'local'],
    //! Only turn this defaultNS on when testing local static translation files
    // defaultNS: 'local',
  });

for (const lang of Object.keys(CONSTANTS.bundledResources)) {
  i18n.addResources(lang, 'local', CONSTANTS.bundledResources[lang]);
}

//! Only turn this function on when testing static translation files
// for (const lang of Object.keys(CONSTANTS.staticBundledResources)) {
//   i18n.addResourceBundle(lang, 'local', CONSTANTS.staticBundledResources[lang]);
// }

export default i18n;
