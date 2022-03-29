import React from 'react';
import ReactDOM from 'react-dom';

import Link from '.';

describe('<Link />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Link href="/" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
