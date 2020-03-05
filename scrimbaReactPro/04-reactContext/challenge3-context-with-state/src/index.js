import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { UserContextProvider } from './userContext';
import App from './App';

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById('root')
);
