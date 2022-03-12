import './App.css';
import Create from './components/pages/forms/Create';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/pages/forms/Products/ProductList';
import Cart from './components/cart/Cart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Update from './components/pages/forms/Update';

function App() {

  const [uproducts, setUProducts] = useState({
    id: "",
    name: "",
    price: 0,
    desc: "",
    img: ""
  });
  const updateProduct = (value) => {
    setUProducts(value);
  }
  console.table(uproducts);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductList payload={{ uproducts, updateProduct }} />} />
        <Route path='/create' element={<Create />} />
        {/* <Route path='/home' element={<ProductList products={produ} />} /> */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/update' element={<Update payload={uproducts} />} />
      </Routes>
    </div>
  );
}

export default App;
