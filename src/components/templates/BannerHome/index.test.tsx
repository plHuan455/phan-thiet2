import React from 'react';
import ReactDOM from 'react-dom';

import BannerHome from '.';

describe('<BannerHome />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BannerHome />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
