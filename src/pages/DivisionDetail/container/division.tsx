import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Arrow from 'components/atoms/Arrow';
import Card from 'components/organisms/Card';
import i18n from 'i18n';
import { getSubDivisionListService } from 'services/subdivision';
import { SubdivisionRelatedTypes } from 'services/subdivision/types';
import CONSTANTS from 'utils/constants';
import { baseString, baseURL, redirectURL } from 'utils/functions';

interface DivisionProps {
  data?: SubdivisionRelatedTypes;
  subdivisionId?: number;
}

const Division: React.FC<DivisionProps> = ({ data, subdivisionId }) => {
  const { language } = i18n;
  const { data: subDivisionList } = useQuery(['SubdivisionPageDetail', { language }], () => getSubDivisionListService({
    except_ids: subdivisionId?.toString(),
  }));

  const subDivisionData = useMemo(
    () => subDivisionList?.data
      ?.map((division) => ({
        imgSrc: baseURL(division.thumbnail),
        title: division.name,
        description: baseString(division.description),
        href: redirectURL(CONSTANTS.PREFIX.DIVISION, division.slug, language),
      })),
    [subDivisionList?.data, language],
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
  );
};

Division.defaultProps = {
  data: undefined,
  subdivisionId: undefined,
};

export default Division;
