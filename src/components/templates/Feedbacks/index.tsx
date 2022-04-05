import React from 'react';

import Container from 'common/Container';
import FlatList from 'common/FlatList';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import Title from 'components/molecules/Title';
import Card from 'components/organisms/Card';
import { CardFeedbackProps } from 'components/organisms/Card/Feedback';

interface FeedbacksProps {
  title?: string;
  listFeedbacks?: CardFeedbackProps[];
  button?: LinkTypes;
}

const Feedbacks: React.FC<FeedbacksProps> = ({
  title,
  listFeedbacks,
  button,
}) => (
  <div className="t-feedbacks">
    <Container>
      <div className="t-feedbacks_title">
        <Title type="h4" modifiers={['gradientGreen', '700']} content={title} />
        <div className="t-feedbacks_seeAll animate animate-arrowSlide">
          <Text modifiers={['copper', '14x20', '400']} content={button?.text} />
          <div className="t-feedbacks_seeAll-icon">
            <Icon iconName="arrowRightCopper" size="16" />
          </div>
        </div>
      </div>
      <div className="t-feedbacks_carousel">
        <FlatList
          data={listFeedbacks}
          render={(item) => (
            <Card.Feedback
              {...item}
            />
          )}
        />
      </div>
      <div className="t-feedbacks_seeAllMobile animate animate-arrowSlide">
        <Text modifiers={['copper', '14x20', '400']} content={button?.text} />
        <div className="t-feedbacks_seeAllMobile-icon">
          <Icon iconName="arrowRightCopper" size="16" />
        </div>
      </div>
    </Container>
  </div>
);

Feedbacks.defaultProps = {
  title: '',
  listFeedbacks: [],
  button: undefined,
};

export default Feedbacks;
