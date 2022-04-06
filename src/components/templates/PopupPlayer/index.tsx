import React, { useRef, useState } from 'react';

import CustomModal from 'components/molecules/Modal';
import Player, { PlayerProps } from 'components/organisms/Player';

interface PopupPlayerProps extends PlayerProps {
  isOpen: boolean
  handleClose?: () => void;
}

const PopupPlayer: React.FC<PopupPlayerProps> = ({
  isOpen,
  handleClose,
  ...rest
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setPlay] = useState(false);
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
      <div className="t-popupPlayer">
        <Player
          ref={videoRef}
          modifiers={['shadow']}
          iconPlayer="playerPersian"
          onClick={() => {
            if (videoRef?.current) {
              videoRef.current.play();
            }
            setPlay(true);
          }}
          onPause={() => setPlay(false)}
          isPlaying={isPlay}
          {...rest}
        />
      </div>
    </CustomModal>
  );
};

PopupPlayer.defaultProps = {
  handleClose: undefined,
};

export default PopupPlayer;
