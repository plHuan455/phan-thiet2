/* eslint-disable jsx-a11y/media-has-caption */
import React, { forwardRef } from 'react';

import Icon, { IconName } from 'components/atoms/Icon';
import mapModifiers from 'utils/functions';

// import mapModifiers from 'utils/functions';

export interface PlayerProps {
  id?: string;
  src: string;
  isLoop?: boolean;
  isMuted?: boolean;
  autoplay?: boolean;
  controls?: boolean;
  modifiers?: ('shadow' | 'r10')[]
  iconPlayer?: IconName;
  isPlaying?: boolean;
  onEnded?: () => void;
  onTimeUpdate?: (time: number) => void;
  onWaiting?: () => void;
  onPlaying?: () => void;
  onLoaded?: () => void;
  onClick?: () => void;
  onPause?: () => void;
}

const Player = forwardRef<HTMLVideoElement, PlayerProps>(({
  src,
  autoplay,
  id,
  isLoop,
  isMuted,
  controls = true,
  modifiers,
  iconPlayer,
  isPlaying,
  onEnded,
  onTimeUpdate,
  onWaiting,
  onPlaying,
  onLoaded,
  onClick,
  onPause,
}, ref) => (
  <div className={mapModifiers('o-player', isPlaying && 'playing', modifiers)}>
    <video
      id={id}
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
      }}
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
      {iconPlayer && (
      <Icon iconName={iconPlayer} size="80" />
      )}
    </div>
  </div>
));

export default Player;
