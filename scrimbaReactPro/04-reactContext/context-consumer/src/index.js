import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import ThemeContext from './themeContext';

ReactDOM.render(
  <ThemeContext.Provider value={'dark'}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById('root')
);
