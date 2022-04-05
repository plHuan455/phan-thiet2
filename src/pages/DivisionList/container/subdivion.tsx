import React from 'react';

import Subdivision from 'components/templates/Subdivision';

const Divisions: React.FC = () => (
  <>
    <Subdivision
      title="DANH SÁCH PHÂN KHU"
      list={new Array(9).fill({
        imgSrc: 'https://source.unsplash.com/random',
        title: 'The Florida',
        description: 'Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị ..',
      })}
      btn={{
        text: 'XEM THÊM',
        url: '/',
      }}
    />
  </>
);

export default Divisions;
