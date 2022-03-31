import React from 'react';
import ReactDOM from 'react-dom';

import MarkerCard from '.';

describe('<MarkerCard />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MarkerCard imgSrc="" title="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
