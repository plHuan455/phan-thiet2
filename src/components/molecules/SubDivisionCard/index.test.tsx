import React from 'react';
import ReactDOM from 'react-dom';

import SubDivisionCard from '.';

describe('<SubDivisionCard />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SubDivisionCard title="" description="" imgSrc="" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
