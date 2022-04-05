import React from 'react';
import ReactDOM from 'react-dom';

import CkEditor from '.';

describe('<CkEditor />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CkEditor />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
