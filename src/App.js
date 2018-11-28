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
    font-family: 'Source Sans Pro', sans-serif;
    font-family: 'Dosis', sans-serif;
    font-family: 'K2D', sans-serif;
    font-family: 'Sarala', sans-serif;
    font-family: 'Kanit', sans-serif;
  }

  h2 {
    font-family: 'Kanit', sans-serif;
    text-transform: uppercase;
    letter-spacing: .08rem;
  }

  ul, ol {
      padding-left: 20px;
  }

 
a:focus, input:focus, button:focus, select:focus {
  font-weight: bold;
}

.AriaMenuButton {
  height: 100%;
  width: 100%;
  display: inline-block;
  position: relative;

}

.AriaMenuButton-trigger {
  cursor: pointer;
  display: inline-block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: #EEE;
  font-weight: bold;
  padding: 6px 10px;

  display: inline-block;
  position: relative;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  padding: 1rem;
  background-color: #F36C3E;
  color: white;
  height: 100%;
  width: 100%;
  &:hover {
  }
  span {
      text-transform: uppercase;
  }
  
}

.AriaMenuButton-trigger::after {
  content: "";
  display: inline-block;
  margin-left: 3px;
  position: relative;
  top: 3px;
  border-color: currentColor transparent transparent;
  border-width: 5px 4px;
  border-style: solid;
}

.AriaMenuButton-trigger:hover,
.AriaMenuButton-trigger:focus,
.AriaMenuButton-trigger.is-open {
}

.AriaMenuButton-trigger:active,
.AriaMenuButton-trigger.is-open {
}

.AriaMenuButton-menu {
  background: #fff;
  border: 1px solid rgba(200, 200, 200, 0.4);
  list-style-type: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 99;
  padding-left: 0;
  border-radius: 3px;
  margin: 4px 0 0 0;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.15);
  width: 215px;
}

.AriaMenuButton-menu--flushRight {
  right: 0;
}

.AriaMenuButton-menuItem {
  cursor: pointer;
  padding: 8px;
  border-bottom: 1px solid #EEE;
}

.AriaMenuButton-menuItemWrapper:first-of-type .AriaMenuButton-menuItem {
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
}

.AriaMenuButton-menuItemWrapper:last-of-type .AriaMenuButton-menuItem {
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
}

.AriaMenuButton-menuItem:hover,
.AriaMenuButton-menuItem:focus {
  background-color: #4183C4;
  color: #fff;
}

.AriaMenuButton-menuItem.is-selected {
  cursor: default;
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