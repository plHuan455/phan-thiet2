import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

import dataJourneys from 'assets/dataDummy/journeys';
import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import JourneysTemplate from 'components/templates/Journeys';
import getSubDivisionListService from 'services/subdivision';
import CONSTANTS from 'utils/constants';
import {
  baseString, getBlockData, baseURL,
} from 'utils/functions';

interface DivisionProps{
  titleSection: string;
  link?: LinkTypes;
}

interface JourneysProps{
  titleSection: string,
}

const Division: React.FC<SectionBlocks> = ({ blocks }) => {
  const divisionBlocks = getBlockData<DivisionProps>('subdivision_novaworld', blocks);
  const journeysBlocks = getBlockData<JourneysProps>('experience_secondhome', blocks);
  const { data: subDivisionList } = useQuery('getSubDivisionListHome', () => getSubDivisionListService());

  const subDivisionData = useMemo(() => subDivisionList?.data?.map((item) => ({
    imgSrc: baseURL(item.thumbnail),
    title: item.name,
    // TODO: Update prefix later
    href: `phan-khu/${item.slug}`,
    description: item.content.description,
  })), [subDivisionList]);

  const journeysData = useMemo(() => subDivisionList?.data.map((item) => ({
    title: item.name,
    description: item.content.description,
    // TODO: Add Translations Later
    textBtn: 'Tham quan các mẫu nhà',
    //  TODO: Add locale later
    href: `${CONSTANTS.PREFIX.DIVISION.VI}/${item.slug}`,
  })), [subDivisionList]);

  return (
    <>
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
      <section>
        <JourneysTemplate
          title={journeysBlocks?.titleSection}
          titleField="Các mẫu nhà"
          dataTimeLine={journeysData}
          listCard={dataJourneys.listCard}
          srcBg={dataJourneys.srcBg}
        />
      </section>

    </>
  );
};

export default Division;
