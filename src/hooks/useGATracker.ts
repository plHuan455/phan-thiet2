import { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from 'store/hooks';

const useGaTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);
  const gaId = useAppSelector((state) => state.system?.data?.gaId);

  useEffect(() => {
    if (!gaId) return;
    const tracker = gaId.map((x) => ({ trackingId: x }));
    ReactGA.initialize(tracker);
    setInitialized(true);
  }, [gaId]);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
};

export default useGaTracker;
