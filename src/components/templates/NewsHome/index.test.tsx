import React from 'react';
import ReactDOM from 'react-dom';

import NewsHome from '.';

describe('<NewsHome />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewsHome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
