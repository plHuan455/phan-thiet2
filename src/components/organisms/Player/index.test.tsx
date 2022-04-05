import React from 'react';
import ReactDOM from 'react-dom';

import Player from '.';

describe('<Player />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Player src="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
