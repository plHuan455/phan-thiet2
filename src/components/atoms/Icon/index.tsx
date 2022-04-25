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
  closeWhite: 'closeWhite',
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
  searchGray: 'searchGray',
  zalo: 'zalo',
  facebook: 'facebook',
  arrowRightWhite: 'arrowRightWhite',
  arrowLeftWhite: 'arrowLeftWhite',
  chevronDownWhite: 'chevronDownWhite',
  loadingBlue: 'loadingBlue',
  arrowUp: 'arrowUp',
  loadingInherit: 'loadingInherit',
  playerInherit: 'playerInherit',
};

export type IconName = keyof typeof iconList;

export type IconSize =
  | '11'
  | '14'
  | '16'
  | '18'
  | '20'
  | '24'
  | '32'
  | '36'
  | '40'
  | '80';

interface IconProps {
  iconName: IconName;
  size?: IconSize;
}

const Icon: React.FC<IconProps> = ({ iconName, size }) => (
  <div className="a-icon">
    {iconName === 'loadingInherit' && (
      <div className="a-icon_loadingInherit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            strokeWidth="7"
            r="35"
            strokeDasharray="164.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="2.0408163265306123s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            />
          </circle>
        </svg>
      </div>
    )}
    {
      iconName === 'playerInherit' && (
        <div className="a-icon_playerInherit">
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="white" />
            <path d="M52.4373 37.1452C54.8066 38.729 54.8066 42.212 52.4373 43.7959L36.8111 54.2422C34.1533 56.019 30.5881 54.1139 30.5881 50.9168L30.5881 30.0243C30.5881 26.8272 34.1533 24.9221 36.8111 26.6989L52.4373 37.1452Z" fill="#005C8F" />
          </svg>
        </div>
      )
    }
    <i className={mapModifiers('a-icon_icon', iconName, size)} />
  </div>
);

Icon.defaultProps = {
  size: '24',
};

export default React.memo(Icon);
