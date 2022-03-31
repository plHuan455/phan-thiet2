import React from 'react';
import ReactDOM from 'react-dom';

import Footer from '.';

describe('<Footer />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer
      logo=""
      copyRight={{
        title: '',
        list: [],
      }}
      addressList={[{
        title: '',
      }]}
      menuList={{
        title: '',
        list: [],
      }}
      divisionList={{
        title: '',
        list: [],
      }}
      serviceList={{
        title: '',
        list: [],
      }}
      socialList={{
        title: '',
        list: [],
      }}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
