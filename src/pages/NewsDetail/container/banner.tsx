import React from 'react';

import bannerImage from 'assets/images/pages/divisionList/banner.png';
import BannerTemplate from 'components/templates/Banner';

const Banner: React.FC = () => (
  <>
    <BannerTemplate
      image={{ src: bannerImage }}
      isLayer
      search={{
        placeholder: 'Tìm kiếm tin tức',
        // eslint-disable-next-line no-console
        onSearch: (text) => console.log(text),
      }}
      tag={{
        keyword: 'Từ khóa nổi bật:',
        list: [
          {
            text: 'Du lịch',
            href: 'du-lich',
          },
          {
            text: 'The King Dom',
            href: 'the-king-dom',
          },
          {
            text: 'Tour trọn gói',
            href: 'tour-tron-goi',
          },
        ],
      }}
    />
  </>
);

export default Banner;
