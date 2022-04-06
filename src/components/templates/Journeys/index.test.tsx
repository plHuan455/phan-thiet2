import React from 'react';
import ReactDOM from 'react-dom';

import Journeys from '.';

describe('<Journeys />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Journeys />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
