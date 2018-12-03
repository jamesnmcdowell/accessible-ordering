import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import styled, { createGlobalStyle } from 'styled-components'
import Router from './Router';

import { normalize } from 'polished';
import ZipRequest from './components/ZipRequest';

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
  max-width: 400px;

  

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
  background-color: #FFA310;
  background-color: #5F5B5C;
  background-color: #FFC810
  border: none !important;

  color: black;
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
        max-height: 250px;
    overflow: auto;
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
  background-color: #5F5B5C;
  background-color: #FFC810
  color: black;
}

.AriaMenuButton-menuItem.is-selected {
  cursor: default;
  font-weight: bold;
}








.modal {
  background: #fff;
  outline: 0;
  min-width: 250px;
  max-width: 500px;
  border-radius: 4px;
}

.modal-header,
.modal-body,
.modal-footer {
  padding: 0.5em 1.5em;
}

.modal-header {
  border-bottom: 1px solid #eee;
}

.modal-title {
  margin: 0;
}

.modal-footer {
  border-top: 1px solid #eee;
  text-align: right;
}

.modal--animated {
  opacity: 0.3;
  transform: scale(1.1) translateY(-10px);
  -webkit-transform: scale(1.1) translateY(-10px);
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
}

.modal--animated.has-entered {
  opacity: 1;
  transform: scale(1) translateY(0);
  -webkit-transform: scale(1) translateY(0);
}

.underlay {
  background-color: rgba(0, 0, 0, 0);
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
}

.underlay.has-entered {
  background-color: rgba(0, 0, 0, 0.5);
}








[type="checkbox"],
[type="radio"] {
  border: 0                      !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
          clip-path: inset(50%) !important;
  height: 1px                    !important;
  overflow: hidden               !important;
  padding: 0                     !important;
  width: 1px                     !important;
  white-space: nowrap            !important;
}
[type="checkbox"]:focus + label::before,
[type="radio"]:focus + label::before {
  box-shadow: 0 0 0 2px rgba(51, 51, 51, 0.4) !important;
}
[type="checkbox"]:hover + label::before,
[type="radio"]:hover + label::before {
  border-color: #000;
}
[type="checkbox"]:active + label::before,
[type="radio"]:active + label::before {
  transition-duration: 0;
}
[type="checkbox"] + label,
[type="radio"] + label {
  position: relative;
  padding: 6px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
[type="checkbox"] + label::before,
[type="radio"] + label::before {
  background-color: #fff;
  border: 1px solid #444;
  box-sizing: content-box;
  content: '';
  color: #444;
  margin-right: 6px;
  top: 50%;
  left: 0;
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
}
[type="checkbox"] + label::after,
[type="radio"] + label::after {
  box-sizing: content-box;
  content: '';
  background-color: #E75721;;
  position: absolute;
  top: 50%;
  left: 10px;
  width: 18px;
  height: 18px;
  margin-top: -9px;
  -webkit-transform: scale(0);
          transform: scale(0);
  -webkit-transform-origin: 50%;
          transform-origin: 50%;
  transition: -webkit-transform 200ms ease-out;
  transition: transform 200ms ease-out;
  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;
}

[type="checkbox"] + label::before, [type="checkbox"] + label::after {
  border-radius: 0;
}
[type="checkbox"] + label::after {
  background-color: transparent;
  top: 50%;
  left: calc(6px + 1px + 24px/5);
  width: 12px;
  height: 4.8px;
  margin-top: calc(24px / -2 / 2 * 0.8);
  border-style: solid;
  border-color: #E75721;
  border-width: 0 0 3px 3px;
  border-radius: 0;
  -o-border-image: none;
     border-image: none;
  -webkit-transform: rotate(-45deg) scale(0);
          transform: rotate(-45deg) scale(0);
  transition: none;
}
[type="checkbox"]:checked + label::after {
  content: '';
  -webkit-transform: rotate(-45deg) scale(1);
          transform: rotate(-45deg) scale(1);
  transition: -webkit-transform 200ms ease-out;
  transition: transform 200ms ease-out;
  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;
}

.checkbox-active {
  content: '';
  -webkit-transform: rotate(-45deg) scale(1);
          transform: rotate(-45deg) scale(1);
  transition: -webkit-transform 200ms ease-out;
  transition: transform 200ms ease-out;
  transition: transform 200ms ease-out, -webkit-transform 200ms ease-out;
}


[type="radio"] + label::before, [type="radio"] + label::after {
  border-radius: 50%;
}
[type="radio"]:checked:active + label::before, [type="radio"]:checked:focus + label::before {
  -webkit-animation: none;
          animation: none;
  -webkit-filter: none;
          filter: none;
  transition: none;
}
[type="radio"]:checked + label::before {
  -webkit-animation: none;
          animation: none;
  background-color: #fff;
}
[type="radio"]:checked + label::after {
  -webkit-transform: scale(1);
          transform: scale(1);
}

select {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2216%22%20height%3D%228%22%20viewBox%3D%220%200%2016%208%22%3E%3Cpolygon%20fill%3D%22%234D4D4D%22%20points%3D%228%2C0%2016%2C0%2012%2C4%208%2C8%204%2C4%200%2C0%20%22/%3E%3C/svg%3E);
  background-repeat: no-repeat;
  background-position: 95% 50%;
  border: 1px solid grey;
  border-radius: 0;
  padding: 0.25em 0.4em;
  padding-right: 1.5em;
}
select:focus, select:hover {
  border-color: black;
  outline: none;
}
select:active {
  border-color: #900;
}
select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000;
}

/* IE 10/11+ - This hides native dropdown button arrow so it will have the custom appearance, IE 9 and earlier get a native select - targeting media query hack via http://browserhacks.com/#hack-28f493d247a12ab654f6c3637f6978d5 - looking for better ways to achieve this targeting */
/* The second rule removes the odd blue bg color behind the text in the select button in IE 10/11 and sets the text color to match the focus style's - fix via http://stackoverflow.com/questions/17553300/change-ie-background-color-on-unopened-focused-select-box */
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  select::-ms-expand {
    display: none;
  }

  select:focus::-ms-value {
    background: transparent;
    color: grey;
  }
}
* {
  box-sizing: border-box;
}



label {
  cursor: pointer;
  display: inline-block;
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