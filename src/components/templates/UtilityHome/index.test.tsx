import React from 'react';
import ReactDOM from 'react-dom';

import UtilityHome from '.';

describe('<UtilityHome />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UtilityHome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
