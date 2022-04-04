import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

import Consultancy from '.';

import { FormConsultancy } from 'components/organisms/Consultancy';

describe('<Consultancy />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    const method = useForm<FormConsultancy>();
    ReactDOM.render(<Consultancy
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
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
