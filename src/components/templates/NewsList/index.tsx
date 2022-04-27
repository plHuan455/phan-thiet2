import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import Container from 'common/Container';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Card from 'components/organisms/Card';
import { CardNewsProps } from 'components/organisms/Card/News';

export interface NewsListProps {
  title?: string
  listNews?: CardNewsProps[]
  button?: LinkTypes;
}

const NewsList: React.FC<NewsListProps> = ({
  title,
  listNews,
  button,
}) => {
  const { t } = useTranslation();
  return (
    <Animate type="fadeInUp" extendClassName="t-newsList">
      <Container>
        <div className="t-newsList_title">
          <Heading type="h4" modifiers={['s015', 'gradientGreen', '700']} content={title} />
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
            <Text modifiers={['gradientGreen', '24x36', 'center']} content={t('general.not_found_data')} />
          </div>
        )}
      </Container>
    </Animate>
  );
};

NewsList.defaultProps = {
};

export default React.memo(NewsList);
