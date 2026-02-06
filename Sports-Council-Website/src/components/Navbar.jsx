import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import sports_logo from '../images/sports_logo.jpeg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Centralized list of links to ensure consistency between Mobile and Desktop
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Staff', path: '/staff' },
    { name: 'Clubs', path: '/clubs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    // { name: 'Feedback', path: '/feedback' }
  ];

  return (
    <header className="bg-white py-4 px-6 md:px-12 flex items-center justify-between shadow-sm border-b border-gray-100 relative z-50 font-poppins">
      
      {/* 🔹 LOGO SECTION */}
      <div className="flex items-center gap-3">
         <img src={sports_logo} alt="Logo" width={50} className="object-contain" />
         <div className="flex items-center space-x-2">
          
            <h1 className="text-lg md:text-xl font-bold text-[#00a896]">
              IIT Indore Sports Council
            </h1>
         </div>
      </div>

      {/* 🔹 DESKTOP NAVIGATION */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6 lg:space-x-8 text-gray-600 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link 
                to={link.path} 
                className="hover:text-[#00a896] transition-colors duration-200 text-sm lg:text-base"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* 🔹 MOBILE MENU BUTTON */}
      <div className="md:hidden">
        <button 
          className="text-[#1a1c24] text-3xl focus:outline-none" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      


      {/* sidebar */}

      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* B. The Sidebar Itself */}
      <div 
        className={`fixed top-0 left-0 h-full w-[75%] max-w-sm bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <span className="font-bold text-teal-700 text-lg">Menu</span>
          <button 
            onClick={() => setMenuOpen(false)} 
            className="text-gray-500 hover:text-red-500 transition-colors p-1"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col p-4 space-y-3 overflow-y-auto">
          {navLinks.map((link, index) => (
            <Link 
              key={index}
              to={link.path} 
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-all active:scale-98"
            >
              {link.name}
            </Link>
          ))}
        </div>
      
        </div>
    </header>
  );
};

export default Navbar;