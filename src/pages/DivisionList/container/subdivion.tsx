import React from 'react';

import balloon from 'assets/images/pages/divisionList/balloonDivisions.png';
import Image from 'components/atoms/Image';
import Subdivision from 'components/templates/Subdivision';

const Divisions: React.FC = () => (
  <div className="p-divisionList_divisions">
    {/* TODO: Add Animation Later */}
    <div className="p-divisionList_divisions-balloon">
      <Image src={balloon} ratio="1x1" size="contain" />
    </div>
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
  </div>
);

export default Divisions;
