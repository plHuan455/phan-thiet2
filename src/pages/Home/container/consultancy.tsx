import React from 'react';

import bgBottom from 'assets/images/pages/home/consultancy/bgBottom.png';
import bgCenter from 'assets/images/pages/home/consultancy/bgCenter.png';
import bgWhite from 'assets/images/pages/home/consultancy/bgWhite.png';
import leavesLeft from 'assets/images/pages/home/consultancy/leavesLeft.png';
import leavesRight from 'assets/images/pages/home/consultancy/leavesRight.png';
import ConsultancyCommon from 'common/Consultancy';
import Image from 'components/atoms/Image';
import { baseString, getBlockData } from 'utils/functions';

interface ConsultancyProps{
  titleSection: string;
}

const Consultancy: React.FC<SectionBlocks> = ({ blocks }) => {
  const consultancyBlocks = getBlockData<ConsultancyProps>('project_information', blocks);
  return (
    <section className="s-consultancy position-relative">
      <ConsultancyCommon
        title={{
          text: baseString(consultancyBlocks?.titleSection),
          modifiers: ['700', 'gradientGreen', 's015'],
        }}
        layer={(
          <>
            <div className="s-consultancy_bgTop">
              <Image src={bgCenter} />
            </div>
            <div className="s-consultancy_bgCenter">
              <Image src={bgWhite} />
            </div>
            <div className="s-consultancy_bgBottom">
              <Image src={bgBottom} />
            </div>
            <div className="s-consultancy_leavesLeft">
              <Image src={leavesLeft} />
            </div>
            <div className="s-consultancy_leavesRight">
              <Image src={leavesRight} />
            </div>
          </>
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
    </section>
  );
};

export default Consultancy;
