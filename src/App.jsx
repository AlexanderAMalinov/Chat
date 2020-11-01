import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Chat from './components/Chat';

render(
  <Provider store={}>
    <Chat />
  </Provider>,
  document.getElementById('container'),
);