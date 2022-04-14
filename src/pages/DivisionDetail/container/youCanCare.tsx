import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';

const dataDummy = new Array(10).fill({
  imgSrc: 'https://source.unsplash.com/random',
  title: 'The Florida',
  description: 'Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị ..',
});

interface YouCanCareProps {

}

const YouCanCare: React.FC<YouCanCareProps> = () => (
  <section className="u-mt-md-96 u-mt-48 u-mb-md-157 u-mb-80" style={{ color: 'var(--theme)' }}>
    <Container>
      <FlatMore
        title={{
          text: 'CÓ THỂ BẠN QUAN TÂM',
          type: 'h2',
          modifiers: ['s015', '400', 'inherit'],
        }}
        link={{
          text: 'Xem tất cả',
          href: '/',
        }}
        data={dataDummy}
        render={(item) => <Card.Division {...item} />}
      />
    </Container>
  </section>
);

export default YouCanCare;
