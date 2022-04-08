import React, { useState } from 'react';

import { listDivisionDummy, optionDummy } from 'assets/dataDummy/projectMap';
import { OptionType } from 'components/molecules/PullDown';
import ProjectPositionSummary from 'components/templates/ProjectPositionSummary';

const Map: React.FC = () => {
  const [selected, setSelected] = useState<OptionType>();

  return (
    <section className="u-mt-md-40 u-mt-16">
      <ProjectPositionSummary
        optionsDivision={optionDummy}
        title="BẢN ĐỒ VỊ TRÍ DỰ ÁN"
        listDivision={listDivisionDummy}
        valueDivision={selected}
        handleSelected={(option) => setSelected(option)}
        placeholderPulldown="Chọn phân khu"
      />
    </section>
  );
};

export default Map;
