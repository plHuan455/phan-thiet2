import React from 'react';
import ReactDOM from 'react-dom';

import HeaderDivision from '.';

describe('<HeaderDivision />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderDivision />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
