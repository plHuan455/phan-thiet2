import { Story, Meta } from '@storybook/react';
import React from 'react';

import FloatingButton from '.';

export default {
  title: 'Components/common/FloatingButton',
  component: FloatingButton,
  argTypes: {},
} as Meta;

export const Normal: Story = () => (
  <FloatingButton />
);
