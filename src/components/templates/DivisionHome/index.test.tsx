import React from 'react';
import ReactDOM from 'react-dom';

import DivisionHome from '.';

describe('<DivisionHome />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DivisionHome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
