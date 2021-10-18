import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from './store/store';
import {Provider} from 'react-redux';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

ReactDOM.render(
  <Provider store={store}>
    <ReactNotification />
    <App />
  </Provider>,
  document.getElementById('root')
);
