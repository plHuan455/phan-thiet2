import React, { useRef, useState } from 'react';

import Icon from 'components/atoms/Icon';
import useWindowScroll from 'hooks/useWindowScroll';
import i18n from 'i18n';
import { useAppSelector } from 'store/hooks';
import mapModifiers from 'utils/functions';
import initFacebookSdk from 'utils/sdkFacebook';

const FloatingButton: React.FC = () => {
  const dataSystem = useAppSelector((state) => state.system.data);
  const [isShow, setIsShow] = useState(false);
  const { language } = i18n;
  const isFirst = useRef(true);

  useWindowScroll(() => {
    if (window.pageYOffset > 200) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  });

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useWindowScroll(() => {
    if (dataSystem?.messengerId && isFirst.current && window.pageYOffset > 100) {
      initFacebookSdk(language, dataSystem.messengerId);
      isFirst.current = false;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <div className="floatingButton">
      <div id="fb-root" />
      <div id="fb-customer-chat" className="fb-customerchat" />
      <div className={mapModifiers('floatingButton_scrollTop', isShow && 'show')} onClick={handleScrollTop}>
        <Icon iconName="arrowUp" size="20" />
      </div>
    </div>
  );
};

FloatingButton.defaultProps = {
  handleScrollTop: undefined,
};
export default FloatingButton;
