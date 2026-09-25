import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className="bg-gradient-to-l from-[#1e3a5f] to-[#5a9e9e] text-white shadow-md">
      <div className="w-[80%] mx-auto px-4 py-3 flex justify-between items-center">

        <Link to="/">
          <img
            src="/images/logo.png"
            alt="بدلها"
            className="h-20 w-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex gap-10 text-base font-medium">
          <Link to="/" className="hover:text-[#a8d8e0] transition">الرئيسية</Link>
          <a href="#" className="hover:text-[#a8d8e0] transition">من نحن</a>
          <Link to="/products" className="hover:text-[#a8d8e0] transition">السوق</Link>
          <a href="#" className="hover:text-[#a8d8e0] transition">اتصل بنا</a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/categories"
            className="border border-white/60 px-6 py-2 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all text-sm font-bold"
          >
            الفئات
          </Link>

          <Link
            to="/manage-tags"
            className="border border-white/60 px-6 py-2 rounded-full hover:bg-white hover:text-[#1e3a5f] transition-all text-sm font-bold"
          >
            الوسوم
          </Link>

          <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border-2 border-white/40">
            <FaUser size={20} />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default AdminNavbar;