import React from 'react';
import ReactDOM from 'react-dom';

import CardVertical from '.';

describe('<CardVertical />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardVertical />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
