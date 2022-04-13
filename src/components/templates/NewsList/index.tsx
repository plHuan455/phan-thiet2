import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Container from 'common/Container';
import Button from 'components/atoms/Button';
import Text from 'components/atoms/Text';
import Title from 'components/molecules/Title';
import Card from 'components/organisms/Card';
import { CardNewsProps } from 'components/organisms/Card/News';

interface NewsListProps {
  title?: string
  listNews?: CardNewsProps[]
  button?: LinkTypes;
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
      {listNews?.length ? (
        <>
          <Row className="u-ml-negative-16 u-mr-negative-16">
            {listNews.map((item, index) => (
              <Col
                xs={12}
                sm={6}
                lg={12}
                key={`t-newsList-${index.toString()}`}
                className={`${index === 0 ? 'u-mt-lg-45' : 'u-mt-lg-59'} u-mt-md-32 u-mt-24`}
              >
                <Card.News
                  {...item}
                />
              </Col>
            ))}
          </Row>
          {button && (
            <div className="t-newsList_button d-flex justify-content-center u-mt-24 u-mt-md-45">
              <Button variant="primary-green">{button?.text}</Button>
            </div>
          )}
        </>
      ) : (
        <div className="u-mt-16 u-mt-md-32">
          {/* TODO: Translate later */}
          <Text modifiers={['gradientGreen', '24x36', 'center']} content="Không có dữ liệu" />
        </div>
      )}
    </Container>
  </div>
);

NewsList.defaultProps = {
  title: '',
  listNews: [],
  button: undefined,
};

export default NewsList;
