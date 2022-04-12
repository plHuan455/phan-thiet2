import React from 'react';
import ReactDOM from 'react-dom';

import PopupImage from '.';

describe('<PopupImage />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PopupImage isOpen={false} handleClose={() => {}} dataImageList={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
