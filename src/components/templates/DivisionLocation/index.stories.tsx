import { Story, Meta } from '@storybook/react';
import React from 'react';

import DivisionLocation from '.';

export default {
  title: 'Components/templates/DivisionLocation',
  component: DivisionLocation,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <DivisionLocation />
);
