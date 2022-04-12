import React, { useMemo } from 'react';

import leaf from 'assets/images/pages/home/feedbacks/leaf.png';
import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Image from 'components/atoms/Image';
import Card from 'components/organisms/Card';
import { baseURL, getBlockData } from 'utils/functions';

interface FeedbackItemProps {
  description?: string;
  image?: string;
  name?: string;
  position?: string;
}
interface FeedbackProps {
  titleSection: string;
  link?: { url?: string; text?: string; target?: string };
  items?: FeedbackItemProps[];
}
const Feedbacks: React.FC<SectionBlocks> = ({ blocks }) => {
  const feedbackBlock = getBlockData<FeedbackProps>(
    'customer_experience',
    blocks,
  );

  const feedbackData = useMemo(
    () => feedbackBlock?.items?.map((val) => ({
      comment: val.description || '',
      imgSrc: baseURL(val.image) || '',
      job: val?.position || '',
      name: val.name || '',
    })),
    [feedbackBlock],
  );
  return (
    <section className="u-pt-md-80 u-pb-48 u-pt-48 u-pb-md-80 position-relative">
      <div className="s-feedbacks_leaf">
        <div className="s-feedbacks_leaf_layer">
          <Image src={leaf} alt="leaf" />
        </div>
      </div>
      <Container>
        <FlatMore
          title={{
            text: feedbackBlock?.titleSection || '',
            type: 'h4',
            modifiers: ['gradientGreen', '700', 's015'],
          }}
          link={{
            text: feedbackBlock?.link?.text || 'Xem tất cả',
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
