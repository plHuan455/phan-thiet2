import React, { useMemo, useReducer } from 'react';

import Section from './section';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Animate from 'components/organisms/Animate';
import Card from 'components/organisms/Card';
import PopupPlayer from 'components/templates/PopupPlayer';
import { OverviewVideoType } from 'services/overviews/types';
import CONSTANTS from 'utils/constants';
import {
  baseURL, linkURL, getTimePastToCurrent, getBlockData, baseString,
} from 'utils/functions';

interface VideoBlocks {
  title: string;
}

interface VideoProps extends SectionBlocks {
  videos?: OverviewVideoType[];
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

const Videos: React.FC<VideoProps> = ({ videos, blocks }) => {
  const videoBlock = getBlockData<VideoBlocks>('video', blocks);

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

  const videoList = useMemo(() => {
    if (Array.isArray(videos)) {
      return videos.map((item) => {
        const isVidOutside = item.video.includes('http://') || item.video.includes('https://');
        const vidUrl = isVidOutside ? item.video : linkURL(item.video);
        const vidData = {
          thumbnail: baseURL(item?.thumbnail),
          title: item.name,
          tag: {
            text: item.subdivision?.name,
            url: `/${CONSTANTS.PREFIX.DIVISION.VI}/${item.slug}`,
          },
          datetime: item?.publishedAt ? getTimePastToCurrent(item.publishedAt) : undefined,
          onClick: () => {
            updatePlayerState({
              isOpen: true,
              vidSrc: vidUrl,
              vidType: item.videoType,
            });
          },
        };
        return vidData;
      });
    }
    return [];
  }, [videos]);

  if (!videos?.length) return null;

  return (
    <Animate type="fadeInUp">
      <Section>
        <div className="s-videos">
          <Container>
            <FlatMore
              title={{
                text: baseString(videoBlock?.title),
                type: 'h4',
                modifiers: ['gradientGreen', '700', 's015', 'uppercase'],
              }}
              data={videoList}
              render={(item) => (
                <Card.Player
                  {...item}
                />
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
    </Animate>
  );
};

Videos.defaultProps = {
  videos: [],
};

export default React.memo(Videos);
