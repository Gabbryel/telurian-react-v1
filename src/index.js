import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router basename={`/${process.env.PUBLIC_URL}`}>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();