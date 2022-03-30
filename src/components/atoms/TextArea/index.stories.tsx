import { Story, Meta } from '@storybook/react';
import React from 'react';

import TextArea from '.';

export default {
  title: 'Components/atoms/TextArea',
  component: TextArea,
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
  <TextArea
    error={error}
    sizeModify={sizeModify}
    rows={4}
    placeholder="NỘI DUNG"
  />
);
