import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Chat } from './components/Chat';

render(
  <Chat />,
  document.getElementById('container'),
);