import React from 'react';
import { useEffect, useState, useRef } from 'react';
import sports_logo from '/src/images/sports_logo.jpeg';
import { FiMenu, FiX } from 'react-icons/fi';

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
       {menuOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-blue-400 text-white flex flex-col items-center justify-center md:hidden z-40'>
          <button onClick={() => setMenuOpen(false)} className='absolute top-5 right-5 text-3xl'>
            <FiX />
          </button>
          <Link to={'/'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to={'/facilities'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Facilities</Link>
          <Link to={'/events'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to={'/staff'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Staff</Link>
          <Link to={'/team'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Team</Link>
          <Link to={'/clubsAndSocities'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Clubs</Link>
          <Link to={'/gallery'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Gallery</Link>
          <Link to={'/contact'} className='p-4 text-xl' onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}

      
        
    </header>
  );
};

export default Navbar;
