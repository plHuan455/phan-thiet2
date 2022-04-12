import React, { useMemo } from 'react';

import Screen from './container';

export interface MyCustomCSS extends React.CSSProperties {
  '--theme': string;
}

const DivisionDetail: React.FC = () => {
  const styles = useMemo((): MyCustomCSS => ({
    '--theme': 'rgb(0, 92, 143)',
  }), []);

  return (
    <div className="p-divisionDetail" style={styles}>
      <Screen />
    </div>
  );
};

export default DivisionDetail;
