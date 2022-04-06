import 'App.scss';

import React, { Suspense } from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Outlet, Route, Routes,
} from 'react-router-dom';

import Layout from 'common/Layout';
import Contact from 'pages/Contact';
import DivisionList from 'pages/DivisionList';
import Error from 'pages/Error';
import EventsDetail from 'pages/EventsDetail';
import NewsDetail from 'pages/NewsDetail';
import Policy from 'pages/Policy';
import Search from 'pages/Search';
import { store } from 'store';

const App: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="cac-phan-khu" element={<DivisionList />} />
          <Route path="404" element={<Error />} />
          <Route path="lien-he" element={<Contact />} />
          <Route path="chinh-sach-dieu-khoan" element={<Policy />} />
          <Route path="tim-kiem" element={<Search />} />
          <Route path="tin-tuc/:slug" element={<NewsDetail />} />
          <Route path="su-kien/:slug" element={<EventsDetail />} />
        </Route>
      </Route>
    </Routes>
  </Suspense>
);

const GoogleReCaptchaWrapper: React.FC = ({ children }) => (
  <GoogleReCaptchaProvider
      // reCaptchaKey={dataSystems?.googleRecaptchaSiteKey}
    reCaptchaKey="6LcwgsIZAAAAAHZFFWu3icOSaGK2_SVjZwY-kEjQ"
    scriptProps={{
      appendTo: 'head',
      async: true,
      defer: true,
    }}
  >
    {children}
  </GoogleReCaptchaProvider>
);

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
      <GoogleReCaptchaWrapper>
        <QueryClientProvider client={queryClient}>
          <Router>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </Router>
        </QueryClientProvider>
      </GoogleReCaptchaWrapper>
    </Provider>
  );
};

export default AppWrapper;
