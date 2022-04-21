import React, { useMemo, useRef, useState } from 'react';

import useAnimation from '../hooks/animation';

import layer from 'assets/images/introVideo/background-blue.png';
import ballon from 'assets/images/introVideo/balloon.png';
import Container from 'common/Container';
import Image from 'components/atoms/Image';
import Player, { PlayerProps } from 'components/organisms/Player';
import { SubdivisionVideoTypes } from 'services/subdivision/types';
import { baseString, youtubeControlIframe } from 'utils/functions';

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

interface IntroVideoProps {
  data?: SubdivisionVideoTypes;
}

const IntroVideo: React.FC<IntroVideoProps> = ({ data }) => {
  const ballonRef = useRef<HTMLDivElement>(null);
  const { animated, ballonAnimate } = useAnimation({ ballonRef });
  const link = useMemo(() => baseString(data?.link), [data]);
  const isYoutube = useMemo(() => link.includes('youtube'), [link]);

  if (!data?.active || !data?.link) return null;

  return (
    <section className="u-pt-md-80 u-pt-48 u-pb-md-61 u-pb-32 s-introVideo">
      <animated.div className="s-introVideo_ballon" style={ballonAnimate} ref={ballonRef}>
        <Image src={ballon} alt="ballon" ratio="132x202" />
      </animated.div>
      <div className="s-introVideo_layer">
        <Image src={layer} alt="ballon" ratio="1366x688" />
      </div>
      <Container>
        <div className="s-introVideo_content">
          <IntroPlayer
            isYoutube={isYoutube}
            src={isYoutube ? youtubeControlIframe(link) : link}
          />
        </div>
      </Container>
    </section>
  );
};

IntroVideo.defaultProps = {
  data: undefined,
};

export default IntroVideo;
