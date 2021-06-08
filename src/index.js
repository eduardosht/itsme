import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'

import Home from './pages/Home';
import { colorPalettes_2 } from './constants';
import FontStyles from './fonts/fontStyle';


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colorPalettes_2};
    min-height: 100vh;
    padding: 20px;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <FontStyles />
    <GlobalStyle />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);