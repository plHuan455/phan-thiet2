/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';

import { useAppDispatch } from 'store/hooks';
import { menusAsync } from 'store/menus';
import { staticAllAsync, staticErrorsAsync } from 'store/static';
import { systemsGeneralAsync } from 'store/systems';
import { topicsListAsync } from 'store/topics';

export type LanguageContextResponse = {
  language: {
    isChange: boolean;
    toggle?: (bool: boolean) => void;
  };
  translation: {
    data: Translation[];
    setData: (val: Translation[]) => void;
  };
};

export const LanguageContext = createContext<LanguageContextResponse | undefined>(undefined);

const LanguageProvider: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const [isChangeLanguage, setChangeLanguage] = useState(false);
  const [pageTranslation, setPageTranslation] = useState<Translation[]>([]);

  useEffect(() => {
    dispatch(staticAllAsync());
    dispatch(staticErrorsAsync());
    dispatch(menusAsync());
    dispatch(systemsGeneralAsync());
    dispatch(topicsListAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChangeLanguage]);

  const context: LanguageContextResponse = {
    language: {
      isChange: isChangeLanguage,
      toggle: (bool) => setChangeLanguage(bool),
    },
    translation: {
      data: pageTranslation,
      setData: (val) => setPageTranslation(val),
    },
  };

  return (
    <LanguageContext.Provider value={context}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
