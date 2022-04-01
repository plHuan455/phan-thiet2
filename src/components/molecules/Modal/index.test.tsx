import React from 'react';
import ReactDOM from 'react-dom';

import Modal from '.';

describe('<Modal />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Modal isOpen />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
