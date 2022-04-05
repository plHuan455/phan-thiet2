import React from 'react';
import ReactDOM from 'react-dom';

import Feedbacks from '.';

describe('<Feedbacks />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Feedbacks />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
