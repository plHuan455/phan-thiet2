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
              <div className="o-player_icon" />
            </div>

            <svg
              style={{ visibility: 'hidden', position: 'absolute' }}
              width="0"
              height="0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
            >
              <defs>
                <filter id="goo">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                  />
                  <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
              </defs>
            </svg>
            {/* {iconPlayer && <Icon iconName={iconPlayer} size="80" />} */}
          </div>
        </>
      )}
    </div>
  ),
);

export default Player;
