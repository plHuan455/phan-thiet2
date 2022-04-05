import React from 'react';

import mapModifiers from 'utils/functions';

export const iconList = {
  searchWhite: 'searchWhite',
  loadingWhite: 'loadingWhite',
  closeBlack: 'closeBlack',
  closeOrange: 'closeOrange',
  chevronRight: 'chevronRight',
  arrowRightCopper: 'arrowRightCopper',
  searchOrange: 'searchOrange',
  closeWhite: 'searchWhite',
  calendar: 'calendar',
  clock: 'clock',
  location: 'location',
  downloadOrange: 'downloadOrange',
  dot: 'dot',
  closeGreen: 'closeGreen',
  markerGgMap: 'markerGgMap',
  playerBlue: 'playerBlue',
  playerCamel: 'playerCamel',
  playerLemon: 'playerLemon',
  playerOcean: 'playerOcean',
  playerPersian: 'playerPersian',
  playerSeaweed: 'playerSeaweed',
};

export type IconName = keyof typeof iconList;

export type IconSize = '11' | '14' | '16' | '18' | '20' | '24' | '36' | '40' | '80';

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
