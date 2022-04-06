import React from 'react';

import Container from 'common/Container';
import Button from 'components/atoms/Button';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Title from 'components/molecules/Title';
import Card from 'components/organisms/Card';
import { CardNewsProps } from 'components/organisms/Card/News';

interface NewsListProps {
  title?: string
  listNews?: CardNewsProps[]
  button?: LinkTypes
}

const NewsList: React.FC<NewsListProps> = ({
  title,
  listNews,
  button,
}) => (
  <div className="t-newsList">
    <Container>
      <div className="t-newsList_title">
        <Title type="h4" modifiers={['s015', 'gradientGreen', '700']} content={title} />
      </div>
      {
        listNews && listNews.length > 0 ? (
          <div className="t-newsList_content u-mt-md-32 u-mt-16">
            <div className="t-newsList_list u-mt-negative-8 u-mb-negative-8 u-mt-negative-md-16 u-mb-negative-md-16">
              {
                listNews.map((item, index) => (
                  <div key={`t-newsList-${index.toString()}`} className="t-newsList_list-item u-pt-8 u-pb-8 u-pt-md-16 u-pb-md-16">
                    <Card.News
                      {...item}
                    />
                  </div>
                ))
              }
            </div>
            {
              button && (
                <div className="t-newsList_button u-mt-16 u-mt-md-32">
                  <Link href={button?.url} target={button?.target}>
                    <Button variant="primary-green">{button?.text}</Button>
                  </Link>
                </div>
              )
            }
          </div>
        ) : (
          <div className="u-mt-16 u-mt-md-32">
            <Text modifiers={['gradientGreen', '24x36', 'center']} content="Không có dữ liệu" />
          </div>
        )
      }
    </Container>
  </div>
);

NewsList.defaultProps = {
  title: '',
  listNews: [],
  button: undefined,
};

export default NewsList;
