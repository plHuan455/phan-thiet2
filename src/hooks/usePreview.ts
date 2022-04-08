import { useQuery, UseQueryResult } from 'react-query';
import { useSearchParams } from 'react-router-dom';

import { previewService } from 'services/pages';

interface UsePreviewParams<T, P> {
  name: string;
  cb: (...args: any) => Promise<T | P>;
  deps?: any;
}

const usePreview = <T, P>({ name, cb, deps }: UsePreviewParams<T, P>): UseQueryResult<T | P> => {
  const [searchParams] = useSearchParams();

  const preview = searchParams.get('preview');

  const res = useQuery<T | P>([name, deps], cb, {
    enabled: !preview,
  });

  const resRe = useQuery<P>([`${name}Preview`, deps], () => previewService(preview || ''), {
    enabled: !!preview,
  });

  return !preview ? res : resRe;
};

export default usePreview;
