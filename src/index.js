import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Reset as ResetStyles } from 'styled-reset'

ReactDOM.render(
  <React.StrictMode>
    <ResetStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
