import React from 'react';

interface DivisionLocationProps {
}

const DivisionLocation: React.FC<DivisionLocationProps> = ({ children }) => (
  <div>{children}</div>
);

DivisionLocation.defaultProps = {
};

export default DivisionLocation;
