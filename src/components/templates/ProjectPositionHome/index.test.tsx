import React from 'react';
import ReactDOM from 'react-dom';

import ProjectPositionHome from '.';

describe('<ProjectPositionHome />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProjectPositionHome listDivision={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
