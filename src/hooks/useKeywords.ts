import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { OptionSuggestTypes } from 'components/templates/Banner/component';
import getKeywordService from 'services/keyword';

const useKeywords = () => {
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

  return {
    options,
    hasNextPage,
    isLoading,
    fetchNextPage,
  };
};

export default useKeywords;
