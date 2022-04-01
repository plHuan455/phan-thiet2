import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from '.';

describe('<Carousel />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Carousel><div /></Carousel>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
