/* eslint-disable react-hooks/rules-of-hooks */
import { Story, Meta } from '@storybook/react';
import React, { useMemo, useRef, useState } from 'react';

import Player from '.';

export default {
  title: 'Components/organisms/Player',
  component: Player,
  argTypes: {},
} as Meta;
export interface MyCustomCSS extends React.CSSProperties {
  '--theme': string;
}

export const normal: Story = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setPlay] = useState(false);

  const styles = useMemo((): MyCustomCSS => ({
    '--theme': 'linear-gradient(180deg, rgb(0, 168, 168) 0%, rgb(2, 116, 127) 100%)',
  }), []);

  return (
    <div style={{ padding: 20, maxWidth: 974, ...styles }}>
      <Player
        ref={videoRef}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        modifiers={['r10', 'shadow']}
        iconPlayer="playerPersian"
        onClick={() => {
          if (videoRef?.current) {
            videoRef.current.play();
          }
          setPlay(true);
        }}
        onPause={() => setPlay(false)}
        isPlaying={isPlay}
      />
    </div>
  );
};
