import { Story, Meta } from '@storybook/react';
import React from 'react';

import Title from '.';

export default {
  title: 'Components/molecules/Title',
  component: Title,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <>
    <Title content="1.000 HECTA" type="h1" modifiers={['gradientGreen', '700']} />
    <div style={{ height: '50vh' }} />
    <Title content="1.000 HECTA" type="h1" modifiers={['gradientGreen', '700']} />
    <div style={{ height: '50vh' }} />
  </>
);
