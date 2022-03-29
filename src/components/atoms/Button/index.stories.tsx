import { Story, Meta } from '@storybook/react';
import React from 'react';

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
    loading: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

export const normal: Story = ({
  variant,
  loading,
}) => (
  <Button variant={variant} loading={loading}>
    Đăng ký nhận thông tin
  </Button>
);
