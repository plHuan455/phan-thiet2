import React from 'react';
import ReactDOM from 'react-dom';

import PlanningHighway from '.';

describe('<PlanningHighway />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlanningHighway />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
