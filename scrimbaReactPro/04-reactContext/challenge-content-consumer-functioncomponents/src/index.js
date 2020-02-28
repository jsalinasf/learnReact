import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import UserContext from './userContext';

ReactDOM.render(
  <UserContext.Provider value={'charlie99'}>
    <App />
  </UserContext.Provider>,
  document.getElementById('root')
);
