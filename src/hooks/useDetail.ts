import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';

import useScript from './useScript';

import { previewService } from 'services/pages';
import initZaloSdk from 'utils/sdkZalo';

interface UseDetailResponse<T, P> {
  data?: T | P;
  loading?: boolean;
  error?: boolean;
}

interface UseDetailParams<T, P> {
  service: (slug?: string) => Promise<T | P>;
}

const useDetail = <T extends unknown, P extends unknown>({
  service,
}: UseDetailParams<T, P>): UseDetailResponse<T, P> => {
  useScript('https://sp.zalo.me/plugins/sdk.js');
  const { pathname } = useLocation();
  const { slug } = useParams<{ slug?: string }>();
  const [searchParams] = useSearchParams();
  const preview = searchParams.get('preview');
  const [error, setError] = useState(false);

  const { data: dataDetail, isFetching: isFetchingDetail } = useQuery(
    ['GetDetail', [pathname]],
    () => service(slug),
    {
      enabled: !preview,
      onError: () => setError(true),
    },
  );

  const { data: dataPreview, isFetching: isFetchingPreview } = useQuery(
    ['GetDetailPreview', [pathname, preview]],
    () => previewService<P>(preview || ''),
    {
      enabled: !!preview,
      onError: () => setError(true),
    },
  );

  useEffect(() => {
    initZaloSdk();
  }, [slug, isFetchingDetail, isFetchingPreview]);

  return {
    data: preview ? dataPreview : dataDetail,
    loading: preview ? isFetchingPreview : isFetchingDetail,
    error,
  };
};

export default useDetail;
