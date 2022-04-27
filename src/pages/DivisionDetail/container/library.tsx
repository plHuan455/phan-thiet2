/* eslint-disable camelcase */
import React, {
  useState, useEffect, useReducer, useRef, useMemo,
} from 'react';
import { useTranslation } from 'react-i18next';

import Container from 'common/Container';
import FlatList from 'common/FlatList';
import Arrow from 'components/atoms/Arrow';
import Heading from 'components/atoms/Heading';
import Icon from 'components/atoms/Icon';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import Card from 'components/organisms/Card';
import Tabs, { Tab } from 'components/organisms/Tabs';
import PopupImage from 'components/templates/PopupImage';
import PopupPlayer from 'components/templates/PopupPlayer';
import { useAsync } from 'hooks/useAsync';
import i18n from 'i18n';
import FUNCTIONS_LANGUAGE from 'i18n/functions';
import { CardImage } from 'pages/News/container/images';
import { getDocumentsService } from 'services/documents';
import { DocumentTypes } from 'services/documents/types';
import { getAllImagesService } from 'services/images';
import { ImageOnlyTypes } from 'services/images/types';
import { getNewsListService } from 'services/news';
import { NewsListTypes } from 'services/news/types';
import { SubdivisionLibraryTypes } from 'services/subdivision/types';
import { getVideosService } from 'services/videos';
import { VideoTypes } from 'services/videos/types';
import { useAppSelector } from 'store/hooks';
import CONSTANTS from 'utils/constants';
import {
  baseURL, getTimePastToCurrent, linkURL, redirectURL,
} from 'utils/functions';

interface LibraryProps {
  subDivisionId?: number;
  subDivisionName?: string;
  data?: SubdivisionLibraryTypes;
  color?: string;
}

interface LibraryState {
  isLoading?: boolean;
  news?: NewsListTypes[];
  documents?: DocumentTypes[];
  images?: ImageOnlyTypes[];
  videos?: VideoTypes[];
  isPopImageOpen?: boolean;
  currentImgIdx?: number;
  isPopPlayerOpen?: boolean;
  currVidSrc?: string;
  currVidType?: string;
}

interface ActionWithPayload {
  type: string;
  payload?: LibraryState;
}

const reducer = (state: LibraryState, action: ActionWithPayload) => {
  switch (action.type) {
    case 'start_loading':
      return { ...state, isLoading: true };
    case 'update_library':
      return { ...state, ...action.payload };
    case 'close_image_popup':
      return { ...state, isPopImageOpen: false };
    case 'close_player_popup':
      return { ...state, isPopPlayerOpen: false };
    default:
      return state;
  }
};

