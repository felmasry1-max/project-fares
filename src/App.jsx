import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminNavbar from './components/AdminNavbar';
import Store from './pages/Store';
import AddProduct from './pages/AddProduct';
import ManageTags from './pages/ManageTags';
import CategoriesPage from "./pages/CategoriesPage";

function AppContent() {
  const location = useLocation();

  const adminPages = ['/manage-tags', '/categories'];
  const isAdminPage = adminPages.includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {isAdminPage ? <AdminNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/products" element={<Store />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/manage-tags" element={<ManageTags />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;