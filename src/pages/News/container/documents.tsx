import React, { useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

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
import { OverviewDocumentType, PaginationOverview } from 'services/overviews/types';
import CONSTANTS from 'utils/constants';
import {
  linkURL, getTimePastToCurrent, getBlockData, baseString, baseURL,
} from 'utils/functions';

interface DocumentBlocks {
  title: string;
}

interface DocumentProps extends SectionBlocks {
  documents?: PaginationOverview<OverviewDocumentType>;
}

const Documents: React.FC<DocumentProps> = ({ documents, blocks }) => {
  const { t } = useTranslation();
  const documentBlock = getBlockData<DocumentBlocks>('document', blocks);
  const leafRef = useRef<HTMLDivElement>(null);
  const ballonRef = useRef<HTMLDivElement>(null);
  const isScrollLeaf = useScrollAnimate(leafRef);
  const isScrollBallon = useScrollAnimate(ballonRef);
  const {
    animated, ballonAnimate, slideReverseAnimate,
  } = useAnimation();

  const documentList : CardNormalProps[] = useMemo(() => documents?.data.map((item) => ({
    thumbnail: baseURL(item?.subdivision?.thumbnail),
    title: item.name,
    href: linkURL(item.link),
    tag: {
      text: item.subdivision?.name,
      url: `/${CONSTANTS.PREFIX.DIVISION.VI}/${item.slug}`,
    },
    dateTime: getTimePastToCurrent(item.publishedAt),
    target: '_blank',
    url: {
      text: t('button.download'),
      iconName: 'downloadOrange',
      animation: 'download',
    },
  })) || [], [documents?.data, t]);

  if (!documents?.data.length) return null;

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
  documents: undefined,
};

export default React.memo(Documents);
