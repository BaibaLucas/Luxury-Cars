// Package Import
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Local Import
// Styles
import './styles/reset.scss';
import './styles/index.scss';

// Components
import App from './components/App';

// Store

const rootReactElement = (
  <BrowserRouter>
  <App />
  </BrowserRouter>
);

const target = document.getElementById('root');

render(rootReactElement, target);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
