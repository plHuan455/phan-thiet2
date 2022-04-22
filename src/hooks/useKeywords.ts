import { useCallback, useMemo } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useInfiniteQuery } from 'react-query';

import { OptionSuggestTypes } from 'components/templates/Banner/component';
import getKeywordService, { postKeywordService } from 'services/keyword';

const useKeywords = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    data,
    hasNextPage,
    isFetchingNextPage: isLoading,
    fetchNextPage,
  } = useInfiniteQuery(
    ['getKeywords'],
    ({ pageParam = 1 }) => getKeywordService({
      page: pageParam,
      limit: 5,
    }),
    {
      getNextPageParam: (params) => (params.meta?.page >= params.meta.totalPages
        ? false
        : params.meta.page + 1),
    },
  );

  const options = useMemo(
    (): OptionSuggestTypes[] => (data?.pages || []).reduce(
      (prev: OptionSuggestTypes[], curr) => [
        ...prev,
        ...curr.data.map((item) => ({
          id: String(item.id),
          keyword: item.keyword,
        })),
      ],
      [],
    ),
    [data],
  );

  const onSubmit = useCallback(async (keyword: string | undefined) => {
    if (!executeRecaptcha) return;
    const grecaptchaToken = await executeRecaptcha('submit');
    await postKeywordService({
      grecaptcha_token: grecaptchaToken,
      keyword: keyword || '',
      locale: 'vi',
    });
  }, [executeRecaptcha]);

  return {
    options,
    hasNextPage,
    isLoading,
    fetchNextPage,
    onSubmit,
  };
};

export default useKeywords;
