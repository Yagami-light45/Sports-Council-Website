import React from 'react';
import { useEffect, useState, useRef } from 'react';
import sports_logo from '/src/images/sports_logo.jpeg';
import { FiMenu, FiX } from 'react-icons/fi';
import {Link} from 'react-router-dom'

const Navbar = () => {
  const navLinks = ['Home', 'Facilities', 'Events', 'Team','Staff', 'Clubs', 'Gallery', 'Contact'];
 const [menuOpen,setMenuOpen]=useState(false);
  return (
    <header className="bg-white py-4 px-6 md:px-12 flex items-center justify-between shadow-sm border-b border-gray-100">
      <img src={sports_logo} alt="Logo" width={60} />
      <div className="flex items-center space-x-2">
        
        <div className="bg-sport-teal p-1.5 rounded text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
            </svg>
        </div>
        <h1 className="text-xl font-bold text-sport-teal">
          IIT Indore Sports Council
        </h1>
      </div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-gray-600 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={`/${link.toLowerCase()}`} className="hover:text-sport-teal 
              hover:opacity-50 active:opacity-50 transition-all duration-200">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Button (Hidden on desktop) */}
      <div className="md:hidden">
        <button className="text-gray-600 hover:opacity-70 active:opacity-50 transition-all duration-200" onClick={() => setMenuOpen(!menuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
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
              to={`${link.toLowerCase()}`} 
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-gray-50 text-gray-700 font-semibold py-3 px-4 rounded-lg hover:bg-teal-50 hover:text-teal-700 transition-all active:scale-98"
            >
              {link}
            </Link>
          ))}
        </div>
      
        </div>
    </header>
  );
};

export default Navbar;
