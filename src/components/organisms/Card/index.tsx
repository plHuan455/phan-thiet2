import React from 'react';

import CardDivision, { CardDivisionProps } from './Division';
import CardEvent, { CardEventProps } from './Event';
import CardFeedback, { CardFeedbackProps } from './Feedback';
import CardLayer, { CardLayerProps } from './Layer';
import CardNormal, { CardNormalProps } from './Normal';
import CardPlayer, { CardPlayerProps } from './Player';

interface CardResponse {
  Player: React.FC<CardPlayerProps>;
  Event: React.FC<CardEventProps>;
  Normal: React.FC<CardNormalProps>;
  Division: React.FC<CardDivisionProps>;
  Feedback: React.FC<CardFeedbackProps>;
  Layer: React.FC<CardLayerProps>
}

const Card: CardResponse = {
  Player: CardPlayer,
  Event: CardEvent,
  Normal: CardNormal,
  Division: CardDivision,
  Feedback: CardFeedback,
  Layer: CardLayer,
};

export default Card;
