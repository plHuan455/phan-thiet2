import { Story, Meta } from '@storybook/react';
import React from 'react';

import Arrow from '.';

export default {
  title: 'Components/atoms/Arrow',
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  const styles = {
    minHeight: '300px',
    '--theme': 'rgb(0, 92, 143)',
  };
  return (
    <div style={{ ...styles, position: 'relative' }}>
      <Arrow.Prev />
      <Arrow.Next />
    </div>
  );
};
