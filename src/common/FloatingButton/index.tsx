import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    if (dataSystem?.messengerId) {
      initFacebookSdk(language, dataSystem.messengerId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSystem]);

  return (
    <div className="floatingButton">
      <div id="fb-root" />
      <div id="fb-customer-chat" className="fb-customerchat" />
      <div className={mapModifiers('floatingButton_scrollTop', isShow && 'show')} onClick={handleScrollTop}>
        <Icon iconName="arrowUp" size="24" />
      </div>
    </div>
  );
};

FloatingButton.defaultProps = {
  handleScrollTop: undefined,
};
export default FloatingButton;
