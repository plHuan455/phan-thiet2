---
to: src/components/<%= level %>/<%= h.toPascalCase(name) %>/index.test.tsx
---
import React from 'react';
import ReactDOM from 'react-dom';

import <%= h.toPascalCase(name) %> from '.';

describe('<<%= h.toPascalCase(name) %> />', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<<%= h.toPascalCase(name) %> />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
