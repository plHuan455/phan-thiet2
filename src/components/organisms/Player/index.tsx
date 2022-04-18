/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { forwardRef } from 'react';

import { IconName } from 'components/atoms/Icon';
import mapModifiers from 'utils/functions';

// import mapModifiers from 'utils/functions';

export interface PlayerProps {
  id?: string;
  src: string;
  isLoop?: boolean;
  isMuted?: boolean;
  autoplay?: boolean;
  controls?: boolean;
  modifiers?: ('shadow' | 'r10')[];
  iconPlayer?: IconName;
  isPlaying?: boolean;
  isYoutube?: boolean;
  onEnded?: () => void;
  onTimeUpdate?: (time: number) => void;
  onWaiting?: () => void;
  onPlaying?: () => void;
  onLoaded?: () => void;
  onClick?: () => void;
  onPause?: () => void;
}

const Player = forwardRef<HTMLVideoElement, PlayerProps>(
  (
    {
      src,
      autoplay,
      id,
      isLoop,
      isMuted,
      controls = true,
      modifiers,
      // iconPlayer,
      isPlaying,
      isYoutube,
      onEnded,
      onTimeUpdate,
      onWaiting,
      onPlaying,
      onLoaded,
      onClick,
      onPause,
    },
    ref,
  ) => (
    <div
      className={mapModifiers('o-player', isPlaying && 'playing', modifiers)}
    >
      {isYoutube ? (
        <div
          className="o-player_iframe"
          dangerouslySetInnerHTML={{ __html: src }}
        />
      ) : (
        <>
          <video
            id={id}
            ref={ref}
            controls={controls}
            playsInline
            loop={isLoop}
            muted={isMuted}
            onEnded={onEnded}
            autoPlay={autoplay}
            onTimeUpdate={(event) => onTimeUpdate && onTimeUpdate(event.currentTarget.currentTime)}
            onWaiting={onWaiting}
            onPlaying={onPlaying}
            onLoadedMetadata={onLoaded}
            onPause={onPause}
          >
            <source src={src} type="video/mp4" />
            {/* <source src={src} type="video/wav" /> */}
          </video>
          <div className="o-player_execute" onClick={onClick}>
            <div className="o-player_play">
              <div className="o-player_icon">
                <div className="o-player_triangle" />
              </div>
            </div>

            {/* <div className="o-player_play">
              <svg width="45" height="45" viewBox="-50 -50 300 300">
                <polygon className="o-player_icon" strokeLinejoin="round"
                 points="100,0 0,200 200,200" />
              </svg>
            </div> */}
          </div>
        </>
      )}
    </div>
  ),
);

export default Player;
