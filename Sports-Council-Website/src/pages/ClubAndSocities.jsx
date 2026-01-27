import React from 'react';
import { Link } from 'react-router-dom';
import clubs from './Clubsdata.json';

export default function ClubsGallery() {
  return (
    /* pt-28 ensures content starts below the fixed navbar.
       min-h-screen keeps the footer at the bottom. */
    <div className="bg-gray-50 min-h-screen pt-28 pb-16 px-6 md:px-12 font-poppins">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-500 mb-4">
          Sports Clubs
        </h1>
        <div className="w-24 h-1 bg-blue-400 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Welcome to the Sports page! Explore our diverse range of athletic clubs and societies at IIT Indore.
        </p>
      </div>
      
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {clubs.map((club) => (
          <Link 
            to={`/clubsAndSocieties/${club.name}`} 
            key={club.id} 
            className="group no-underline"
          >
            {/* Club Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100">
              
              <div className="relative overflow-hidden">
                <img 
                  src={club.image || "https://imgs.search.brave.com/IwVBQDwOl6ndfg_gEt79gTw0Oza_V68JpuFgCUh8BFI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzA1LzIzLzc4/LzM2MF9GXzgwNTIz/NzgwMV8xYm5oYkZ2/aWl6VVJkSUVGeVRX/NWlDaEFia0k1Y1Vu/WS5qcGc"} 
                  alt={club.name} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                {/* Overlay effect on hover */}
                <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-500 transition-colors duration-300">
                  {club.name}
                </h3>
                <p className="text-blue-400 text-sm font-semibold mt-2 uppercase tracking-wider">
                  View Details →
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}