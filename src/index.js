import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import { fonts } from './style';
import { Reset as ResetStyles } from 'styled-reset'
const { FontLoader } = fonts;

ReactDOM.render(
  <React.StrictMode>
    <ResetStyles />
    <FontLoader />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
