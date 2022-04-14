import React from 'react';

import Notify from 'components/organisms/Notify';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { updateNotifyProps } from 'store/notify';

const NotifyWrapper: React.FC = () => {
  const notifyProps = useAppSelector((state) => state.notify.props);
  const dispatch = useAppDispatch();
  const closeNotify = () => {
    dispatch(updateNotifyProps({ isOpen: false }));
  };
  return notifyProps ? <Notify {...notifyProps} onClose={closeNotify} /> : <></>;
};

export default NotifyWrapper;
