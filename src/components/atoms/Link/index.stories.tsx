/* eslint-disable jsx-a11y/anchor-is-valid */
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Link from '.';

export default {
  title: 'Components/atoms/Link',
  component: Link,
  argTypes: {},
} as Meta;

export const internal: Story = () => (
  <BrowserRouter>
    <Link href="/">
      internal
    </Link>
  </BrowserRouter>
);

export const external: Story = () => (
  <BrowserRouter>
    <Link href="https://www.google.com/">
      external
    </Link>
  </BrowserRouter>
);
