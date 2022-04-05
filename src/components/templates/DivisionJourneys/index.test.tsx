import React from 'react';
import ReactDOM from 'react-dom';

import DivisionJourneys from '.';

describe('<DivisionJourneys />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DivisionJourneys />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
