import { Story, Meta } from '@storybook/react';
import React from 'react';

import PlanningHighway from '.';

export default {
  title: 'Components/templates/PlanningHighway',
  component: PlanningHighway,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <PlanningHighway />
);
