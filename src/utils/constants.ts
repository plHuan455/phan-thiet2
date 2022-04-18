const MENU_CODE = {
  MAIN_HEADER: 'main-header',
  HEADER_2: 'header-2',
  MAIN_FOOTER: 'main-footer',
  FOOTER_2: 'footer-2',
  PHAN_KHU: 'phan-khu',
};
export const DEFAULT_QUERY_OPTION = {
  retry: 0,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
};

const LOCAL_STORAGE = {
  LANGUAGE: 'NOVAWORLD_PHANTHIET_Language',
};

const PREFIX = {
  DIVISION: {
    VI: 'phan-khu',
    EN: 'subdivision',
    JA: 'subdivision',
    KO: 'subdivision',
    ZH: 'subdivision',
  },
  NEWS: {
    VI: 'tin-tuc',
    EN: 'news',
    JA: 'news',
    KO: 'news',
    ZH: 'news',
  },
  EVENT: {
    VI: 'su-kien',
    EN: 'event',
    JA: 'event',
    KO: 'event',
    ZH: 'event',
  },
};

export default {
  MENU_CODE,
  LOCAL_STORAGE,
  PREFIX,
};
