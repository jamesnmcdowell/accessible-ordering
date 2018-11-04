import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import styled, { createGlobalStyle } from 'styled-components'
import Router from './Router';

import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
 
  body {
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    color: #222;
    line-height: 1.5;
    letter-spacing: .1rem;
    font-family: 'Baumans', cursive;
    font-family: 'Muli', sans-serif;
    font-family: 'Nunito', sans-serif;
    width: 100%;
    height: 100%;
  }
  p, span, li {
    letter-spacing: .02rem;
    font-size: 1.7rem;
  }
  a {
    text-decoration: none !important;
    color: black;
  }
  img {
    width:100%;
  }
  button {
    font-family: 'Work Sans', sans-serif;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
  }
  h2 {
    font-family: 'Nunito', sans-serif;
  }

  ul, ol {
      padding-left: 20px;
  }

 
a:focus, input:focus, button:focus, select:focus {
  font-weight: bold;
}

  ${normalize()}
`;



let App = () =>
<div>
  <GlobalStyle />
  <Provider store={store}>
      <Router />
  </Provider>
 </div>

export default App;

//  a:hover, input:hover, button:hover, select:hover,