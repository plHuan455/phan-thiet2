import { Story, Meta } from '@storybook/react';
import React from 'react';

import Input from '.';

export default {
  title: 'Components/atoms/Input',
  component: Input,
  argTypes: {
    error: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    sizeModify: {
      control: {
        type: 'select',
        options: ['md', 'lg'],
      },
      defaultValue: 'lg',
    },
  },
} as Meta;

export const normal: Story = ({
  error,
  sizeModify,
}) => (
  <Input placeholder="HỌ VÀ TÊN" error={error} sizeModify={sizeModify} />
);
