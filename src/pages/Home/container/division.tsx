import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import i18n from 'i18n';
import { getSubDivisionListService } from 'services/subdivision';
import CONSTANTS from 'utils/constants';
import {
  baseString, getBlockData, baseURL, redirectURL,
} from 'utils/functions';

interface DivisionProps{
  titleSection: string;
  link?: LinkTypes;
}

const Division: React.FC<SectionBlocks> = ({ blocks }) => {
  const { language } = i18n;
  const divisionBlocks = getBlockData<DivisionProps>('subdivision_novaworld', blocks);

  const { data: subDivisionList } = useQuery(['getSubDivisionListHome', [language]], () => getSubDivisionListService());

  const subDivisionData = useMemo(() => subDivisionList?.data?.map((item) => ({
    imgSrc: baseURL(item.thumbnail),
    title: item.name,
    href: redirectURL(CONSTANTS.PREFIX.DIVISION, item.slug, language),
    description: baseString(item?.description),
  })), [subDivisionList, language]);

  return (
    <section className="u-pt-lg-40 u-pt-md-30 u-pt-20 u-pb-20 u-pb-lg-40 u-pb-md-30 position-relative">
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
