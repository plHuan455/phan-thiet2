import React from 'react';
import ReactDOM from 'react-dom';

import Detail from '.';

describe('<Detail />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Detail />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
