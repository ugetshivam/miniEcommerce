import './App.css';
import Create from './components/pages/forms/Create';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import ProductList from './components/pages/forms/Products/ProductList';
import Cart from './components/cart/Cart';
import { useState } from 'react';
import Update from './components/pages/forms/Update';
import Contact from './components/pages/forms/Contact';

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
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductList payload={{ uproducts, updateProduct }} />} />
        <Route path='/create' element={<Create />} />
        {/* <Route path='/home' element={<ProductList products={produ} />} /> */}
        <Route path='/cart' element={<Cart />} />
        <Route path='/update' element={<Update payload={uproducts} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
