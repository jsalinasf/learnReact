import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const ThemeContext = React.createContext();
// compound component:
// ThemeContext.Provider & ThemeContext.Consumer

ReactDOM.render(
  <ThemeContext.Provider value={'light'}>
    <App />
  </ThemeContext.Provider>,
  document.getElementById('root')
);
