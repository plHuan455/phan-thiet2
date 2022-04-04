import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';

import Container from 'common/Container';
import Heading from 'components/atoms/Heading';
import ConsultancyForm, {
  FormConsultancy,
} from 'components/organisms/Consultancy';
import mapModifiers from 'utils/functions';
import { schemasConsultancyForm } from 'utils/schemas';

export interface ConsultancyProps {
  modifiers?: 'default' | 'kingdom' | 'boutique';
  layers: '1' | '2' | '3' | '4'
}

const Consultancy: React.FC<ConsultancyProps> = ({ modifiers, layers }) => {
  const method = useForm<FormConsultancy>({
    resolver: yupResolver(schemasConsultancyForm),
    mode: 'onSubmit',
  });

  return (
    <div className="t-consultancy">
      <div className={mapModifiers('t-consultancy_layer', layers)}>
        <Container>
          <div className="t-consultancy_wrapper">
            <div className="t-consultancy_left">
              <div className={mapModifiers('t-consultancy_title', modifiers)}>
                <Heading
                  type="h2"
                  modifiers={[
                    modifiers === 'default' ? '700' : '400',
                    modifiers === 'default' ? '32x48' : '48x64',
                    'uppercase',
                    // eslint-disable-next-line no-nested-ternary
                    modifiers === 'default'
                      ? 'gradientGreen'
                      : modifiers === 'boutique'
                        ? 'deepLemon'
                        : 'seaBlue',
                  ]}
                >
                  ĐĂNG KÝ NHẬN THÔNG TIN DỰ ÁN
                </Heading>
              </div>
            </div>
            <div className="t-consultancy_right">
              <ConsultancyForm
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
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

Consultancy.defaultProps = {};

export default Consultancy;
