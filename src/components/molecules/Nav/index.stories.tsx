import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Nav from '.';

import dataHeader from 'assets/dataDummy/header';

export default {
  title: 'Components/molecules/Nav',
  component: Nav,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <div style={{ background: 'gray', height: '100vh' }}>
      <Nav pathname="" menu={dataHeader.menu} />
    </div>
  </BrowserRouter>
);
