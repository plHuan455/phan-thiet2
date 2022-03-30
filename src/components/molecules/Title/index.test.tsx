import React from 'react';
import ReactDOM from 'react-dom';

import Title from '.';

describe('<Title />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Title />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
