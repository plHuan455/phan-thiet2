import React from 'react';
import ReactDOM from 'react-dom';

import Consultancy from '.';

describe('<Consultancy />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Consultancy />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
