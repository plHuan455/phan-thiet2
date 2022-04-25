import * as Types from './types';

import en from 'translations/en.json';
import ja from 'translations/ja.json';
import ko from 'translations/ko.json';
import vi from 'translations/vi.json';
import zh from 'translations/zh.json';

const LANGUAGE_LIST = ['vi', 'en', 'ko', 'ja', 'zh'];

const LANGUAGE_LOCAL_STORAGE = 'NOVAWORLD_PHANTHIET_Language';

const DUMMY_LOCALE = {
  vi: '',
  en: '',
  ko: '',
  ja: '',
  zh: '',
};

const bundledResources: Types.BundledResources = {
  en: {
    error_500: 'Internal Server Error',
  },
  vi: {
    error_500: 'Lỗi server',
  },
  ja: {
    error_500: 'Internal Server Error',
  },
  ko: {
    error_500: 'Internal Server Error',
  },
  zh: {
    error_500: 'Internal Server Error',
  },
};

const staticBundledResources: {
  [key: string]: Types.StaticBundled;
} = {
  en: {
    ...en,
  },
  vi: {
    ...vi,
  },
  ko: {
    ...ko,
  },
  ja: {
    ...ja,
  },
  zh: {
    ...zh,
  },
};

export default {
  LANGUAGE_LIST,
  LANGUAGE_LOCAL_STORAGE,
  DUMMY_LOCALE,
  bundledResources,
  staticBundledResources,
};
