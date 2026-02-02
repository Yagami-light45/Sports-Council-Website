import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import sports_logo from '/src/images/sports_logo.jpeg'; 

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

      {/* 🔹 MOBILE FULLSCREEN MENU */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#1a1c24] text-white flex flex-col items-center justify-center md:hidden z-40">
          
          {/* Close Button */}
          <button 
            onClick={() => setMenuOpen(false)} 
            className="absolute top-6 right-6 text-3xl hover:text-[#00a896] transition-colors"
          >
            <FiX />
          </button>
          
          {/* Mobile Links */}
          <div className="flex flex-col items-center space-y-6">
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.path} 
                className="text-2xl font-semibold hover:text-[#00a896] transition-colors" 
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;