
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">S</span>
          </div>
          <span className="font-bold text-slate-800 tracking-tight text-xl">EduSense</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#apa-itu" className="hover:text-teal-600 transition-colors">Definisi</a>
          <a href="#mengapa" className="hover:text-teal-600 transition-colors">Penyebab</a>
          <a href="#dampak" className="hover:text-teal-600 transition-colors">Dampak</a>
          <a href="#penanganan" className="hover:text-teal-600 transition-colors">Penanganan</a>
        </div>
        <a href="#asisten" className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all shadow-sm">
          Tanya AI
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
