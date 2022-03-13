import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { CartContextProvider } from './components/contexts/CartContext'
import { SearchContextProvider } from './components/contexts/SearchContext'
ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <SearchContextProvider>
        <Router>
          <App />
        </Router>
      </SearchContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

