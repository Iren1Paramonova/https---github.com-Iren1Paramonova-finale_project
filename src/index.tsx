import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

/* const h1 = React.createElement('h1', { className: 'title' }, 'Hello REACT');
const div = React.createElement(
  'div',
  { style: { backgroundColor: 'black', width: '400px', height: '500PX' } },
  h1,
); */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
