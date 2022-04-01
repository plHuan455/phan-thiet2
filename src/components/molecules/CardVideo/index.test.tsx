import React from 'react';
import ReactDOM from 'react-dom';

import CardVideo from '.';

describe('<CardVideo />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardVideo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
