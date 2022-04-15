import React, { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import balloon from 'assets/images/pages/divisionList/balloonDivisions.png';
import Image from 'components/atoms/Image';
import { CardDivisionProps } from 'components/organisms/Card/Division';
import Subdivision from 'components/templates/Subdivision';
import getSubDivisionListService from 'services/subdivision';
import { baseURL, getBlockData, linkURL } from 'utils/functions';

interface DivisionProps {
  title: string;
  button: string;
}

const Divisions: React.FC<SectionBlocks> = ({ blocks }) => {
  const blockContent = useMemo(() => {
    const blockPageContent = getBlockData<DivisionProps>(
      'list_subdivision',
      blocks,
    );
    return {
      title: blockPageContent?.title,
      button: blockPageContent?.button,
    };
  }, [blocks]);

  const {
    data: subdivisionData,
    hasNextPage: hasNextSubdivision,
    isFetchingNextPage,
    fetchNextPage: fetchNextSubdivision,
  } = useInfiniteQuery(
    ['getSubDivisionList'],
    ({ pageParam = 1 }) => getSubDivisionListService({
      page: pageParam,
      // TODO LIMIT: 9
      limit: 3,
    }),
    {
      getNextPageParam: (params) => (params.meta?.page >= params.meta.totalPages
        ? false
        : params.meta.page + 1),
    },
  );

  const subdivisionList = useMemo(
    (): CardDivisionProps[] => (subdivisionData?.pages || []).reduce(
      (prev: CardDivisionProps[], curr) => [
        ...prev,
        ...curr.data.map((item) => ({
          imgSrc: baseURL(item?.thumbnail),
          title: item.name,
          description: item?.content?.description,
          href: linkURL(`/phan-khu/${item.slug}`),
        })),
      ],
      [],
    ),
    [subdivisionData],
  );

  return (
    <section className="s-divisions u-mt-md-88 u-mt-48">
      {/* TODO: Add Animation Later */}
      <div className="s-divisions-balloon">
        <Image src={balloon} ratio="1x1" size="contain" />
      </div>
      <Subdivision
        loading={isFetchingNextPage}
        onMore={() => hasNextSubdivision && fetchNextSubdivision()}
        title={blockContent?.title}
        // list={new Array(9).fill({
        //   imgSrc: 'https://source.unsplash.com/random',
        //   title: 'The Florida',
        //   description:
        //     'Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá
        // trị Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị ..',
        //   href: '/',
        // })}
        list={subdivisionList}
        btn={{
          text: blockContent?.button,
          url: '/',
          disabled: !hasNextSubdivision,
        }}
      />
    </section>
  );
};
export default Divisions;
