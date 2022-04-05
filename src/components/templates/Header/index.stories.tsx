import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from '.';

import dataHeader from 'assets/dataDummy/header';

export default {
  title: 'Components/Templates/Header',
  component: Header,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <div style={{ height: '200vh' }}>
      <Header {...dataHeader} />
    </div>
  </BrowserRouter>
);
