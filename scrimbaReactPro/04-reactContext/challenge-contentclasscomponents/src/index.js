import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import UserContext from './userContext';

ReactDOM.render(
  <UserContext.Provider value={'george87'}>
    <App />
  </UserContext.Provider>,
  document.getElementById('root')
);
