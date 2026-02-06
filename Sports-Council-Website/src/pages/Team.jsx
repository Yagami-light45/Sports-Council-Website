import { useState } from "react";

/* 🔹 MOCK DATA FOR MEMBERS */
const dummyTeamMembers = {
  opnl: [
    { name: "Aarav Patel", role: "Head of Operations", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop" },
    { name: "Sneha Gupta", role: "Logistics Lead", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" },
    { name: "Mike Ross", role: "Coordinator", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" },
  ],
  "web-dev": [
    { name: "Sarah Lee", role: "Tech Lead", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop" },
    { name: "David Kim", role: "Frontend Dev", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop" },
  ],
  // Add other keys matching the groups 'key' property below...
};

export default function Team() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const groups = [
    { 
      key: "opnl", 
      title: "OPNL Team", 
      subtitle: "Operations & Logistics", 
      id: "01", 
     
     
    },
    { 
      key: "web-dev", 
      title: "Web-Dev Team", 
      subtitle: "Development & Tech", 
      id: "02", 
    
    },
    {
      key: "video-production",
      title: "Video Production",
      subtitle: "Cinematography",
      id: "03",
      
    },
    {
      key: "creatives",
      title: "Creatives & Socials",
      subtitle: "Design & Media",
      id: "04",
    
    },
    { 
      key: "marketing", 
      title: "Marketing Team", 
      subtitle: "Outreach & PR", 
      id: "05", 
     
    },
    { 
      key: "thinkTank", 
      title: "Think-Tank", 
      subtitle: "Strategy & Innovation", 
      id: "06", 
  
    },
  ];

  // Helper to get current group details
  const activeGroupData = groups.find(g => g.key === selectedCategory);
  // Get members for the selected group
  const activeMembers = selectedCategory !== "All" ? (dummyTeamMembers[selectedCategory] || []) : [];

  return (
    <div className="pt-28 pb-20 min-h-screen font-poppins bg-white selection:bg-[#00a896] selection:text-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 flex flex-col items-center">

        {/* 🔹 HEADER SECTION */}
        <div className="text-center mb-16 relative">
            {/* Decorative Background Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#00a896] opacity-10 blur-3xl rounded-full pointer-events-none"></div>
            
            <span className="text-[#00a896] text-xs font-black uppercase tracking-[0.4em] block mb-3 relative z-10">
              The Backbone
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-[#1a1c24] leading-none mb-6 relative z-10 tracking-tight">
              Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-[#017a6c]">Team</span>
            </h1>
            <div className="w-20 h-1.5 bg-[#1a1c24] mx-auto rounded-full relative z-10"></div>
        </div>

        {/* 🔹 NAVIGATION TABS */}
        <div className="mb-16 w-full overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex justify-center min-w-max gap-3 md:gap-4 px-2">
            {/* 'All' Button */}
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                selectedCategory === "All"
                  ? "bg-[#1a1c24] border-[#1a1c24] text-white shadow-lg scale-105"
                  : "bg-white border-gray-200 text-gray-500 hover:border-[#00a896] hover:text-[#00a896]"
              }`}
            >
              All Teams
            </button>
            
            {/* Dynamic Team Buttons */}
            {groups.map((group) => (
              <button
                key={group.key}
                onClick={() => setSelectedCategory(group.key)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                  selectedCategory === group.key
                    ? "bg-[#1a1c24] border-[#1a1c24] text-white shadow-lg scale-105"
                    : "bg-white border-gray-200 text-gray-500 hover:border-[#00a896] hover:text-[#00a896]"
                }`}
              >
                {group.title.replace(" Team", "")}
              </button>
            ))}
          </div>
        </div>

        {/* 🔹 DYNAMIC CONTENT AREA */}
        <div className="w-full min-h-[400px]">
          
          {selectedCategory === "All" ? (
            /* --- GRID VIEW (All Teams) --- */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
              {groups.map((group, index) => (
                <div
                  key={group.key}
                  onClick={() => setSelectedCategory(group.key)}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="group cursor-pointer bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,168,150,0.15)] transition-all duration-500 overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={group.img}
                      alt={group.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#1a1c24]/10 group-hover:bg-[#1a1c24]/0 transition-colors"></div>
                    {/* ID Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg border border-gray-100">
                       <span className="text-[#1a1c24] font-black text-xs">{group.id}</span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col items-start">
                    <span className="text-[#00a896] text-[10px] font-black uppercase tracking-widest mb-2">
                      {group.subtitle}
                    </span>
                    <h3 className="text-2xl font-black text-[#1a1c24] mb-3 leading-tight">
                      {group.title}
                    </h3>
                    <div className="mt-auto pt-4 flex items-center text-[#1a1c24] font-bold text-sm group-hover:text-[#00a896] transition-colors">
                      View Members <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* --- DETAILED MEMBER VIEW (Specific Team) --- */
            <div className="animate-slideUp space-y-12">
              
              {/* 1. Feature Card (Team Info) */}
              
              {/* 2. Members Grid */}
              <div className="max-w-5xl mx-auto">
                 <h3 className="text-center text-3xl font-black text-[#1a1c24] mb-12">
                    Team <span className="text-[#00a896]">Members</span>
                 </h3>

                 {activeMembers.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 justify-items-center">
                       {activeMembers.map((member, idx) => (
                          <div 
                             key={idx} 
                             className="group flex flex-col items-center animate-slideUp"
                             style={{ animationDelay: `${idx * 100}ms` }}
                          >
                             {/* Avatar */}
                             <div className="relative mb-6">
                                <div className="absolute -inset-2 rounded-full border border-dashed border-[#00a896] opacity-30 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-700"></div>
                                <img 
                                    src={member.img || "https://via.placeholder.com/200"} 
                                    alt={member.name} 
                                    className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute bottom-1 right-1 bg-[#1a1c24] text-white p-2 rounded-full border-2 border-white shadow-lg group-hover:bg-[#00a896] transition-colors duration-300">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                             </div>

                             {/* Text Info */}
                             <div className="text-center">
                                <h3 className="text-xl font-black text-[#1a1c24] mb-1 group-hover:text-[#00a896] transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">
                                    {member.role}
                                </p>
                             </div>
                          </div>
                       ))}
                    </div>
                 ) : (
                    <div className="flex flex-col items-center justify-center py-16 opacity-50 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50">
                        <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h3 className="text-lg font-bold text-gray-400">Members coming soon</h3>
                    </div>
                 )}
              </div>
              
              <div className="flex justify-center pt-8">
                 <button 
                    onClick={() => setSelectedCategory("All")}
                    className="px-8 py-3 bg-gray-100 hover:bg-[#1a1c24] hover:text-white text-gray-600 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300"
                 >
                    Back to All Teams
                 </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}