/* eslint-disable react/default-props-match-prop-types */
import React from 'react';

import Button from 'components/atoms/Button';
import Text from 'components/atoms/Text';
import Modal from 'components/molecules/Modal';

export interface NotifyProps {
  isOpen?: boolean;
  title?: string;
  message?: string;
  btnText?: string;
  onClose?: () => void;
}

const Notify: React.FC<NotifyProps> = ({
  isOpen,
  title,
  message,
  btnText,
  onClose,
}) => (
  <Modal
    isOpen={!!isOpen}
    modifiers="notify"
    icon={{
      name: 'closeGreen',
      size: '24',
    }}
    handleClose={onClose}
  >
    <div className="o-notify">
      <div className="o-notify_content">
        {title && (
          <div className="o-notify_title">
            <Text
              type="div"
              modifiers={['20x32', 'black', '700', 'center', 's015']}
              content={title}
            />
          </div>
        )}
        {message && (
          <div className="o-notify_message">
            <Text type="div" modifiers={['16x28', 'black', '400', 'center']} content={message} />
          </div>
        )}
        <div className="o-notify_btn">
          <Button size="md" variant="primary-green" onClick={onClose}>
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  </Modal>
);

Notify.defaultProps = {
  isOpen: undefined,
  title: undefined,
  message: undefined,
  btnText: undefined,
  onClose: undefined,
};

export default Notify;
