import React, {
  useCallback, useEffect, useMemo, useReducer, useState,
} from 'react';

import settings from '../hook/settings';

import Section from './section';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import { CardPlayerProps } from 'components/organisms/Card/Player';
import PopupPlayer from 'components/templates/PopupPlayer';
import { useAsync } from 'hooks/useAsync';
import useScrollInfinite from 'hooks/useScrollInfinite';
import i18n from 'i18n';
import { getOverviewListService } from 'services/overviews';
import { OverviewVideoType, PaginationOverview } from 'services/overviews/types';
import CONSTANTS from 'utils/constants';
import {
  baseURL, linkURL, getTimePastToCurrent, getBlockData, baseString, redirectURL,
} from 'utils/functions';

interface VideoBlocks {
  title: string;
}

interface VideoProps extends SectionBlocks {
  videos?: PaginationOverview<OverviewVideoType>;
  keyword?: string;
}

interface PlayerState {
  isOpen?: boolean;
  vidSrc?: string;
  vidType?: string;
}

interface ActionWithPayload {
  type: string;
  payload: PlayerState;
}

const reducer = (state: PlayerState, action: ActionWithPayload) => {
  switch (action.type) {
    case 'update_player':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

type Meta = {
  page: number;
  lastPage: number;
}

const Videos: React.FC<VideoProps> = ({ videos, blocks, keyword }) => {
  const videoBlock = getBlockData<VideoBlocks>('video', blocks);
  const { language } = i18n;

  const [meta, setMeta] = useState<Meta>({ page: 1, lastPage: 1 });
  const [dataLoadMore, setDataLoadMore] = useState<CardPlayerProps[]>([]);

  const [state, dispatch] = useReducer(reducer, {
    isOpen: false,
    vidSrc: '',
    vidType: '1',
  });

  const updatePlayerState = (payload: PlayerState) => {
    dispatch({
      type: 'update_player',
      payload,
    });
  };

  const formatData = useCallback((item:OverviewVideoType):CardPlayerProps => {
    const isVidOutside = item.video.includes('http://') || item.video.includes('https://');
    const vidUrl = isVidOutside ? item.video : linkURL(item.video);

    const vidData = {
      thumbnail: baseURL(item?.thumbnail),
      title: item.name,
      tag: {
        text: item.subdivision?.name,
        url: redirectURL(CONSTANTS.PREFIX.DIVISION, item.slug, language),
      },
      dateTime: getTimePastToCurrent(item.publishedAt),
      onClick: () => {
        updatePlayerState({
          isOpen: true,
          vidSrc: vidUrl,
          vidType: item.videoType,
        });
      },
    };
    return vidData;
  }, [language]);

  const [videoExecute, videoState] = useAsync(getOverviewListService, {
    onSuccess: (res) => {
      const result = res.videos.data.map(formatData);
      setMeta((prev) => ({ ...prev, page: res.videos.currentPage }));
      setDataLoadMore(
        (prev) => ([...(prev || []), ...result]),
      );
    },
  });

  const dataInitial = useMemo(
    () => videos?.data.map(formatData) || [],
    [formatData, videos?.data],
  );

  const videoList = useMemo(() => [...dataInitial, ...dataLoadMore], [dataInitial, dataLoadMore]);

  useEffect(() => {
    setDataLoadMore([]);
    if (videos) {
      setMeta({
        page: videos.currentPage,
        lastPage: videos.lastPage,
      });
    }
  }, [videos]);

  const handleLoadMore = useCallback(() => {
    if (!videoState.loading
      && meta.page < meta.lastPage) {
      videoExecute({
        limit: 6,
        page: meta.page + 1,
        keyword,
        type: 'video',
      });
    }
  }, [keyword, meta.lastPage, meta.page, videoExecute, videoState.loading]);

  const { setNode } = useScrollInfinite(handleLoadMore);

  if (!videos?.total) return null;

  return (
    <Section>
      <div className={`s-videos ${videoState.loading ? 'loading-block' : ''}`}>
        <Container>
          <FlatMore
            settings={{
              ...settings(),
            }}
            title={{
              text: baseString(videoBlock?.title),
              type: 'h4',
              modifiers: ['gradientGreen', '700', 's015', 'uppercase'],
            }}
            data={videoList}
            render={(item, itemIdx) => (
              <Card.LoadMore
                ref={(ref) => (itemIdx === videoList.length - 1 ? setNode(ref) : undefined)}
                loading={itemIdx === videoList.length - 1 && videoState.loading}
              >
                <Card.Player
                  {...item}
                />
              </Card.LoadMore>
            )}
          />
        </Container>
        <PopupPlayer
          isOpen={state.isOpen || false}
          handleClose={() => updatePlayerState({ isOpen: false })}
          videoType={state.vidType || ''}
          src={state.vidSrc || ''}
          theme="linear-gradient(180deg, #00a8a8 0%, #02747f 100%)"
        />
      </div>
    </Section>
  );
};

Videos.defaultProps = {
  videos: undefined,
  keyword: undefined,
};

export default React.memo(Videos);
