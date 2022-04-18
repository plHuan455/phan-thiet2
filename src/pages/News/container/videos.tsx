import React, { useMemo, useReducer } from 'react';

import Container from 'common/Container';
import FlatMore from 'common/FlatMore';
import Card from 'components/organisms/Card';
import PopupPlayer from 'components/templates/PopupPlayer';
import { OverviewVideoType } from 'services/overviews/types';
import { baseURL, linkURL, getTimePastToCurrent } from 'utils/functions';

interface VideoProps {
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

const Videos: React.FC<VideoProps> = ({ videos }) => {
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
          thumbnail: baseURL(item?.thumbnail) || 'https://source.unsplash.com/random',
          title: item.name,
          tag: item?.tag,
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
  return (
    <div className="s-videos">
      <Container>
        <FlatMore
          title={{
            text: 'VIDEO',
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
      />
    </div>
  );
};

Videos.defaultProps = {
  videos: [],
};

export default Videos;
