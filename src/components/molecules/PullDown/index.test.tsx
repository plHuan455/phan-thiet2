import React from 'react';
import ReactDOM from 'react-dom';

import Pulldown from '.';

describe('<Pulldown />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Pulldown options={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
