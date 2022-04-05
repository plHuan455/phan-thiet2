import React from 'react';
import ReactDOM from 'react-dom';

import MapContact from '.';

describe('<MapContact />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MapContact />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
