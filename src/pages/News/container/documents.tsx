import React, { useRef, useMemo } from 'react';

import useAnimation from '../hook/animation';

import Section from './section';

import ballon2 from 'assets/images/pages/news/ballon_2.png';
import leaf3 from 'assets/images/pages/news/leaf_3.png';
import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Image from 'components/atoms/Image';
import Card from 'components/organisms/Card';
import { CardNormalProps } from 'components/organisms/Card/Normal';
import useScrollAnimate from 'hooks/useScrollAnimation';
import { OverviewDocumentType } from 'services/overviews/types';
import CONSTANTS from 'utils/constants';
import {
  linkURL, getTimePastToCurrent, getBlockData, baseString, baseURL,
} from 'utils/functions';

interface DocumentBlocks {
  title: string;
}

interface DocumentProps extends SectionBlocks {
  documents?: OverviewDocumentType[];
}

const Documents: React.FC<DocumentProps> = ({ documents, blocks }) => {
  const documentBlock = getBlockData<DocumentBlocks>('document', blocks);
  const leafRef = useRef<HTMLDivElement>(null);
  const ballonRef = useRef<HTMLDivElement>(null);
  const isScrollLeaf = useScrollAnimate(leafRef);
  const isScrollBallon = useScrollAnimate(ballonRef);
  const {
    animated, ballonAnimate, slideReverseAnimate,
  } = useAnimation();
  const documentList = useMemo(() => {
    if (Array.isArray(documents)) {
      const cardNormals: CardNormalProps[] = documents.map((item) => ({
        thumbnail: baseURL(item?.thumbnail),
        title: item.title || '',
        href: linkURL(item.link),
        tag: {
          text: item.subdivision?.name,
          url: `/${CONSTANTS.PREFIX.DIVISION.VI}/${item.slug}`,
        },
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

  if (!documents?.length) return null;

  return (
    <Section>
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
              text: baseString(documentBlock?.title),
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
    </Section>
  );
};

Documents.defaultProps = {
  documents: [],
};

export default React.memo(Documents);
