import React from 'react';
import ReactDOM from 'react-dom';

import PopupPlayer from '.';

describe('<PopupPlayer />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PopupPlayer src="" isOpen />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
