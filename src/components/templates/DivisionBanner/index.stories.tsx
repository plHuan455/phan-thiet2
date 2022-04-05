import { Story, Meta } from '@storybook/react';
import React from 'react';

import DivisionBanner from '.';

import banner from 'assets/images/banner.png';

export default {
  title: 'Components/templates/DivisionBanner',
  component: DivisionBanner,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <DivisionBanner thumbnail={banner} title="NHỊP ĐẬP THẾ GIỚI MỚI" />
);
