import React from 'react';
import ReactDOM from 'react-dom';

import Selection from '.';

describe('<Selection />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Selection />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
