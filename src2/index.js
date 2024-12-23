import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {legacy_createStore} from 'redux'
import {Provider} from 'react-redux'

import votingReducer from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(votingReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

  
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

