import React from 'react';
import { useQuery } from 'react-query';
import {
  useLocation, Navigate,
} from 'react-router-dom';

import LoadingPage from './loading';

import Error from 'pages/Error';
import { redirectService } from 'services/systems';

const RedirectNav: React.FC = () => {
  const { pathname } = useLocation();

  const { data, isLoading, error } = useQuery(
    'getRedirects', () => redirectService({
      path: pathname,
    }),
    {
      enabled: !!pathname,
    },
  );

  if (isLoading) return <LoadingPage />;

  if (error) return <Error status={404} />;

  return (
    <Navigate
      to={data?.to || ''}
      replace
      state={{ redirected: true }}
    />
  );
};

export default RedirectNav;
