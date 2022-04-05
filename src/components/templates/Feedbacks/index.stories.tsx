import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Feedbacks from '.';

import img from 'assets/images/customerExperience/img.png';
import img1 from 'assets/images/customerExperience/img1.png';
import img2 from 'assets/images/customerExperience/img2.png';

export default {
  title: 'Components/templates/Feedbacks',
  component: Feedbacks,
  argTypes: {},
} as Meta;

const listDummy = [
  {
    imgSrc: img,
    job: 'DOANH NHÂN',
    name: 'Nguyễn Thanh Bình',
    comment: '“Điều mà tôi cảm thấy thích và ấn tượng là Novaland luôn lắng nghe khách hàng. Họ lấy những lời góp ý để cải thiện dịch vụ củ họ để ngày càng tốt hơn chứ không phải nghe qua chuyện”',
    href: '/',
  },
  {
    imgSrc: img1,
    job: 'DOANH NHÂN',
    name: 'Nguyễn Thanh Bình',
    comment: '“Điều mà tôi cảm thấy thích và ấn tượng là Novaland luôn lắng nghe khách hàng. Họ lấy những lời góp ý để cải thiện dịch vụ củ họ để ngày càng tốt hơn chứ không phải nghe qua chuyện”',
    href: '/',
  },
  {
    imgSrc: img2,
    job: 'DOANH NHÂN',
    name: 'Nguyễn Thanh Bình',
    comment: '“Điều mà tôi cảm thấy thích và ấn tượng là Novaland luôn lắng nghe khách hàng. Họ lấy những lời góp ý để cải thiện dịch vụ củ họ để ngày càng tốt hơn chứ không phải nghe qua chuyện” Điều mà tôi cảm thấy thích và ấn tượng là Novaland luôn lắng nghe khách hàng. Họ lấy những lời góp ý để cải thiện dịch vụ củ họ để ngày càng tốt hơn chứ không phải nghe qua chuyện”',
    href: '/',
  },
];

export const normal: Story = () => (
  <BrowserRouter>
    <Feedbacks
      title="TRẢI NGHIỆM KHÁCH HÀNG"
      listFeedbacks={listDummy}
      button={{
        text: 'Xem tất cả',
      }}
    />
  </BrowserRouter>
);
