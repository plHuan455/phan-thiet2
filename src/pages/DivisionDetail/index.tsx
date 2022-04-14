import React, { useEffect, useMemo } from 'react';

import Screen from './container';

import { useAppDispatch } from 'store/hooks';
import { setTypePage } from 'store/systems';

export interface MyCustomCSS extends React.CSSProperties {
  '--theme': string;
}

const DivisionDetail: React.FC = () => {
  const styles = useMemo((): MyCustomCSS => ({
    '--theme': 'rgb(0, 92, 143)',
  }), []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTypePage('subdivisions'));
    return () => {
      dispatch(setTypePage('default'));
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-divisionDetail" style={styles}>
      <Screen />
    </div>
  );
};

export default DivisionDetail;
