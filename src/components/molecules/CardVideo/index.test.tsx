import React from 'react';
import ReactDOM from 'react-dom';

import CardVideo from '.';

describe('<CardVideo />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardVideo thumbnail="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
