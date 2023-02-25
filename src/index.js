import { Provider } from 'react-redux';
import React from 'react';
import {  store } from './redux/store'
import { createRoot } from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <App />
    </BrowserRouter>
  </Provider>
);
