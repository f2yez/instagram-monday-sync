import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/index.css';

// Render my root component
ReactDOM.render(
    <Root />,
  document.getElementById('root')
);

reportWebVitals();
