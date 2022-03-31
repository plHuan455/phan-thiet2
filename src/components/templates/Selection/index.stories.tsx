import { Story, Meta } from '@storybook/react';
import React from 'react';

import Selection from '.';

export default {
  title: 'Components/templates/Selection',
  component: Selection,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Selection />
);
