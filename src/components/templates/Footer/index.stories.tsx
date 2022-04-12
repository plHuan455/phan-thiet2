import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from '.';

import dummyData from 'assets/dataDummy/footer';

export default {
  title: 'Components/templates/Footer',
  component: Footer,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <Footer
      {...dummyData}
    />
  </BrowserRouter>
);
