import React from 'react';
import ReactDOM from 'react-dom';

import Header from '.';

describe('<Header />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
