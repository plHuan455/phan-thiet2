import React, { useContext, useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { LayoutContext } from './context';

import FloatingButton from 'common/FloatingButton';
import { LanguageContext } from 'common/Language';
import NotifyWrapper from 'common/NotifyWrapper';
import { OptionType } from 'components/molecules/PullDown';
import Footer from 'components/templates/Footer';
import Header from 'components/templates/Header';
import HeaderDivision from 'components/templates/HeaderDivision';
import useGaTracker from 'hooks/useGATracker';
import useGTM from 'hooks/useGTM';
import i18n from 'i18n';
import FUNCTIONS from 'i18n/functions';
import { baseString } from 'utils/functions';

const Layout: React.FC = ({ children }) => {
  const location = useLocation();

  const {
    header, pageType, footer, headerSubdivisions, onSearch,
  } = useContext(LayoutContext);

  const { language } = useContext(LanguageContext);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  useEffect(() => {
    const trigger = FUNCTIONS.changeLanguage();
    if (trigger.isChange) {
      i18n.changeLanguage(trigger.language);
    }
  }, [location.pathname]);

  useGaTracker();
  useGTM();

  const handleChangeLanguage = (option?: OptionType) => {
    if (language.onChange) {
      language.onChange({
        label: baseString(option?.label),
        value: baseString(option?.value.toString()),
      });
    }
  };

  return (
    <div>
      {pageType === 'subdivisions'
        ? (
          <HeaderDivision
            handleSearch={onSearch}
            language={{
              langList: language.list,
              value: language.selected,
              handleChangeLang: handleChangeLanguage,
            }}
            {...headerSubdivisions}
          />
        )
        : (
          <Header
            handleSearch={onSearch}
            language={{
              langList: language.list,
              value: language.selected,
              handleChangeLang: handleChangeLanguage,
            }}
            {...header}
          />
        ) }
      <main>
        {children}
      </main>
      <Footer {...footer} />
      <NotifyWrapper />
      <FloatingButton />
    </div>
  );
};

export default Layout;
