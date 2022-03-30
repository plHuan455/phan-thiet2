import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Button from '.';

export default {
  title: 'Components/atoms/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary-blue', 'primary-green', 'outline-green'],
      },
      defaultValue: 'primary-blue',
    },
    size: {
      control: {
        type: 'select',
        options: ['md', 'lg'],
      },
      defaultValue: 'lg',
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const normal: Story = ({
  variant,
  size,
  loading,
}) => (
  <BrowserRouter>
    <Button variant={variant} size={size} loading={loading} disabled>
      Đăng ký nhận thông
    </Button>
    <br />
    {variant.includes('outline') && (
    <p>Outline will be not loading !!</p>
    )}
  </BrowserRouter>
);
