import React from 'react';

import mapModifiers from 'utils/functions';

export const iconList = {
  searchWhite: 'searchWhite',
  loadingWhite: 'loadingWhite',
};

export type IconName = keyof typeof iconList;

export type IconSize = '14' | '20' | '24';

interface IconProps {
  iconName: IconName;
  size?: IconSize;
}

const Icon: React.FC<IconProps> = ({ iconName, size }) => (
  <i className={mapModifiers('a-icon', iconName, size)} />);

Icon.defaultProps = {
  size: '24',
};

export default React.memo(Icon);
