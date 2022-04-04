import React from 'react';
import ReactDOM from 'react-dom';

import ProjectPositionSummer from '.';

describe('<ProjectPositionSummer />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectPositionSummer listDivision={[]} title="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
