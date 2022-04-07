import React from 'react';

import Events, { EventsProps } from 'components/templates/Events';

const EventsContainer: React.FC<EventsProps> = (props) => (
  <div className="s-events">
    <Events {...props} />
  </div>
);

export default EventsContainer;
