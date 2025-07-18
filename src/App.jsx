import Navbar from "./components/Navbar";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Login from './pages/Login';
import Footer  from "./components/Footer";
const App = () => {
  return (
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Orders />} />
        </Routes>
        <Footer/>
      </div>
  );
};

export default App;
