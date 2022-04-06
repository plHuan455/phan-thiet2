import { useEffect } from 'react';

const useWindowResize = (callBack?:()=>void):void => {
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      if (callBack) {
        callBack();
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useWindowResize;
