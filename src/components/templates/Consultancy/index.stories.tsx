import { Story, Meta } from '@storybook/react';
import React from 'react';

import Consultancy from '.';

export default {
  title: 'Components/templates/Consultancy',
  component: Consultancy,
  argTypes: {},
} as Meta;

export const Home: Story = () => (
  <Consultancy modifiers="default" layers="1" />
);

export const Kingdom: Story = () => (
  <Consultancy modifiers="kingdom" layers="1" />
);
export const Boutique: Story = () => (
  <Consultancy modifiers="boutique" layers="1" />
);

export const LayerBackground1: Story = () => (
  <Consultancy modifiers="default" layers="1" />
);

export const LayerBackground2: Story = () => (
  <Consultancy modifiers="default" layers="2" />
);

export const LayerBackground3: Story = () => (
  <Consultancy modifiers="kingdom" layers="3" />
);
export const LayerBackground4: Story = () => (
  <Consultancy modifiers="default" layers="4" />
);
