import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';

import CustomModal from 'components/molecules/Modal';
import Player, { PlayerProps } from 'components/organisms/Player';
import { youtubeControlIframe, youtubeParser } from 'utils/functions';

interface MyCustomCSS extends React.CSSProperties {
  '--theme'?: string;
}
interface PopupPlayerProps extends PlayerProps{
  isOpen: boolean;
  videoType: string;
  theme?: string;
  handleClose?: () => void;
}

const PopupPlayer: React.FC<PopupPlayerProps> = ({
  isOpen,
  src,
  theme,
  videoType,
  handleClose,
  ...rest
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setPlay] = useState(false);
  const [videoSrc, setVideoSrc] = useState('');

  const styles = useMemo((): MyCustomCSS => ({
    '--theme': theme,
  }), [theme]);

  useEffect(() => {
    if (!src || !videoType) return;
    if (videoType === '2' && youtubeParser(src)) {
      const iframe = youtubeControlIframe(src);
      // eslint-disable-next-line consistent-return
      return setVideoSrc(iframe);
    }
    setVideoSrc(src);
  }, [src, videoType]);

  useEffect(() => () => setPlay(false), [isOpen]);

  return (
    <CustomModal
      isOpen={isOpen}
      handleClose={handleClose}
      modifiers="player"
      icon={{
        name: 'closeWhite',
        size: '32',
      }}
    >
      <div className="t-popupPlayer" style={styles}>
        <Player
          ref={videoRef}
          modifiers={['shadow']}
          onPlaying={() => setPlay(true)}
          onClick={() => {
            if (videoRef?.current) {
              videoRef.current.play();
            }
            setPlay(true);
          }}
          onPause={() => setPlay(false)}
          isPlaying={isPlay}
          isYoutube={videoType === '2' && typeof youtubeParser(src) === 'string'}
          src={videoSrc}
          {...rest}
        />
      </div>
    </CustomModal>
  );
};

PopupPlayer.defaultProps = {
  handleClose: undefined,
  theme: undefined,
};

export default PopupPlayer;
