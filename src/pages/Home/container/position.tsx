import React from 'react';

import { listDivisionDummy } from 'assets/dataDummy/projectMap';
import ProjectPositionHome from 'components/templates/ProjectPositionHome';

const Position: React.FC = () => (
  <ProjectPositionHome
    listDivision={listDivisionDummy}
    scale={{
      label: 'QUY MÔ',
      value: '1.000 HECTA',
    }}
    investment={{
      label: 'VỐN ĐẦU TƯ',
      value: '5 TỶ USD',
    }}
    utility={{
      label: 'LẦN ĐẦU TIÊN TẠI VIỆT NAM',
      value: '200 TIỆN ÍCH KHỦNG',
    }}
  />
);

export default Position;
