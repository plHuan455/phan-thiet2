import { yupResolver } from '@hookform/resolvers/yup';
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { useForm } from 'react-hook-form';

import Consultancy, { FormConsultancy } from '.';

import { schemasConsultancyForm } from 'utils/schemas';

export default {
  title: 'Components/organisms/Consultancy',
  component: Consultancy,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary-blue', 'primary-green', 'outline-green', 'seaBlue', 'cyan', 'copper'],
      },
      defaultValue: 'primary-blue',
    },
  },
} as Meta;

export const Normal: Story = ({ variant }) => {
  const method = useForm<FormConsultancy>({
    resolver: yupResolver(schemasConsultancyForm),
    mode: 'onSubmit',
  });
  return (
    <div style={{ maxWidth: 643 }}>
      <Consultancy
        title="Quý khách đăng ký nhận email thông tin dự án, các chương trình ưu đãi, khuyến mại</br>và tin tức mới nhất từ NovaWorld Phan Thiet"
        method={method}
        // eslint-disable-next-line no-console
        handleSubmit={(data) => console.log(data)}
        consultancyInfo={{
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
        }}
        variantButton={variant}
      />
    </div>
  );
};
