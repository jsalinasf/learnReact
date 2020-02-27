import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import ThemeContext from './ThemeContext';

ReactDOM.render(
  <ThemeContext.Provider value={'mike99'}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById('root')
);
