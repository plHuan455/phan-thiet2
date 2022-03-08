import 'App.scss';

import React from 'react';
import { Provider } from 'react-redux';

import { store } from 'store';

const App: React.FC = () => <div className="app">App</div>;

const AppWrapper: React.FC = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
