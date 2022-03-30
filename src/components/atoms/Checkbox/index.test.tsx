import React from 'react';
import ReactDOM from 'react-dom';

import Checkbox from '.';

describe('<Checkbox />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
