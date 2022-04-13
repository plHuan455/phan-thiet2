import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import { CardDivisionProps } from 'components/organisms/Card/Division';

export interface YouCanCareProps {
  dataList: CardDivisionProps[];
  title: string,
  link?:{
    text: string,
    href?: string,
    target?: string
  }
}

const YouCanCare: React.FC<YouCanCareProps> = ({ dataList, title, link }) => (
  <div className="t-youCanCare">
    <Container>
      <FlatMore
        title={{
          text: title,
          type: 'h2',
          modifiers: ['s015', '400', 'inherit'],
        }}
        link={link}
        data={dataList}
        render={(item) => <Card.Division {...item} />}
      />
    </Container>

  </div>
);

YouCanCare.defaultProps = {};

export default YouCanCare;
