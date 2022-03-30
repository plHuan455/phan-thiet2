import { Story, Meta } from '@storybook/react';
import React from 'react';

import Nav from '.';

export default {
  title: 'Components/molecules/Nav',
  component: Nav,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Nav />
);
