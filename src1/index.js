import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {legacy_createStore} from 'redux'
import {Provider} from 'react-redux'
import { reducer } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(reducer)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

