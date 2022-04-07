import React from 'react';
import ReactDOM from 'react-dom';

import DivisionLocation from '.';

describe('<DivisionLocation />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DivisionLocation />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