const Library: React.FC<LibraryProps> = ({
  data, subDivisionId, color, subDivisionName,
}) => {
  const { language } = i18n;
  const { t } = useTranslation();

  const staticAll = useAppSelector((state) => state.static.static);

  const slugPageNews = staticAll?.find(
    (e) => e.templateCode === CONSTANTS.TEMPLATE_CODE.NEW_IMAGE,
  )?.slug;

  const dummyData = useMemo(() => [
    {
      label: t('library.news'),
    },
    {
      label: t('library.images'),
    },
    {
      label: t('library.videos'),
    },
    {
      label: t('library.document'),
    },
  ], [t]);

  const settingRef = useRef({
    prevArrow: <Arrow.Prev />,
    nextArrow: <Arrow.Next />,
    customPaging() {
      return <span className="o-carousel_dot rect inherit" style={{ backgroundColor: 'var(--theme)' }} />;
    },
  });

  const [indexActive, setIndexActive] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    news: [],
    documents: [],
    images: [],
    videos: [],
    isLoading: false,
    isPopImageOpen: false,
    currentImgIdx: 0,
    isPopPlayerOpen: false,
    currVidSrc: '',
    currVidType: '',
  });

  const subDivisionRef = useRef(subDivisionId);

  const [libraryExecute] = useAsync(
    async () => {
      const temp: LibraryState = { ...state };
      if (subDivisionId !== -1) {
        const subdivision_id = subDivisionId?.toString();
        if (subDivisionId !== subDivisionRef.current) {
          subDivisionRef.current = subDivisionId;
          temp.news = [];
          temp.documents = [];
          temp.images = [];
          temp.videos = [];
        }
        dispatch({ type: 'start_loading' });
        if (indexActive === 0 && !temp.news?.length) {
          const res = await getNewsListService({ subdivision_id });
          temp.news = res.data;
        }
        if (indexActive === 1 && !temp.images?.length) {
          const res = await getAllImagesService({ subdivision_id });
          temp.images = res.data;
        }
        if (indexActive === 2 && !temp.videos?.length) {
          const res = await getVideosService({ subdivision_id });
          temp.videos = res.data;
        }
        if (indexActive === 3 && !temp.documents?.length) {
          const res = await getDocumentsService({ subdivision_id });
          temp.documents = res.data;
        }
        temp.isLoading = false;
      }
      return temp;
    },
    {
      onSuccess: (res) => {
        dispatch({ type: 'update_library', payload: res });
      },
    },
  );

  useEffect(() => {
    libraryExecute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subDivisionId, indexActive]);

  if (!data?.active) return null;

  return (
    <section
      className="s-library u-pt-md-80 u-pt-48 u-pb-md-80 u-pb-48"
      style={{ color: 'var(--theme)' }}
    >
      <Container>
        <Heading
          type="h2"
          modifiers={['s015', '400', 'inherit']}
          content={data?.title}
        />
        <Animate type="fadeInUp">
          <div className="s-library_wrapTab">
            <Tabs variableMutate={indexActive}>
              {dummyData.map((item, index) => (
                <Tab
                  key={`tab-${index.toString()}`}
                  label={item.label}
                  active={index === indexActive}
                  handleClick={() => setIndexActive(index)}
                />
              ))}
            </Tabs>
            <div className="d-lg-block d-none">
              <Link href={`${FUNCTIONS_LANGUAGE.languageURL(language)}${slugPageNews}?keyword=${subDivisionName}`} target="_self">
                <div className="animate animate-arrowSlide d-flex align-items-center">
                  <Text modifiers={['14x20', '400', 'copper']} content={t('button.more')} />
                  <div className="u-ml-8" />
                  <Icon iconName="arrowRightCopper" size="16" />
                </div>
              </Link>
            </div>
          </div>

          {state.isLoading && (
            <div className="u-pt-15 u-pb-15 d-flex justify-content-center">
              <Icon iconName="loadingInherit" />
            </div>
          )}

          {/* News */}
          {indexActive === 0 && !state.isLoading && (
            state.news && state.news.length > 0 ? (
              <FlatList
                data={state.news}
                settings={settingRef.current}
                render={(item) => (
                  <Card.Normal
                    thumbnail={baseURL(item.thumbnail)}
                    title={item.title}
                    href={redirectURL(CONSTANTS.PREFIX.NEWS, item.slug, language)}
                    tag={{
                      text: item?.subdivision?.name,
                      url: redirectURL(CONSTANTS.PREFIX.DIVISION,
                        item?.subdivision?.slug, language),
                    }}
                    dateTime={getTimePastToCurrent(item.publishedAt)}
                    url={{
                      text: t('button.more'),
                      iconName: 'arrowRightCopper',
                      animation: 'arrow',
                    }}
                  />
                )}
              />
            )
              : (
                <Text modifiers={['14x20', '400', 'inherit', 'center']}>
                  {t('general_not_found_data')}
                </Text>
              ))}

          {/* Images */}
          {indexActive === 1 && !state.isLoading && (
            state.images && state.images.length > 0 ? (
              <FlatList
                data={state.images}
                settings={settingRef.current}
                render={(item, itemIdx) => (
                  <CardImage
                    thumbnail={baseURL(item.path)}
                    handleClick={() => dispatch({ type: 'update_library', payload: { isPopImageOpen: true, currentImgIdx: itemIdx } })}
                  />
                )}
              />
            )
              : (
                <Text modifiers={['14x20', '400', 'inherit', 'center']}>
                  {t('general_not_found_data')}
                </Text>
              ))}

          {/* Videos */}
          {indexActive === 2 && !state.isLoading && (
            state.videos && state.videos.length > 0 ? (
              <FlatList
                data={state.videos}
                settings={settingRef.current}
                render={(item) => {
                  const isVidOutside = item.video?.includes('http://') || item.video?.includes('https://');
                  const vidUrl = isVidOutside ? item.video : baseURL(item.video);
                  return (
                    <Card.Player
                      thumbnail={baseURL(item.thumbnail)}
                      tag={{
                        text: item?.subdivision?.name,
                        url: redirectURL(CONSTANTS.PREFIX.DIVISION,
                          item?.subdivision?.slug, language),
                      }}
                      title={item.name}
                      dateTime={getTimePastToCurrent(item.createdAt)}
                      modifiers={['reverse', 'shadow']}
                      onClick={() => {
                        const res = {
                          isPopPlayerOpen: true,
                          currVidSrc: vidUrl,
                          currVidType: item.videoType,
                        };
                        dispatch({ type: 'update_library', payload: res });
                      }}
                    />
                  );
                }}
              />
            )
              : (
                <Text modifiers={['14x20', '400', 'inherit', 'center']}>
                  {t('general_not_found_data')}
                </Text>
              ))}

          {/* Documents */}
          {indexActive === 3 && !state.isLoading && (
            state.documents && state.documents.length > 0 ? (
              <FlatList
                data={state.documents}
                settings={settingRef.current}
                render={(item) => (
                  <Card.Normal
                    thumbnail={baseURL(item?.subdivision?.thumbnail)}
                    href={item.link.includes('http') ? item.link : linkURL(item.link)}
                    target="_blank"
                    title={item.name}
                    dateTime={getTimePastToCurrent(item.publishedAt)}
                    url={{
                      text: t('button.download'),
                      iconName: 'downloadOrange',
                      animation: 'download',
                    }}
                  />
                )}
              />
            )
              : (
                <Text modifiers={['14x20', '400', 'inherit', 'center']}>
                  {t('general_not_found_data')}
                </Text>
              ))}
        </Animate>
        <PopupImage
          isOpen={state.isPopImageOpen || false}
          handleClose={() => dispatch({ type: 'close_image_popup' })}
          currentImgIdx={state.currentImgIdx}
          dataImageList={state.images?.map((item) => baseURL(item.path)) || []}
        />
        <PopupPlayer
          isOpen={state.isPopPlayerOpen || false}
          handleClose={() => dispatch({ type: 'close_player_popup' })}
          videoType={state.currVidType || ''}
          src={state.currVidSrc || ''}
          theme={color}
        />
        <div className="d-flex justify-content-center d-lg-none u-mt-32">
          <Link href={`${FUNCTIONS_LANGUAGE.languageURL(language)}${slugPageNews}?keyword=${subDivisionName}`} target="_self">
            <div className="animate animate-arrowSlide d-flex align-items-center">
              <Text modifiers={['14x20', '400', 'copper']} content={t('button.more')} />
              <div className="u-ml-8" />
              <Icon iconName="arrowRightCopper" size="16" />
            </div>
          </Link>
        </div>
      </Container>
    </section>
  );
};

Library.defaultProps = {
  data: undefined,
  subDivisionId: -1,
  subDivisionName: undefined,
  color: undefined,
};

export default Library;
