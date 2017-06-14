import React from 'react';
import ReactDOM from 'react-dom';
import App from'./components/App.js';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import './styles.css';

ReactDOM.render( (
  <BrowserRouter>
   <Routes/>
  </BrowserRouter>
), document.getElementById('root')
);