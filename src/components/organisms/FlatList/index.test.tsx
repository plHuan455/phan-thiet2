import React from 'react';
import ReactDOM from 'react-dom';

import FlatList from '.';

describe('<FlatList />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FlatList data={['1', '2']} render={(item) => <div>{item}</div>} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
