import React from 'react';
import ReactDOM from 'react-dom';

import YouCanCare from '.';

describe('<YouCanCare />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<YouCanCare />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
