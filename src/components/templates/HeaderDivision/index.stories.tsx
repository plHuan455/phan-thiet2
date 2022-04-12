import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import HeaderSub from './HeaderSub';

import HeaderDivision from '.';

import dataHeader from 'assets/dataDummy/header';

export default {
  title: 'Components/templates/HeaderDivision',
  component: HeaderDivision,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <div style={{ height: '200vh', background: 'lightblue' }}>
      <HeaderDivision
        {...dataHeader}
      />
    </div>
  </BrowserRouter>
);

export const headerSub: Story = () => (
  <BrowserRouter>
    <div style={{ height: '200vh' }}>
      <HeaderSub
        logo={dataHeader.logo}
        logoUrl={dataHeader.logoUrl}
        subMenu={dataHeader.subMenu}
      />
    </div>
  </BrowserRouter>
);
