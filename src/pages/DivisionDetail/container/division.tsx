import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Arrow from 'components/atoms/Arrow';
import Card from 'components/organisms/Card';
import { SubdivisionRelatedTypes } from 'services/subdivision/types';
import { baseString } from 'utils/functions';

const dataDummy = new Array(10).fill({
  imgSrc: 'https://source.unsplash.com/random',
  title: 'The Florida',
  description: 'Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị ..',
});

interface DivisionProps {
  data?: SubdivisionRelatedTypes;
}

const Division: React.FC<DivisionProps> = ({ data }) => (
  <section className="u-pt-md-80 u-pt-48 u-pb-md-80 u-pb-48" style={{ color: 'var(--theme)' }}>
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
        data={dataDummy}
        settings={{
          prevArrow: <Arrow.Prev />,
          nextArrow: <Arrow.Next />,
          customPaging() {
            return (
              <span className="o-carousel_dot rect inherit" style={{ backgroundColor: 'var(--theme)' }} />
            );
          },
        }}
        render={(item) => <Card.Division {...item} />}
      />
    </Container>
  </section>
);

Division.defaultProps = {
  data: undefined,
};

export default Division;
