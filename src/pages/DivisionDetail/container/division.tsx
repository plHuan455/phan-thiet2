import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Arrow from 'components/atoms/Arrow';
import Card from 'components/organisms/Card';
import { getSubDivisionListService } from 'services/subdivision';
import { SubdivisionRelatedTypes } from 'services/subdivision/types';
import CONSTANTS from 'utils/constants';
import { baseString, baseURL } from 'utils/functions';

interface DivisionProps {
  data?: SubdivisionRelatedTypes;
  subdivisionId?: number;
}

const Division: React.FC<DivisionProps> = ({ data, subdivisionId }) => {
  const { data: subDivisionList } = useQuery(['getSubDivisionList'], () => getSubDivisionListService());

  const subDivisionData = useMemo(
    () => subDivisionList?.data
      .filter((item) => item.id !== subdivisionId)
      .map((division) => ({
        imgSrc: baseURL(division.thumbnail),
        title: division.name,
        description: division.description || '',
        href: `/${CONSTANTS.PREFIX.DIVISION.VI}/${division.slug}`,
      })),
    [subDivisionList?.data, subdivisionId],
  );
  return (
    <section
      className="u-pt-md-80 u-pt-48 u-pb-md-80 u-pb-48"
      style={{ color: 'var(--theme)' }}
    >
      <Container>
        <FlatMore
          title={{
            text: baseString(data?.title),
            type: 'h2',
            modifiers: ['s015', '400', 'inherit'],
          }}
          link={{
            text: 'Xem tất cả',
            href: '/',
          }}
          data={subDivisionData}
          settings={{
            prevArrow: <Arrow.Prev />,
            nextArrow: <Arrow.Next />,
            customPaging() {
              return (
                <span
                  className="o-carousel_dot rect inherit"
                  style={{ backgroundColor: 'var(--theme)' }}
                />
              );
            },
          }}
          render={(item) => <Card.Division {...item} />}
        />
      </Container>
    </section>
  );
};

Division.defaultProps = {
  data: undefined,
  subdivisionId: undefined,
};

export default Division;
