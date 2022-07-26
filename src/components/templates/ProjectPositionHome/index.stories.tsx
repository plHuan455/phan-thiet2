import { Story, Meta } from '@storybook/react';
import React from 'react';

import ProjectPositionHome from '.';

import { listDivisionDummy } from 'assets/dataDummy/projectMap';

export default {
  title: 'Components/templates/ProjectPositionHome',
  component: ProjectPositionHome,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <ProjectPositionHome
    listDivision={listDivisionDummy}
    scale={{
      label: 'QUY MÔ',
      value: '1000',
      unit: 'HECTA',
    }}
    investment={{
      label: 'VỐN ĐẦU TƯ',
      value: '5',
      unit: 'TỶ USD',
    }}
    utility={{
      label: 'LẦN ĐẦU TIÊN TẠI VIỆT NAM',
      value: '200',
      unit: 'TIỆN ÍCH KHỦNG',
    }}
  />
);
