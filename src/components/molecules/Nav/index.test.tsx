import React from 'react';
import ReactDOM from 'react-dom';

import Nav from '.';

describe('<Nav />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Nav pathname="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
