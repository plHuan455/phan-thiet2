import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import ProjectPositionSummary from '.';

import { listDivisionDummy, optionDummy } from 'assets/dataDummy/projectMap';
import { OptionType } from 'components/molecules/PullDown';

export default {
  title: 'Components/templates/ProjectPositionSummary',
  component: ProjectPositionSummary,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const [selected, setSelected] = useState<OptionType>();
  return (
    <ProjectPositionSummary
      optionsDivision={optionDummy}
      title="BẢN ĐỒ VỊ TRÍ DỰ ÁN"
      listDivision={listDivisionDummy}
      valueDivision={selected}
      handleSelected={(option) => setSelected(option)}
      placeholderPulldown="Chọn phân khu"
    />
  );
};
