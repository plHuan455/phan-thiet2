import React, {
  createContext, useEffect, useRef, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { NotifyProps } from 'components/organisms/Notify';
import i18n from 'i18n';
import FUNCTIONS from 'i18n/functions';
import { LanguageKeyTypes } from 'services/systems/types';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { menusAsync } from 'store/menus';
import { updateNotifyProps } from 'store/notify';
import { staticAllAsync, staticErrorsAsync } from 'store/static';
import { systemsGeneralAsync } from 'store/systems';
import { topicsListAsync } from 'store/topics';

const INIT_LOCALE = {
  label: 'VI',
  value: 'vi',
};

interface OptionType {
  value: string;
  label: string;
}

export type LanguagePrefix = 'VI' | 'EN' | 'JA' | 'KO' | 'ZH';

export type LanguageContextResponse = {
  language: {
    list: OptionType[];
    selected: OptionType;
    active: string[];
    onChange?: (locale?: OptionType) => void;
  };
  translation: {
    data: Translation[];
    setData?: (val: Translation[]) => void;
  };
};

export const LanguageContext = createContext<LanguageContextResponse>({
  language: {
    list: [],
    selected: INIT_LOCALE,
    active: [],
    onChange: undefined,
  },
  translation: {
    data: [],
    setData: undefined,
  },
});

const LanguageProvider: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const isFirst = useRef(true);

  const dataSystems = useAppSelector((state) => state.system.data);
  const [pageTranslation, setPageTranslation] = useState<Translation[]>([]);
  const [flag, setFlag] = useState(false);
  const [locales, setLocales] = useState<OptionType[]>([]);
  const [localesActive, setLocaleActive] = useState<string[]>([]);
  // State detect locale active from localStorage
  const [localeSelected, setLocaleSelected] = useState<OptionType>(INIT_LOCALE);

  useEffect(() => {
    dispatch(staticAllAsync());
    dispatch(staticErrorsAsync());
    dispatch(menusAsync());
    dispatch(topicsListAsync());
    dispatch(systemsGeneralAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  useEffect(() => {
    if (
      dataSystems
      && Object.keys(dataSystems?.locales)?.length
      && isFirst.current
    ) {
      const result = Object.keys(dataSystems.locales).map((e) => ({
        label: e.toUpperCase(),
        value: e,
      }));
      const resultActive = (Object.keys(dataSystems.locales) as Array<LanguageKeyTypes>).reduce(
        (prev: Array<LanguageKeyTypes>, curr: LanguageKeyTypes) => (
          dataSystems.locales[curr]?.active ? [...prev, curr] : [...prev]
        ),
        [],
      );
      setLocaleActive(resultActive);
      setLocales(result);
    }
  }, [dataSystems]);

  useEffect(() => {
    if (locales?.length) {
      const item = locales.find((e) => e.value === i18n.language);
      if (item) {
        setLocaleSelected(item);
      }
    }
  }, [locales]);

  const handleChangeLanguage = (locale?: OptionType) => {
    const inActiveLocale = locale && localesActive.includes(locale?.value);
    if (inActiveLocale && locale) {
      i18n.changeLanguage(locale?.value, () => {
        setLocaleSelected(locale);

        if (pageTranslation?.length) {
          const translation = pageTranslation.find((e) => e.locale === locale.value);

          if (translation?.slug === '/' && locale?.value !== 'vi') {
            navigate(FUNCTIONS.languageURL(locale?.value, true));
          }

          if (translation?.slug) {
            navigate(`${FUNCTIONS.languageURL(translation.locale)}${translation.slug !== '/' ? translation.slug : ''}`);
          } else {
            navigate(FUNCTIONS.languageURL(locale.value, true));
          }
        } else {
          navigate(FUNCTIONS.languageURL(locale?.value));
        }
        setFlag(!flag);
      });
    }
    if (!inActiveLocale && dataSystems) {
      const result = (Object.keys(dataSystems.locales) as Array<LanguageKeyTypes>)
        .map((e) => e === locale?.value && dataSystems.locales[e]).find((f) => f !== false);
      if (result) {
        const notifyProps: NotifyProps = {
          isOpen: true,
          message: result.message,
          btnText: t('general.confirm'),
        };
        dispatch(updateNotifyProps(notifyProps));
      }
    }
  };

  const context: LanguageContextResponse = {
    language: {
      list: locales,
      active: localesActive,
      selected: localeSelected,
      onChange: handleChangeLanguage,
    },
    translation: {
      data: pageTranslation,
      setData: (val) => setPageTranslation(val),
    },
  };

  if (!localesActive?.length) return null;

  return (
    <LanguageContext.Provider value={context}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
