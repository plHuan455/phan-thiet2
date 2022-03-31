import { Story, Meta } from '@storybook/react';
import React from 'react';

import ProjectMap from '.';

export default {
  title: 'Components/templates/ProjectMap',
  component: ProjectMap,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <ProjectMap title="BẢN ĐỒ VỊ TRÍ DỰ ÁN" />
);
