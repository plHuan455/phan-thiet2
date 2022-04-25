import React, { useMemo } from 'react';

import leaf from 'assets/images/pages/home/feedbacks/leaf.png';
import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Image from 'components/atoms/Image';
import Animate from 'components/organisms/Animate';
import Card from 'components/organisms/Card';
import { baseString, baseURL, getBlockData } from 'utils/functions';

interface FeedbackItemProps {
  description?: string;
  image?: string;
  name?: string;
  position?: string;
}
interface FeedbackProps {
  titleSection: string;
  link?: LinkTypes;
  items?: FeedbackItemProps[];
}
const Feedbacks: React.FC<SectionBlocks> = ({ blocks }) => {
  const feedbackBlock = getBlockData<FeedbackProps>(
    'customer_experience',
    blocks,
  );

  const feedbackData = useMemo(
    () => feedbackBlock?.items?.map((val) => ({
      comment: baseString(val.description),
      imgSrc: baseURL(val.image),
      job: baseString(val?.position),
      name: baseString(val.name),
    })),
    [feedbackBlock],
  );
  return (
    <Animate type="fadeInUp">
      <section className="u-pt-md-80 u-pb-48 u-pt-48 u-pb-md-80 position-relative">
        <div className="s-feedbacks_leaf">
          <div className="s-feedbacks_leaf_layer">
            <Image src={leaf} alt="leaf" />
          </div>
        </div>
        <Container>
          <FlatMore
            title={{
              text: baseString(feedbackBlock?.titleSection),
              type: 'h4',
              modifiers: ['gradientGreen', '700', 's015'],
            }}
            link={{
              text: feedbackBlock?.link?.text,
              href: feedbackBlock?.link?.url,
              target: feedbackBlock?.link?.target,
            }}
            data={feedbackData}
            render={(item) => <Card.Feedback {...item} />}
          />
        </Container>
      </section>
    </Animate>
  );
};

export default Feedbacks;
