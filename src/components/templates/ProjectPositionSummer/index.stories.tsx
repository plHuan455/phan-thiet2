import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import ProjectPositionSummer from '.';

import { listDivisionDummy, optionDummy } from 'assets/dataDummy/projectMap';
import { OptionType } from 'components/molecules/PullDown';

export default {
  title: 'Components/templates/ProjectPositionSummer',
  component: ProjectPositionSummer,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const [selected, setSelected] = useState<OptionType | undefined>();
  return (
    <ProjectPositionSummer
      optionsDivision={optionDummy}
      title="BẢN ĐỒ VỊ TRÍ DỰ ÁN"
      listDivision={listDivisionDummy}
      valueDivision={selected}
      handleSelected={(option) => setSelected(option)}
    />
  );
};
