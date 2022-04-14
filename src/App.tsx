import 'App.scss';

import React, { Suspense } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Outlet, Route, Routes,
} from 'react-router-dom';

import LanguageProvider from 'common/Language';
import Layout from 'common/Layout';
import LoadingPage from 'common/Navigation/loading';
import DivisionDetail from 'pages/DivisionDetail';
import DivisionList from 'pages/DivisionList';
import Error from 'pages/Error';
import EventsDetail from 'pages/EventsDetail';
import News from 'pages/News';
import NewsDetail from 'pages/NewsDetail';
import Search from 'pages/Search';
import { store } from 'store';
import { useAppSelector } from 'store/hooks';

const HomeNavigation = React.lazy(() => import('common/Navigation/home'));
const PageNavigation = React.lazy(() => import('common/Navigation/page'));

const App: React.FC = () => (
  <Suspense fallback={<LoadingPage />}>
    <Routes>
      <Route
        path="/"
        element={(
          <Layout>
            <Outlet />
          </Layout>
            )}
      >
        {/* TODO: Implement translation later */}
        <Route path="">
          <Route index element={<HomeNavigation />} />
          <Route path=":slug" element={<PageNavigation />} />
          <Route path="cac-phan-khu" element={<DivisionList />} />
          <Route path="404" element={<Error />} />
          <Route path="tim-kiem" element={<Search />} />
          <Route path="tin-tuc/:slug" element={<NewsDetail />} />
          <Route path="su-kien/:slug" element={<EventsDetail />} />
          <Route path="phan-khu/:slug" element={<DivisionDetail />} />
          <Route path="tin-tuc" element={<News />} />
        </Route>
      </Route>
    </Routes>
  </Suspense>
);

const GoogleReCaptchaWrapper: React.FC = ({ children }) => {
  const { data: dataSystems } = useAppSelector((state) => state.system);
  return (
    <GoogleReCaptchaProvider
        // reCaptchaKey={dataSystems?.googleRecaptchaSiteKey}
      reCaptchaKey={dataSystems?.googleRecaptchaSiteKey}
      scriptProps={{
        appendTo: 'head',
        async: true,
        defer: true,
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
      <LanguageProvider>
        <GoogleReCaptchaWrapper>
          <QueryClientProvider client={queryClient}>
            <Router>
              <HelmetProvider>
                <App />
              </HelmetProvider>
            </Router>
          </QueryClientProvider>
        </GoogleReCaptchaWrapper>
      </LanguageProvider>
    </Provider>
  );
};

export default AppWrapper;
