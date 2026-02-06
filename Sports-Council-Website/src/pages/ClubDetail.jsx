import React from "react";
import { useParams } from "react-router-dom";
import clubs from "./Clubsdata.json";

export default function ClubDetail() {
  const { clubname } = useParams();
  const club = clubs.find((c) => c.name === clubname);

  if (!club)
    return (
      <div className="pt-24 pb-10 text-center font-poppins">
        <h2 className="text-2xl font-bold text-[#1a1c24]">Club not found!</h2>
      </div>
    );

  return (
    <div className="pt-28 pb-16 px-4 md:px-10 min-h-screen font-poppins bg-white flex flex-col items-center">
      <div className="max-w-4xl w-full bg-white p-8 md:p-12 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
        
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-black text-[#1a1c24] mb-8 text-center leading-tight">
          {club.name} <span className="text-[#00a896]">Excellence</span>
        </h1>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src={club.image || "https://via.placeholder.com/800x400"}
            alt={club.name}
            className="w-full max-w-2xl h-auto object-cover rounded-2xl shadow-md border-b-4 border-[#00a896]"
          />
        </div>

        {/* Description */}
        <div className="mt-10">
          <p className="text-lg md:text-xl text-[#4a5568] leading-relaxed text-justify">
            {club.description}
          </p>
        </div>

        <hr className="my-12 border-gray-100" />

        {/* Club Head Section */}
        <div className="mb-16">
          <h3 className="text-center text-xs font-black uppercase tracking-[0.3em] text-[#00a896] mb-8">Club Leadership</h3>
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#00a896] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <img 
                src={club.head?.photo || "https://via.placeholder.com/150"} 
                alt={club.head?.name} 
                className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <h4 className="mt-4 text-2xl font-black text-[#1a1c24]">{club.head?.name || "Lead Name"}</h4>
            <p className="text-[#00a896] font-bold uppercase tracking-widest text-sm">Club Head</p>
          </div>
        </div>

        {/* Members Grid */}
        <div className="mb-12">
          <h3 className="text-center text-xs font-black uppercase tracking-[0.3em] text-[#00a896] mb-8">Core Members</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {club.members?.map((member, index) => (
              <div key={index} className="flex flex-col items-center group">
                <img 
                  src={member.photo || "https://via.placeholder.com/100"} 
                  alt={member.name} 
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-100 group-hover:border-[#00a896] transition-colors duration-300 shadow-sm"
                />
                <p className="mt-3 font-bold text-[#1a1c24] text-center leading-tight">{member.name}</p>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter mt-1">{member.role || "Member"}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Badges */}
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