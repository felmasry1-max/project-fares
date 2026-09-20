import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Store from './pages/Store';         
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f0f4f8]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} />          
          <Route path="/products" element={<Store />} /> 
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;