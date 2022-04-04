import React from 'react';
import ReactDOM from 'react-dom';

import Card from '.';

describe('<Card />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card.Normal
      thumbnail="https://source.unsplash.com/random"
      title="Nova World phan thiết và chuỗi cung cấp tiện ích"
      href="/"
      tag="The Kingdom"
      dateTime="2 giờ trước"
      url={{
        text: 'Xem thêm',
        iconName: 'arrowRightCopper',
        animation: 'arrow',
      }}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
