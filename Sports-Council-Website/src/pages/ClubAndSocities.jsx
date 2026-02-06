import React from "react";
import { Link } from "react-router-dom";
import clubs from "./Clubsdata.json";

export default function ClubsGallery() {
  return (
    /* pt-28 ensures content starts below the fixed navbar.
       min-h-screen keeps the footer at the bottom. */
    <div className="bg-white min-h-screen pt-28 pb-16 px-6 md:px-12 font-poppins">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-[#1a1c24] mb-4 tracking-tight">
          Sports <span className="text-[#00a896]">Clubs</span>
        </h1>
        <div className="w-24 h-1.5 bg-[#00a896] mx-auto mb-8 rounded-full"></div>
        <p className="text-[#4a5568] text-lg max-w-2xl mx-auto leading-relaxed">
          Welcome to the Sports page! Explore our diverse range of athletic
          clubs and societies at IIT Indore.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {clubs.map((club) => (
          <Link
            to={`/clubs/${club.name}`}
            key={club.id}
            className="group no-underline"
          >
            {/* Club Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,168,150,0.15)] transition-all duration-500 transform group-hover:-translate-y-3 border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={
                    club.image ||
                    "https://imgs.search.brave.com/IwVBQDwOl6ndfg_gEt79gTw0Oza_V68JpuFgCUh8BFI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzA1LzIzLzc4/LzM2MF9GXzgwNTIz/NzgwMV8xYm5oYkZ2/aWl6VVJkSUVGeVRX/NWlDaEFia0k1Y1Vu/WS5qcGc"
                  }
                  alt={club.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay effect on hover using the Teal theme color */}
                <div className="absolute inset-0 bg-[#00a896] bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500" />

                {/* Subtle bottom gradient on image */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-8 text-center bg-white">
                <h3 className="text-2xl font-black text-[#1a1c24] group-hover:text-[#00a896] transition-colors duration-300">
                  {club.name}
                </h3>
                <div className="mt-4 flex justify-center items-center">
                  <p className="text-[#00a896] text-xs font-bold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300">
                    View Details
                  </p>
                  <span className="ml-2 text-[#00a896] transform group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
