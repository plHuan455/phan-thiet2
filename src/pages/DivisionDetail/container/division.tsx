import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Arrow from 'components/atoms/Arrow';
import Animate from 'components/organisms/Animate';
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
  const { data: subDivisionList } = useQuery(['getSubDivisionList'], () => getSubDivisionListService({
    except_ids: subdivisionId?.toString(),
  }));

  const subDivisionData = useMemo(
    () => subDivisionList?.data
      .map((division) => ({
        imgSrc: baseURL(division.thumbnail),
        title: division.name,
        description: baseString(division.description),
        // TODO: update locale later
        href: `/${CONSTANTS.PREFIX.DIVISION.VI}/${division.slug}`,
      })),
    [subDivisionList?.data],
  );

  return (
    <Animate type="fadeInUp">
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
              text: data?.btn?.text,
              href: data?.btn?.url,
              target: data?.btn?.target,
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
    </Animate>
  );
};

Division.defaultProps = {
  data: undefined,
  subdivisionId: undefined,
};

export default Division;
