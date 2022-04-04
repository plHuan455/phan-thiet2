import React from 'react';

import CardDivision, { CardDivisionProps } from './Division';
import CardEvent, { CardEventProps } from './Event';
import CardNormal, { CardNormalProps } from './Normal';
import CardPlayer, { CardPlayerProps } from './Player';

interface CardResponse {
  Player: React.FC<CardPlayerProps>;
  Event: React.FC<CardEventProps>;
  Normal: React.FC<CardNormalProps>;
  Division: React.FC<CardDivisionProps>;
}

const Card: CardResponse = {
  Player: CardPlayer,
  Event: CardEvent,
  Normal: CardNormal,
  Division: CardDivision,
};

export default Card;
