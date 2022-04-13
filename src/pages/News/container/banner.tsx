import React from 'react';

import BannerTemplate from 'components/templates/Banner';

const Banner: React.FC = () => (
  <div className="s-banner">
    <BannerTemplate
      image={{
        src: 'https://source.unsplash.com/random',
      }}
      isLayer
      search={{
        placeholder: 'Tìm kiếm tin tức',
        // eslint-disable-next-line no-console
        onSearch: (search) => console.log('search', search),
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
  </div>
);

export default Banner;
