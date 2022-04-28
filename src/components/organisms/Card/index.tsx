import CardDivision from './Division';
import CardEvent from './Event';
import CardFeedback from './Feedback';
import CardLayer from './Layer';
import CardLoadMore from './LoadMore';
import CardNews from './News';
import CardNormal from './Normal';
import CardPlayer from './Player';

const Card = {
  Player: CardPlayer,
  Event: CardEvent,
  Normal: CardNormal,
  Division: CardDivision,
  Feedback: CardFeedback,
  Layer: CardLayer,
  News: CardNews,
  LoadMore: CardLoadMore,
};

export default Card;
