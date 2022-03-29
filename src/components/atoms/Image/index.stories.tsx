import { Story, Meta } from '@storybook/react';
import React from 'react';

import Image from '.';

export default {
  title: 'Components/atoms/Image',
  component: Image,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <div style={{ width: 200 }}>
    <Image src="https://source.unsplash.com/random" ratio="1x1" />
  </div>
);
