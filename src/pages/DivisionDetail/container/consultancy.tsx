/* eslint-disable no-console */
import React from 'react';
import { useForm } from 'react-hook-form';

import layer3 from 'assets/images/consultancy/blue-background-2.png';
import layer1 from 'assets/images/consultancy/kingdom-left.png';
import layer2 from 'assets/images/consultancy/kingdom-right.png';
import layer4 from 'assets/images/consultancy/orange-background.png';
import Image from 'components/atoms/Image';
import { FormConsultancy } from 'components/organisms/Consultancy';
import ConsultancyTemplate from 'components/templates/Consultancy';

interface ConsultancyProps {}

const LayerSection: React.FC = () => (
  <div className="s-consultancy">
    <div className="s-consultancy_layer1">
      <Image src={layer1} alt="layer1" ratio="326x221" />
    </div>
    <div className="s-consultancy_layer2">
      <Image src={layer2} alt="layer1" ratio="238x150" />
    </div>
    <div className="s-consultancy_layer3">
      <Image src={layer3} alt="layer3" ratio="1369x372" />
    </div>
    <div className="s-consultancy_layer4">
      <Image src={layer4} alt="layer4" ratio="1369x225" />
    </div>
  </div>
);

const Consultancy: React.FC<ConsultancyProps> = () => {
  const method = useForm<FormConsultancy>();

  return (
    <section
      className="position-relative"
      style={{ color: 'var(--theme)' }}
    >
      <ConsultancyTemplate
        layer={<LayerSection />}
        py="lg"
        title={{
          text: 'ĐĂNG KÝ NHẬN <br /> THÔNG TIN DỰ ÁN',
          modifiers: ['400', 'inherit', 's015'],
        }}
        form={{
          title:
            'Quý khách đăng ký nhận email thông tin dự án, các chương trình ưu đãi, khuyến mại</br>và tin tức mới nhất từ NovaWorld Phan Thiet',
          method,
          handleSubmit: (data) => console.log(data),
          variantButton: 'inherit',
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
    </section>
  );
};
export default Consultancy;
