import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import bgConsultancy from 'assets/images/pages/divisionList/bgConsultancy.png';
import Image from 'components/atoms/Image';
import { FormConsultancy } from 'components/organisms/Consultancy';
import ConsultancyTemplate from 'components/templates/Consultancy';
import { schemasConsultancyForm } from 'utils/schemas';

const Consultancy: React.FC = () => {
  const method = useForm<FormConsultancy>({
    resolver: yupResolver(schemasConsultancyForm),
    mode: 'onSubmit',
  });

  return (
    <div className="s-consultancy">
      <ConsultancyTemplate
        title={{
          text: 'ĐĂNG KÝ NHẬN <br /> THÔNG TIN DỰ ÁN',
          modifiers: ['700', 'gradientGreen', 's015'],
        }}
        layer={(
          <div className="s-consultancy-bg">
            <Image src={bgConsultancy} />
          </div>
        )}
        form={{
          title: 'Quý khách đăng ký nhận email thông tin dự án, các chương trình ưu đãi, khuyến mại</br>và tin tức mới nhất từ NovaWorld Phan Thiet',
          method,
          // eslint-disable-next-line no-console
          handleSubmit: (data: FormConsultancy) => console.log(data),
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
};
export default Consultancy;
