import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Error from '.';

export default {
  title: 'Components/templates/Error',
  component: Error,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [403, 404, 500, 503],
      },
      defaultValue: 403,
    },
  },
} as Meta;

export const normal: Story = ({ type }) => (
  <BrowserRouter>
    <Error
      type={type}
      title="Rất tiếc, chúng tôi không tìm thấy trang này"
      description="Vui lòng trở về trang chủ hoặc liên hệ với chúng tôi để được hỗ trợ."
      back={
      {
        text: 'Trang chủ',
        url: '/',
        target: '_self',
      }
    }
      contact={
      {
        text: 'Liên hệ',
        url: '/',
        target: '_self',
      }
    }
    />
  </BrowserRouter>
);
