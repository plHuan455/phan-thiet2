import React from 'react';
import Modal from 'react-modal';

import Icon, { IconName, IconSize } from 'components/atoms/Icon';
import mapModifiers from 'utils/functions';

interface Props {
  isOpen: boolean;
  icon?: {
    name: IconName;
    size?: IconSize;
  };
  modifiers?: 'notify' | 'image' | 'player'; // add more modifiers
  handleClose?: () => void;
}

const CustomModal: React.FC<Props> = ({
  isOpen,
  children,
  icon,
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
        {icon && (
          <button type="button" className="o-modal_close" onClick={handleClose}>
            <Icon iconName={icon.name || 'closeOrange'} size={icon.size} />
          </button>
        )}
        <div className="o-modal_body">{children}</div>
      </div>
    </div>
  </Modal>
);

CustomModal.defaultProps = {
  handleClose: undefined,
  modifiers: undefined,
  icon: {
    name: 'closeOrange',
    size: '24',
  },
};

export default CustomModal;
