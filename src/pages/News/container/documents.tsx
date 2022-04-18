import React, { useRef, useMemo } from 'react';

import useAnimation from '../hook/animation';

import ballon2 from 'assets/images/pages/news/ballon_2.png';
import leaf3 from 'assets/images/pages/news/leaf_3.png';
import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Image from 'components/atoms/Image';
import Card from 'components/organisms/Card';
import { CardNormalProps } from 'components/organisms/Card/Normal';
import useScrollAnimate from 'hooks/useScrollAnimation';
import { OverviewDocumentType } from 'services/overviews/types';
import { linkURL, getTimePastToCurrent } from 'utils/functions';

interface DocumentProps {
  documents?: OverviewDocumentType[];
}

const Documents: React.FC<DocumentProps> = ({ documents }) => {
  const leafRef = useRef<HTMLDivElement>(null);
  const ballonRef = useRef<HTMLDivElement>(null);
  const isScrollLeaf = useScrollAnimate(leafRef);
  const isScrollBallon = useScrollAnimate(ballonRef);
  const { animated, ballonAnimate, slideReverseAnimate } = useAnimation();
  const documentList = useMemo(() => {
    if (Array.isArray(documents)) {
      const cardNormals: CardNormalProps[] = documents.map((item) => ({
        thumbnail: item?.thumbnail || 'https://source.unsplash.com/random',
        title: item.title || '',
        href: linkURL(item.link),
        tag: item?.tag,
        dateTime: getTimePastToCurrent(item.publishedAt),
        target: '_blank',
        url: {
          text: 'Tải xuống',
          iconName: 'downloadOrange',
          animation: 'download',
        },
      }));
      return cardNormals;
    }
    return [];
  }, [documents]);
  return (
    <>
      <div className="s-documents">
        <animated.div
          style={isScrollLeaf ? slideReverseAnimate : {}}
          className="s-documents_leaf"
          ref={leafRef}
        >
          <Image src={leaf3} alt="ballon" ratio="1x1" />
        </animated.div>
        <animated.div
          style={isScrollBallon ? ballonAnimate : {}}
          className="s-documents_ballon"
          ref={ballonRef}
        >
          <Image src={ballon2} alt="ballon" ratio="359x247" />
        </animated.div>
        <Container>
          <FlatMore
            title={{
              text: 'Tài liệu khác',
              type: 'h4',
              modifiers: ['gradientGreen', '700', 's015', 'uppercase'],
            }}
            data={documentList}
            render={(item) => (
              <Card.Normal
                {...item}
              />
            )}
          />
        </Container>
      </div>
    </>
  );
};

Documents.defaultProps = {
  documents: [],
};

export default Documents;
