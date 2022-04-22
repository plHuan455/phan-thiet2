import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

import { useAppSelector } from 'store/hooks';

const useGTM = () => {
  const gtmId = useAppSelector((state) => state.system?.data?.gtmId);
  useEffect(() => {
    if (!gtmId) return;
    gtmId.forEach((x) => {
      TagManager.initialize({
        gtmId: x,
      });
    });
  }, [gtmId]);
};

export default useGTM;
