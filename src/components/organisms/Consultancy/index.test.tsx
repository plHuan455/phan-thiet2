import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

import Consultancy, { FormConsultancy } from '.';

describe('<Consultancy />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    const method = useForm<FormConsultancy>();
    // eslint-disable-next-line no-console
    ReactDOM.render(<Consultancy method={method} handleSubmit={() => console.log()} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
