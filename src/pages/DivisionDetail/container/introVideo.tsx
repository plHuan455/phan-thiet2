import React, { useRef, useState } from 'react';

import useAnimation from '../hooks/animation';

import ballon from 'assets/images/introVideo/balloon.png';
import Container from 'common/Container';
import Image from 'components/atoms/Image';
import Player, { PlayerProps } from 'components/organisms/Player';

interface IntroPlayerProps extends PlayerProps{}

const IntroPlayer: React.FC<IntroPlayerProps> = (props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setPlay] = useState(false);
  return (
    <Player
      ref={videoRef}
      modifiers={['r10', 'shadow']}
      onClick={() => {
        if (videoRef?.current) {
          videoRef.current.play();
        }
        setPlay(true);
      }}
      onPause={() => setPlay(false)}
      onPlaying={() => setPlay(true)}
      isPlaying={isPlay}
      {...props}
    />
  );
};

const IntroVideo: React.FC = () => {
  const ballonRef = useRef<HTMLDivElement>(null);
  const { animated, ballonAnimate } = useAnimation({ ballonRef });

  return (
    <section className="u-mt-md-80 u-mt-48 u-mb-md-80 u-mb-48 t-introVideo">
      <animated.div className="t-introVideo_ballon" style={ballonAnimate} ref={ballonRef}>
        <Image src={ballon} alt="ballon" ratio="132x202" />
      </animated.div>
      <Container>
        <div className="t-introVideo_content">
          <IntroPlayer src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        </div>
      </Container>
    </section>
  );
};

export default IntroVideo;
