import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<h1>Loading...</h1>}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Suspense>
);

