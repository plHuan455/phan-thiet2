import React from 'react';
import { UseFormReturn } from 'react-hook-form';

import { FormConsultancy } from 'components/organisms/Consultancy';
import ConsultancyTemplate from 'components/templates/Consultancy';

interface ConsultancyProps {
  method: UseFormReturn<FormConsultancy>;
}

const Consultancy: React.FC<ConsultancyProps> = ({ method }) => (
  <div className="s-consultancy">
    <ConsultancyTemplate
      title={{
        text: 'ĐĂNG KÝ NHẬN <br /> THÔNG TIN DỰ ÁN',
        modifiers: ['700', 'gradientGreen', 's015'],
      }}
      form={{
        title: 'Quý khách đăng ký nhận email thông tin dự án, các chương trình ưu đãi, khuyến mại</br>và tin tức mới nhất từ NovaWorld Phan Thiet',
        method,
        // eslint-disable-next-line no-console
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
  </div>
);

export default Consultancy;
