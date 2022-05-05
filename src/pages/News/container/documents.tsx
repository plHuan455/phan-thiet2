import React, {
  useRef, useMemo, useState, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';

import useAnimation from '../hook/animation';
import settings from '../hook/settings';

import Section from './section';

import ballon2 from 'assets/images/pages/news/ballon_2.png';
import leaf3 from 'assets/images/pages/news/leaf_3.png';
import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Image from 'components/atoms/Image';
import Card from 'components/organisms/Card';
import { CardNormalProps } from 'components/organisms/Card/Normal';
import { useAsync } from 'hooks/useAsync';
import useScrollAnimate from 'hooks/useScrollAnimation';
import useScrollInfinite from 'hooks/useScrollInfinite';
import i18n from 'i18n';
import { getOverviewListService } from 'services/overviews';
import { OverviewDocumentType, PaginationOverview } from 'services/overviews/types';
import CONSTANTS from 'utils/constants';
import {
  linkURL, getTimePastToCurrent, getBlockData, baseString, baseURL, redirectURL,
} from 'utils/functions';

interface DocumentBlocks {
  title: string;
}

interface DocumentProps extends SectionBlocks {
  documents?: PaginationOverview<OverviewDocumentType>;
  keyword?: string;
}

type Meta = {
  page: number;
  lastPage: number;
}

const Documents: React.FC<DocumentProps> = ({ documents, blocks, keyword }) => {
  const { t } = useTranslation();
  const { language } = i18n;
  const documentBlock = getBlockData<DocumentBlocks>('document', blocks);
  const leafRef = useRef<HTMLDivElement>(null);
  const ballonRef = useRef<HTMLDivElement>(null);
  const isScrollLeaf = useScrollAnimate(leafRef);
  const isScrollBallon = useScrollAnimate(ballonRef);
  const {
    animated, ballonAnimate, slideReverseAnimate,
  } = useAnimation();

  const [meta, setMeta] = useState<Meta>({ page: 1, lastPage: 1 });
  const [dataLoadMore, setDataLoadMore] = useState<CardNormalProps[]>([]);

  const formatData = useCallback((item:OverviewDocumentType):CardNormalProps => ({
    thumbnail: baseURL(item?.subdivision?.thumbnail),
    title: item.name,
    href: linkURL(item.link),
    tag: {
      text: item?.subdivision?.name,
      url: redirectURL(CONSTANTS.PREFIX.DIVISION, item?.subdivision?.slug, language),
    },
    dateTime: getTimePastToCurrent(item.publishedAt),
    target: '_blank',
    url: {
      text: t('button.download'),
      iconName: 'downloadOrange',
      animation: 'download',
    },
  }), [language, t]);

  const [documentExecute, documentState] = useAsync(getOverviewListService, {
    onSuccess: (res) => {
      const result = res.documents.data.map(formatData);
      setMeta((prev) => ({ ...prev, page: res.documents.currentPage }));
      setDataLoadMore(
        (prev) => ([...(prev || []), ...result]),
      );
    },
  });

  const dataInitial = useMemo(
    () => documents?.data.map(formatData) || [],
    [formatData, documents?.data],
  );

  const documentList = useMemo(
    () => [...dataInitial, ...dataLoadMore], [dataInitial, dataLoadMore],
  );

  useEffect(() => {
    setDataLoadMore([]);
    if (documents) {
      setMeta({
        page: documents.currentPage,
        lastPage: documents.lastPage,
      });
    }
  }, [documents]);

  const handleLoadMore = useCallback(() => {
    if (!documentState.loading
      && meta.page < meta.lastPage) {
      documentExecute({
        limit: 6,
        page: meta.page + 1,
        keyword,
        type: 'document',
      });
    }
  }, [documentExecute, documentState.loading, keyword, meta]);

  const { setNode } = useScrollInfinite(handleLoadMore);

  if (!documents?.total) return null;

  return (
    <Section>
      <div className={`s-documents ${documentState.loading ? 'loading-block' : ''}`}>
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
            settings={{
              ...settings(),
            }}
            title={{
              text: baseString(documentBlock?.title),
              type: 'h4',
              modifiers: ['gradientGreen', '700', 's015', 'uppercase'],
            }}
            data={documentList}
            render={(item, itemIdx) => (
              <Card.LoadMore
                ref={(ref) => (itemIdx === documentList.length - 1 ? setNode(ref) : undefined)}
                loading={itemIdx === documentList.length - 1 && documentState.loading}
              >
                <Card.Normal
                  {...item}
                />
              </Card.LoadMore>
            )}
          />
        </Container>
      </div>
    </Section>
  );
};

Documents.defaultProps = {
  documents: undefined,
  keyword: undefined,
};

export default React.memo(Documents);
