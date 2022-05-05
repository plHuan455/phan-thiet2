import 'App.scss';

import React, { Suspense, useContext } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Outlet, Route, Routes,
} from 'react-router-dom';

import LanguageProvider, { LanguageContext, LanguagePrefix } from 'common/Language';
import Layout from 'common/Layout';
import LayoutProvider from 'common/Layout/context';
import LoadingPage from 'common/Navigation/loading';
import { store } from 'store';
import { useAppSelector } from 'store/hooks';
import CONSTANTS from 'utils/constants';

const HomeNavigation = React.lazy(() => import('common/Navigation/home'));
const PageNavigation = React.lazy(() => import('common/Navigation/page'));
const DivisionDetail = React.lazy(() => import('pages/DivisionDetail'));
const EventsDetail = React.lazy(() => import('pages/EventsDetail'));
const NewsDetail = React.lazy(() => import('pages/NewsDetail'));
const Error = React.lazy(() => import('pages/Error'));

const App: React.FC = () => {
  const activeLocales = useContext(LanguageContext).language.active;

  if (!activeLocales?.length) return null;

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route
          path="/"
          element={(
            <LayoutProvider>
              <Layout>
                <Outlet />
              </Layout>
            </LayoutProvider>
              )}
        >
          {activeLocales?.map((e, i) => {
            const prefix = e.toUpperCase() as LanguagePrefix;
            return (
              <Route key={`route-${i.toString()}`} path={e === 'vi' ? '' : e}>
                <Route index element={<HomeNavigation />} />
                <Route path=":slug" element={<PageNavigation />} />
                <Route
                  path={`${CONSTANTS.PREFIX.NEWS[prefix]}/:slug`}
                  element={<NewsDetail />}
                />
                <Route
                  path={`${CONSTANTS.PREFIX.DIVISION[prefix]}/:slug`}
                  element={<DivisionDetail />}
                />
                <Route
                  path={`${CONSTANTS.PREFIX.EVENT[prefix]}/:slug`}
                  element={<EventsDetail />}
                />
              </Route>
            );
          })}
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

const GoogleReCaptchaWrapper: React.FC = ({ children }) => {
  const { data: dataSystems } = useAppSelector((state) => state.system);
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={dataSystems?.googleRecaptchaSiteKey}
      scriptProps={{
        appendTo: 'body',
        async: false,
        defer: false,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
};

const AppWrapper: React.FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });
  return (
    <Provider store={store}>
      <Router>
        <LanguageProvider>
          <GoogleReCaptchaWrapper>
            <QueryClientProvider client={queryClient}>
              <HelmetProvider>
                <App />
              </HelmetProvider>
            </QueryClientProvider>
          </GoogleReCaptchaWrapper>
        </LanguageProvider>
      </Router>
    </Provider>
  );
};

export default AppWrapper;
