import { Story, Meta } from '@storybook/react';
import React from 'react';

import Checkbox from '.';

export default {
  title: 'Components/atoms/Checkbox',
  component: Checkbox,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Checkbox label="Nhà phố" />
);
