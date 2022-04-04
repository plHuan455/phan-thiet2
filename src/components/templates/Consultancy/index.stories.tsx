/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import Consultancy from '.';

import { FormConsultancy } from 'components/organisms/Consultancy';

export default {
  title: 'Components/templates/Consultancy',
  component: Consultancy,
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  const method = useForm<FormConsultancy>();
  return (
    <Consultancy
      title={{
        text: 'ĐĂNG KÝ NHẬN <br /> THÔNG TIN DỰ ÁN',
        modifiers: ['700', 'gradientGreen', 's015'],
      }}
      form={{
        title: 'Quý khách đăng ký nhận email thông tin dự án, các chương trình ưu đãi, khuyến mại</br>và tin tức mới nhất từ NovaWorld Phan Thiet',
        method,
        handleSubmit: (data) => console.log(data),
        variantButton: 'primary-green',
        consultancyInfo: {
          placeholderName: 'Họ và tên',
          placeholderPhone: 'Số điện thoại *',
          placeholderEmail: 'Email *',
          placeholderAddress: 'Địa chỉ',
          placeholderContent: 'Nội dung',
          checkbox: {
            label: 'Sản phẩm quan tâm: ',
            subLabel: '(Câu hỏi không bắt buộc)',
            list: [
              {
                label: 'Biệt thự',
                value: '1',
              },
              {
                label: 'Nhà phố',
                value: '2',
              },
              {
                label: 'Shophouse',
                value: '3',
              },
            ],
          },
          btnText: 'Đăng ký nhận thông tin',
        },
      }}
    />
  );
};
