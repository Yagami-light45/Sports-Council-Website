import React from 'react';
import { useParams } from 'react-router-dom';
import clubs from './Clubsdata.json';

export default function ClubDetail() {
  const { clubname } = useParams();
  // Find the specific club data based on the URL path
  const club = clubs.find(c => c.name === clubname);

  if (!club) return (
    <div className="pt-24 pb-10 text-center font-poppins">
      <h2 className="text-2xl font-bold text-gray-800">Club not found!</h2>
    </div>
  );

  return (
   
    <div className="pt-28 pb-16 px-4 md:px-10 min-h-screen font-poppins bg-gray-50 flex flex-col items-center">
      
      {/* Container for content width control */}
      <div className="max-w-4xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-lg">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-500 mb-8 text-center">
          {club.name} Club
        </h1>
        
        <div className="flex justify-center">
          <img 
            src={club.image || "https://imgs.search.brave.com/..."} 
            alt={club.name} 
            className="w-full max-w-2xl h-auto object-cover rounded-[20px] shadow-md transform hover:scale-[1.02] transition-transform duration-300" 
          />
        </div>
        
        <div className="mt-10">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify">
            {club.description}
          </p>
        </div>
        
        {/* Placeholder for additional details */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap justify-center gap-4">
           <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-semibold">Active Club</span>
           <span className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full font-semibold">IIT Indore</span>
        </div>
      </div>
    </div>
  );
};