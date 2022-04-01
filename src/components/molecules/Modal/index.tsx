import React from 'react';
import Modal from 'react-modal';

import Icon, { IconName, IconSize } from 'components/atoms/Icon';
import mapModifiers from 'utils/functions';

interface Props {
  isOpen: boolean;
  isShowCloseButton?: boolean;
  iconName?: IconName;
  sizeIconClose?: IconSize;
  isShowDivider?: boolean;
  modifiers?: 'default' | 'video' | 'formRecruitment' | 'notify'; // add more modifiers
  handleClose?: () => void;
}

const CustomModal: React.FC<Props> = ({
  isOpen,
  children,
  iconName,
  isShowCloseButton,
  sizeIconClose,
  isShowDivider,
  modifiers,
  handleClose,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={handleClose}
    closeTimeoutMS={250}
    className={`${mapModifiers('o-modal', modifiers)}`}
    appElement={document.getElementById('root') as HTMLElement}
    ariaHideApp={false}
    portalClassName={mapModifiers('o-modal_portal', isOpen && 'open')}
    bodyOpenClassName="reactmodal-body-open"
    htmlOpenClassName="reactmodal-html-open"
  >
    <div className="o-modal_main">
      <div className="o-modal_wrapper">
        {isShowDivider && (<div className="o-modal_divider" />)}
        {isShowCloseButton && (
        <button type="button" className="o-modal_close" onClick={handleClose}>
          <Icon iconName={iconName || 'closeOrange'} size={sizeIconClose} />
        </button>
        )}
        <div className="o-modal_body">{children}</div>
      </div>
    </div>
  </Modal>
);

CustomModal.defaultProps = {
  handleClose: undefined,
  isShowCloseButton: true,
  modifiers: undefined,
  iconName: 'closeOrange',
  sizeIconClose: '24',
  isShowDivider: false,
};

export default CustomModal;
