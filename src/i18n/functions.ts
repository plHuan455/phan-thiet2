import CONSTANTS from './constants';

const initLanguage = () => {
  const lang = window.location.pathname.split('/')[1];
  if (lang && CONSTANTS.LANGUAGE_LIST.includes(lang)) {
    window.localStorage.setItem(CONSTANTS.LANGUAGE_LOCAL_STORAGE, lang);
    return lang;
  }
  window.localStorage.setItem(CONSTANTS.LANGUAGE_LOCAL_STORAGE, CONSTANTS.LANGUAGE_LIST[0]);
  return CONSTANTS.LANGUAGE_LIST[0];
};

const changeLanguage = () => {
  const prefix = window.location.pathname.split('/')[1];
  const local = window.localStorage.getItem(CONSTANTS.LANGUAGE_LOCAL_STORAGE)
  || CONSTANTS.LANGUAGE_LIST[0];

  const lang = CONSTANTS.LANGUAGE_LIST.includes(prefix) ? prefix : CONSTANTS.LANGUAGE_LIST[0];

  if (lang !== local) {
    window.localStorage.setItem(CONSTANTS.LANGUAGE_LOCAL_STORAGE, lang);
  }

  return {
    isChange: lang !== local,
    language: lang !== local ? lang : local,
  };
};

const languageURL = (lang?: string, isHome?: boolean) => {
  if (lang && lang !== 'vi') return `/${lang}${!isHome ? '/' : ''}`;
  return '/';
};

export default {
  initLanguage,
  changeLanguage,
  languageURL,
};
