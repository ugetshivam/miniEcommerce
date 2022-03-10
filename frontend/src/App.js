import './App.css';
import Create from './components/pages/forms/Create';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/pages/forms/Products/ProductList';
import Cart from './components/cart/Cart';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [products, setProducts] = useState([]);
  async function getProducts() {
    try {
      const res = await axios.get('http://localhost:8080/products');
      // console.log(res.data)
      setProducts(res.data);
    }
    catch (e) {
      console.log(e.message);
    }
  }
  useEffect(() => {
    getProducts();
  }
    , [])
  // console.log(products);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductList products={products} />} />
        <Route path='/create' element={<Create />} />
        <Route path='/home' element={<ProductList products={products} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
