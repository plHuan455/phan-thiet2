import React, { useRef, useState } from 'react';

import useAnimation from '../hooks/animation';

import ballon from 'assets/images/introVideo/balloon.png';
import Container from 'common/Container';
import Image from 'components/atoms/Image';
import Player from 'components/organisms/Player';

const IntroVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setPlay] = useState(false);
  const ballonRef = useRef<HTMLDivElement>(null);
  const { animated, ballonAnimate } = useAnimation({ ballonRef });

  return (
    <section className="u-mt-md-80 u-mt-48 u-mb-md-80 u-mb-48 t-introVideo">
      <animated.div className="t-introVideo_ballon" style={ballonAnimate} ref={ballonRef}>
        <Image src={ballon} alt="ballon" ratio="132x202" />
      </animated.div>
      <Container>
        <div className="t-introVideo_content">
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
      </Container>
    </section>
  );
};

export default IntroVideo;
