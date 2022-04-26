/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError } from 'axios';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import Loading from './loading';
import RedirectNav from './redirect';

import RenderPage from '.';

import { LanguageContext } from 'common/Language';
import usePreview from 'hooks/usePreview';
import i18n from 'i18n';
import Error from 'pages/Error';
import { staticHomeService } from 'services/pages';

const HomeNavigation: React.FC = () => {
  const { pathname, state } = useLocation();
  const { language } = i18n;
  // const { language } = useContext(LanguageContext);
  const {
    data,
    isLoading,
    error,
  } = usePreview<
    BasePageDataTypes<any>,
    BasePageDataTypes<any>
  >({
    name: 'HomeData',
    cb: () => staticHomeService(),
    deps: [language],
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    if ((error as AxiosError)?.response?.status === 404 && !state) {
      return <RedirectNav />;
    }
    return <Error status={(error as AxiosError)?.response?.status} />;
  }

  return (
    <RenderPage data={data} />
  );
};

export default HomeNavigation;
