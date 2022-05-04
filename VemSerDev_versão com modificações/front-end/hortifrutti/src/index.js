import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import RoutesAplication from './routes/routes-aplication';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoutesAplication/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
