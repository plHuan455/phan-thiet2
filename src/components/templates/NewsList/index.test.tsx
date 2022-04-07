import React from 'react';
import ReactDOM from 'react-dom';

import NewsList from '.';

describe('<NewsList />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<NewsList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
