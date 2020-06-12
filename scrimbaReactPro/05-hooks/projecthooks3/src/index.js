import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import { TipsContextProvider } from './tipsContext';

ReactDOM.render(
  <TipsContextProvider>
    <App />
  </TipsContextProvider>,
  document.getElementById('root')
);
