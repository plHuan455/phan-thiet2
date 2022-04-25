import React, { useContext, useEffect } from 'react';

import Screen from './container';

import { LayoutContext } from 'common/Layout/context';

const DivisionDetail: React.FC = () => {
  const { setPageType, setLogoSubdivisions } = useContext(LayoutContext);

  useEffect(() => {
    if (setPageType) {
      setPageType('subdivisions');
    }
    return () => {
      if (setPageType) {
        setPageType('default');
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="p-divisionDetail">
      <Screen setLogoDivision={setLogoSubdivisions} />
    </div>
  );
};

export default DivisionDetail;
