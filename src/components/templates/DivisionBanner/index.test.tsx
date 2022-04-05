import React from 'react';
import ReactDOM from 'react-dom';

import DivisionBanner from '.';

import banner from 'assets/images/banner.png';

describe('<DivisionBanner />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DivisionBanner thumbnail={banner} title="NHỊP ĐẬP THẾ GIỚI MỚI" />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
