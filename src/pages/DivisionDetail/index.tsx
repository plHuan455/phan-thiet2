import React, { useEffect } from 'react';

import Screen from './container';

import { useAppDispatch } from 'store/hooks';
import { setTypePage } from 'store/systems';

const DivisionDetail: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTypePage('subdivisions'));
    return () => {
      dispatch(setTypePage('default'));
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-divisionDetail">
      <Screen />
    </div>
  );
};

export default DivisionDetail;
