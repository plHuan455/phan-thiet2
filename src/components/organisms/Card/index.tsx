import React from 'react';

import CardEvent, { CardEventProps } from './Event';
import CardNormal, { CardNormalProps } from './Normal';
import CardPlayer, { CardPlayerProps } from './Player';

interface CardResponse {
  Player: React.FC<CardPlayerProps>;
  Event: React.FC<CardEventProps>;
  Normal: React.FC<CardNormalProps>;
}

const Card: CardResponse = {
  Player: CardPlayer,
  Event: CardEvent,
  Normal: CardNormal,
};

export default Card;
