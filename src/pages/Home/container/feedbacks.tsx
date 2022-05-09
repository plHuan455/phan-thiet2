import React, { useMemo } from 'react';

import leaf from 'assets/images/pages/home/feedbacks/leaf.png';
import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Image from 'components/atoms/Image';
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
    <section className="u-pt-md-30 u-pt-lg-40 u-pb-20 u-pt-20 u-pb-md-30 u-pb-lg-40 position-relative">
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
  );
};

export default Feedbacks;
