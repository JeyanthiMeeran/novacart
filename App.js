import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <ToastContainer theme="dark" position="bottom-center" />

      <Header cartItems={cartItems} />

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Home />} />
        <Route
          path="/product/:id"
          element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
