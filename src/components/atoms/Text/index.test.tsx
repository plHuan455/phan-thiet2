import React from 'react';
import ReactDOM from 'react-dom';

import Text from '.';

describe('<Text />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Text />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
