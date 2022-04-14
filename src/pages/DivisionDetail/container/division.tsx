import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Arrow from 'components/atoms/Arrow';
import Card from 'components/organisms/Card';

const dataDummy = new Array(10).fill({
  imgSrc: 'https://source.unsplash.com/random',
  title: 'The Florida',
  description: 'Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị ..',
});

interface DivisionProps {
}

const Division: React.FC<DivisionProps> = () => (
  <section className="u-mt-md-80 u-mt-48 u-mb-md-80 u-mb-48" style={{ color: 'var(--theme)' }}>
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
        settings={{
          prevArrow: <Arrow.Prev />,
          nextArrow: <Arrow.Next />,
        }}
        render={(item) => <Card.Division {...item} />}
      />
    </Container>
  </section>
);

export default Division;
