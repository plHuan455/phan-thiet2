import React, { useMemo } from 'react';

import bgConsultancy from 'assets/images/pages/divisionList/bgConsultancy.png';
import ConsultancyCommon from 'common/Consultancy';
import Image from 'components/atoms/Image';
import { baseString, getBlockData } from 'utils/functions';

interface ConsultancyProps {
  title: string
}

const Consultancy: React.FC<SectionBlocks> = ({ blocks }) => {
  const blockContent = useMemo(() => {
    const blockPageContent = getBlockData<ConsultancyProps>(
      'form_register',
      blocks,
    );
    return {
      title: baseString(blockPageContent?.title),
    };
  }, [blocks]);
  return (
    <div className="s-consultancy">
      <ConsultancyCommon
        title={{
          text: blockContent?.title,
          modifiers: ['700', 'gradientGreen', 's015'],
        }}
        layer={(
          <div className="s-consultancy-bg">
            <Image src={bgConsultancy} />
          </div>
        )}
        form={{
          title: 'Quý khách đăng ký nhận email thông tin dự án, các chương trình ưu đãi, khuyến mại</br>và tin tức mới nhất từ NovaWorld Phan Thiet',
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
