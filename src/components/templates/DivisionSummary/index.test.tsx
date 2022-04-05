import React from 'react';
import ReactDOM from 'react-dom';

import DivisionSummary from '.';

describe('<DivisionSummary />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DivisionSummary />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
