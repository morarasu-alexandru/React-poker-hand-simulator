import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'

const rootEl = document.getElementById('root');

const render = () => ReactDOM.render(
  <Main />,
  rootEl
);

render();
