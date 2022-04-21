import React, { useRef, useState } from 'react';

import Icon from 'components/atoms/Icon';
import useWindowScroll from 'hooks/useWindowScroll';
import mapModifiers from 'utils/functions';

const FloatingButton: React.FC = () => {
  const refPageYOffset = useRef<number>();
  const [isShow, setIsShow] = useState(false);

  useWindowScroll(() => {
    if (window.pageYOffset > 1040) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }

    refPageYOffset.current = window.pageYOffset;
  });

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="floatingButton">
      <div id="fb-root" />
      <div id="fb-customer-chat" className="fb-customerchat" />
      <div className={mapModifiers('floatingButton_scrollTop', isShow && 'show')} onClick={handleScrollTop}>
        <Icon iconName="arrowUp" size="32" />
      </div>
    </div>
  );
};

FloatingButton.defaultProps = {
  handleScrollTop: undefined,
};
export default FloatingButton;
