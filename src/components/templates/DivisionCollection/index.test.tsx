import React from 'react';
import ReactDOM from 'react-dom';

import DivisionCollection from '.';

describe('<DivisionCollection />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <DivisionCollection
        dataList={[
          {
            title: 'BERMUDA',
            color: 'rgba(0, 92, 143, 1)',
            button: {
              url: '/',
              text: 'Xem thêm',
              target: '_self',
            },
            thumbnail: 'https://source.unsplash.com/random',
          },
        ]}
        title="BỘ SƯU TẬP"
      />,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
