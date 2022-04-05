import React, { useState } from 'react';

import { listDivisionDummy, optionDummy } from 'assets/dataDummy/projectMap';
import { OptionType } from 'components/molecules/PullDown';
import ProjectPositionSummary from 'components/templates/ProjectPositionSummary';

const Map: React.FC = () => {
  const [selected, setSelected] = useState<OptionType>();

  return (
    <>
      <ProjectPositionSummary
        optionsDivision={optionDummy}
        title="BẢN ĐỒ VỊ TRÍ DỰ ÁN"
        listDivision={listDivisionDummy}
        valueDivision={selected}
        handleSelected={(option) => setSelected(option)}
        placeholderPulldown="Chọn phân khu"
      />
    </>
  );
};

export default Map;
