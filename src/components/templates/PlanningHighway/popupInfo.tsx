import React from 'react';

import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Modal from 'components/molecules/Modal';

export interface PopupInfoProps {
  isOpen?: boolean;
  handleClose?: () => void;
  imgSrc?: string;
  content?: string;
}

const PopupInfo:React.FC<PopupInfoProps> = ({
  isOpen,
  handleClose,
  imgSrc,
  content,
}) => (
  <Modal
    isOpen={!!isOpen}
    icon={{
      name: 'closeGreen',
      size: '24',
    }}
    handleClose={handleClose}
    modifiers="notify"
  >
    <div className="o-popupInfo">
      {imgSrc && (
        <div className="o-popupInfo_image u-mb-24">
          <Image src={imgSrc} ratio="262x147" size="contain" alt="image" />
        </div>
      )}
      {content && (
        <Text type="div" modifiers={['black', '16x28']} content={content} />
      )}
    </div>
  </Modal>
);

export default PopupInfo;
