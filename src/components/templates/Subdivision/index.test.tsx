import React from 'react';
import ReactDOM from 'react-dom';

import Subdivision from '.';

describe('<Subdivision />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Subdivision />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
