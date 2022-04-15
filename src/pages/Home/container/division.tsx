import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import getSubDivisionListService from 'services/division';
import { baseString, getBlockData, baseURL } from 'utils/functions';

interface DivisionProps{
  titleSection: string;
  link?: LinkTypes;
}

const Division: React.FC<SectionBlocks> = ({ blocks }) => {
  const divisionBlocks = getBlockData<DivisionProps>('subdivision_novaworld', blocks);

  const { data: subDivisionList } = useQuery('getSubDivisionListHome', () => getSubDivisionListService());

  const subDivisionData = useMemo(() => subDivisionList?.data?.map((item) => ({
    imgSrc: baseURL(item.thumbnail),
    title: item.name,
    // TODO: Update prefix later
    href: `phan-khu/${item.slug}`,
    description: item.content.description,
  })), [subDivisionList]);

  return (
    <section className="u-pt-md-83 u-pb-80 u-pt-48 u-pb-48 position-relative">
      <Container>
        <FlatMore
          title={{
            text: baseString(divisionBlocks?.titleSection),
            type: 'h4',
            modifiers: ['gradientGreen', '700', 's015'],
          }}
          link={{
            text: divisionBlocks?.link?.text,
            href: divisionBlocks?.link?.url,
            target: divisionBlocks?.link?.target,
          }}
          data={subDivisionData}
          render={(item) => (
            <Card.Division
              {...item}
            />
          )}
        />
      </Container>
    </section>
  );
};

export default Division;
