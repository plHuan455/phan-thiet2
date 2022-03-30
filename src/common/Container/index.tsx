import React from 'react';

import mapModifiers from 'utils/functions';

interface ContainerProps {
  modifiers?: ('fullScreen' | 'noPaddingRight' | 'noPaddingLeft' | 'fullScreenTabletUp')[];
}

const Container: React.FC<ContainerProps> = ({
  modifiers, children,
}) => (
  <div className={`container ${mapModifiers('o-container', modifiers)}`}>
    {children}
  </div>
);

Container.defaultProps = {
  modifiers: undefined,
};

export default Container;
