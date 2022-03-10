import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { CartContextProvider } from './components/contexts/CartContext'
ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <Router>
        <App />
      </Router>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

