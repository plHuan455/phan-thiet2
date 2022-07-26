import React, { useMemo, useRef, useState } from 'react';

import useAnimation from '../hooks/animation';

import layer from 'assets/images/introVideo/background-blue.png';
import ballon from 'assets/images/introVideo/balloon.png';
import Container from 'common/Container';
import Image from 'components/atoms/Image';
import Animate from 'components/organisms/Animate';
import Player, { PlayerProps } from 'components/organisms/Player';
import { SubdivisionVideoTypes } from 'services/subdivision/types';
import { baseString, baseURL, youtubeControlIframe } from 'utils/functions';

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
    <section className="u-pt-lg-80 u-pt-md-60 u-pt-40 u-pb-lg-40 u-pb-md-30 u-pb-20 s-introVideo">
      <animated.div className="s-introVideo_ballon" style={ballonAnimate} ref={ballonRef}>
        <Image src={ballon} alt="ballon" ratio="132x202" />
      </animated.div>
      <div className="s-introVideo_layer">
        <Image src={layer} alt="ballon" ratio="1366x688" />
      </div>
      <Container>
        <Animate extendClassName="s-introVideo_content" type="fadeInUp">
          <IntroPlayer
            isYoutube={isYoutube}
            src={isYoutube ? youtubeControlIframe(link, true) : baseURL(link)}
            autoplay
            isMuted
          />
        </Animate>
      </Container>
    </section>
  );
};

IntroVideo.defaultProps = {
  data: undefined,
};

export default IntroVideo;
