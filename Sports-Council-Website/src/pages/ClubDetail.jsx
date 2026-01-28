import React from "react";
import { useParams } from "react-router-dom";
import clubs from "./Clubsdata.json";

export default function ClubDetail() {
  const { clubname } = useParams();
  // Find the specific club data based on the URL path
  const club = clubs.find((c) => c.name === clubname);

  if (!club)
    return (
      <div className="pt-24 pb-10 text-center font-poppins">
        <h2 className="text-2xl font-bold text-[#1a1c24]">Club not found!</h2>
      </div>
    );

  return (
    <div className="pt-28 pb-16 px-4 md:px-10 min-h-screen font-poppins bg-white flex flex-col items-center">
      {/* Container for content width control */}
      <div className="max-w-4xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
        {/* Heading using the Navy (#1a1c24) and Teal (#00a896) from the image */}
        <h1 className="text-4xl md:text-5xl font-black text-[#1a1c24] mb-8 text-center leading-tight">
          {club.name} <span className="text-[#00a896]">Excellence</span>
        </h1>

        <div className="flex justify-center">
          <img
            src={
              club.image ||
              "https://imgs.search.brave.com/IwVBQDwOl6ndfg_gEt79gTw0Oza_V68JpuFgCUh8BFI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzA1LzIzLzc4/LzM2MF9GXzgwNTIz/NzgwMV8xYm5oYkZ2/aWl6VVJkSUVGeVRX/NWlDaEFia0k1Y1Vu/WS5qcGc"
            }
            alt={club.name}
            className="w-full max-w-2xl h-auto object-cover rounded-2xl shadow-md transform hover:scale-[1.01] transition-transform duration-500 border-b-4 border-[#00a896]"
          />
        </div>

        <div className="mt-10">
          <p className="text-lg md:text-xl text-[#4a5568] leading-relaxed text-justify">
            {club.description}
          </p>
        </div>

        {/* Placeholder for additional details using the theme colors */}
        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-4">
          <span className="px-6 py-2 bg-[#1a1c24] text-white rounded-full font-bold text-sm tracking-wide">
            Active Club
          </span>
          <span className="px-6 py-2 bg-[#f0fdfa] text-[#00a896] border border-[#00a896]/20 rounded-full font-bold text-sm tracking-wide">
            IIT Indore
          </span>
        </div>
      </div>
    </div>
  );
}
