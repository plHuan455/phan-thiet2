import React from 'react';
import ReactDOM from 'react-dom';

import Arrow from '.';

describe('<Arrow />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Arrow />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
