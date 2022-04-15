import React from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import { baseString, getBlockData } from 'utils/functions';

const data = new Array(7).fill({
  thumbnail: 'https://source.unsplash.com/random',
  title: 'Nova World phan thiết và chuỗi cung cấp tiện ích',
  href: '/',
  tag: 'The Kingdom',
  dateTime: '2 giờ trước',
  url: {
    text: 'Xem thêm',
    iconName: 'arrowRightCopper',
    animation: 'arrow',
  },
});
interface NewsProps{
  titleSection: string;
  link?: LinkTypes;
}
const News: React.FC<SectionBlocks> = ({ blocks }) => {
  const newsBlock = getBlockData<NewsProps>('general_news', blocks);
  return (
    <section className="u-pt-md-80 u-pb-48 u-pt-48 u-pb-md-88 position-relative">
      <Container>
        <FlatMore
          title={{
            text: baseString(newsBlock?.titleSection),
            type: 'h4',
            modifiers: ['gradientGreen', '700', 's015'],
          }}
          link={{
            text: newsBlock?.link?.text,
            href: newsBlock?.link?.url,
            target: newsBlock?.link?.target,
          }}
          data={data}
          render={(item) => (
            <Card.Normal
              {...item}
            />
          )}
        />
      </Container>
    </section>
  );
};

export default News;
