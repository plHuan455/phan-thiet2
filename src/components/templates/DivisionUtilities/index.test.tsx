import React from 'react';
import ReactDOM from 'react-dom';

import DivisionUtilities from '.';

describe('<DivisionUtilities />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DivisionUtilities background="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
