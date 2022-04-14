import { Story, Meta } from '@storybook/react';
import React from 'react';

import DivisionUtilities from '.';

import dataDummy from 'assets/dataDummy/divisionUtilities';

export default {
  title: 'Components/templates/DivisionUtilities',
  component: DivisionUtilities,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <DivisionUtilities
    title="TỔNG MẶT BẰNG TIỆN ÍCH PHÂN KHU"
    listLocations={dataDummy}
  />
);
