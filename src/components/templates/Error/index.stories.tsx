import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Error from '.';

import error404 from 'assets/images/error/404.png';

export default {
  title: 'Components/templates/Error',
  component: Error,
  argTypes: { },
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <Error
      imgSrc={error404}
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
