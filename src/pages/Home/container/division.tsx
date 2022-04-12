import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import { getBlockData } from 'utils/functions';

const data = new Array(7).fill({
  imgSrc: 'https://source.unsplash.com/random',
  title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
  href: '/',
  description: 'Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị ..',
});

interface DivisionProps{
  titleSection: string,
  link?: {url?: string, text?: string, target?: string}
}

const Division: React.FC<SectionBlocks> = ({ blocks }) => {
  const divisionBlocks = getBlockData<DivisionProps>('subdivision_novaworld', blocks);

  return (
    <section className="u-pt-md-83 u-pb-80 u-pt-48 u-pb-48 position-relative">
      <Container>
        <FlatMore
          title={{
            text: divisionBlocks?.titleSection || '',
            type: 'h4',
            modifiers: ['gradientGreen', '700', 's015'],
          }}
          link={{
            text: divisionBlocks?.link?.text || 'Xem tất cả',
            href: divisionBlocks?.link?.url,
            target: divisionBlocks?.link?.target,
          }}
          data={data}
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
