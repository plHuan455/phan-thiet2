import React from 'react';
import ReactDOM from 'react-dom';

import Notify from '.';

describe('<Notify />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Notify />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
