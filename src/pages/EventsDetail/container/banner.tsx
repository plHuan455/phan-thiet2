import React from 'react';

import BannerTemplate from 'components/templates/Banner';

interface BannerProps {
  thumbnail?: string
}

const Banner: React.FC<BannerProps> = ({
  thumbnail,
}) => (
  <>
    <BannerTemplate
      image={{ src: thumbnail }}
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

Banner.defaultProps = {
  thumbnail: '',
};

export default Banner;
