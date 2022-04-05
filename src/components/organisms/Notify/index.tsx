import React from 'react';

import Button from 'components/atoms/Button';
import Text from 'components/atoms/Text';
import Modal from 'components/molecules/Modal';

interface NotifyProps {
  isOpen?: boolean;
  handleConfirm?: () => void;
  title?: string;
  message?: string;
  btnText?: string;
}

const Notify: React.FC<NotifyProps> = ({
  isOpen,
  handleConfirm,
  title,
  message,
  btnText,
}) => (
  <Modal
    isOpen={!!isOpen}
    modifiers="notify"
    isHasClose={false}
  >
    <div className="o-notify">
      <div className="o-notify_content">
        {title && (
          <div className="o-notify_title">
            <Text
              type="div"
              modifiers={['20x32', 'black', '700', 'center']}
              content={title}
            />
          </div>
        )}
        {message && (
          <div className="o-notify_message">
            <Text type="div" modifiers={['16x24', 'black', '400', 'center']} content={message} />
          </div>
        )}
        <div className="o-notify_btn">
          <Button size="md" variant="primary-green" onClick={handleConfirm}>
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
  handleConfirm: undefined,
};

export default Notify;
