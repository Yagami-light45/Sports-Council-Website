import { useState } from "react";
import TeamMembers from "./Team.json"; 

export default function Team() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryMap = {
    "opnl": "OPnL",
    "web-dev": "Web Dev",
    "video-production": "Video Production",
    "creatives": "Content, Creatives and Social Media",
    "marketing": "Marketing",
    "thinkTank": "Think-Tank" 
  };

  // 1. HELPER: Fixes Google Drive Links
  const getGoogleDriveImage = (link) => {
    if (!link) return "https://via.placeholder.com/200";
    const idMatch = link.match(/id=([^&]+)/);
    if (idMatch && idMatch[1]) {
        return `https://drive.google.com/thumbnail?id=${idMatch[1]}&sz=w1000`;
    }
    return link;
  };

  // 2. HELPER: Fixes Social Links
  const getSocialLink = (link, platform) => {
    if (!link || link === "Not use" || link === "null") return null;
    if (link.startsWith("http")) return link;
    if (platform === "instagram") return `https://www.instagram.com/${link}`;
    if (platform === "linkedin") return `https://www.linkedin.com/in/${link}`;
    return link;
  };

  // 3. HELPER: Determines priority of roles for sorting
  const getRoleRank = (role) => {
    const r = (role || "").toLowerCase();
    
    // Priority 1: Head (but not Co-Head)
    if (r.includes("head") && !r.includes("co-head")) return 1;
    
    // Priority 2: Co-Head
    if (r.includes("co-head")) return 2;
    
    // Priority 3: Member
    if (r.includes("member")) return 3;
    
    // Priority 4: Volunteer
    if (r.includes("volunteer")) return 4;
    
    // Priority 5: Everyone else
    return 5;
  };

  const groups = [
    { key: "opnl", title: "OPNL Team", subtitle: "Operations & Logistics", id: "01", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
    { key: "web-dev", title: "Web-Dev Team", subtitle: "Development & Tech", id: "02", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" },
    { key: "video-production", title: "Video Production", subtitle: "Cinematography", id: "03", img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800" },
    { key: "creatives", title: "Creatives & Socials", subtitle: "Design & Media", id: "04", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" },
    { key: "marketing", title: "Marketing Team", subtitle: "Outreach & PR", id: "05", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" },
    { key: "thinkTank", title: "Think-Tank", subtitle: "Strategy & Innovation", id: "06", img: "https://images.unsplash.com/photo-1553484771-371af272670c?auto=format&fit=crop&q=80&w=800" },
  ];

  const activeGroupData = groups.find((g) => g.key === selectedCategory);

  // 🔹 LOGIC UPDATE: Filter AND Sort
  const activeMembers = selectedCategory !== "All"
    ? TeamMembers
        .filter((member) => member.Team === categoryMap[selectedCategory])
        .sort((a, b) => getRoleRank(a.role) - getRoleRank(b.role)) // Sort by rank (1 -> 5)
    : [];

  return (
    <div className="pt-28 pb-20 min-h-screen font-poppins bg-white selection:bg-[#00a896] selection:text-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 flex flex-col items-center">
        
        {/* HEADER */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#00a896] opacity-10 blur-3xl rounded-full pointer-events-none"></div>
          <span className="text-[#00a896] text-xs font-black uppercase tracking-[0.4em] block mb-3 relative z-10">The Backbone</span>
          <h1 className="text-5xl md:text-7xl font-black text-[#1a1c24] leading-none mb-6 relative z-10 tracking-tight">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-[#017a6c]">Team</span>
          </h1>
          <div className="w-20 h-1.5 bg-[#1a1c24] mx-auto rounded-full relative z-10"></div>
        </div>

        {/* TABS */}
        <div className="mb-16 w-full overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex justify-center min-w-max gap-3 md:gap-4 px-2">
            <button onClick={() => setSelectedCategory("All")} className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${selectedCategory === "All" ? "bg-[#1a1c24] border-[#1a1c24] text-white shadow-lg scale-105" : "bg-white border-gray-200 text-gray-500 hover:border-[#00a896] hover:text-[#00a896]"}`}>All Teams</button>
            {groups.map((group) => (
              <button key={group.key} onClick={() => setSelectedCategory(group.key)} className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${selectedCategory === group.key ? "bg-[#1a1c24] border-[#1a1c24] text-white shadow-lg scale-105" : "bg-white border-gray-200 text-gray-500 hover:border-[#00a896] hover:text-[#00a896]"}`}>
                {group.title.replace(" Team", "")}
              </button>
            ))}
          </div>
        </div>

        {/* CONTENT */}
        <div className="w-full min-h-[400px]">
          {selectedCategory === "All" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
              {groups.map((group, index) => (
                <div key={group.key} onClick={() => setSelectedCategory(group.key)} style={{ animationDelay: `${index * 100}ms` }} className="group cursor-pointer bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,168,150,0.15)] transition-all duration-500 overflow-hidden flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img src={group.img} alt={group.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#1a1c24]/10 group-hover:bg-[#1a1c24]/0 transition-colors"></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg border border-gray-100"><span className="text-[#1a1c24] font-black text-xs">{group.id}</span></div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col items-start">
                    <span className="text-[#00a896] text-[10px] font-black uppercase tracking-widest mb-2">{group.subtitle}</span>
                    <h3 className="text-2xl font-black text-[#1a1c24] mb-3 leading-tight">{group.title}</h3>
                    <div className="mt-auto pt-4 flex items-center text-[#1a1c24] font-bold text-sm group-hover:text-[#00a896] transition-colors">View Members <span className="ml-2">→</span></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="animate-slideUp space-y-12">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-center text-3xl font-black text-[#1a1c24] mb-12">{activeGroupData?.title} <span className="text-[#00a896]">Members</span></h3>
                {activeMembers.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 justify-items-center">
                    {activeMembers.map((member, idx) => {
                      const instaLink = getSocialLink(member["Instagram Profile link"], "instagram");
                      const linkedinLink = getSocialLink(member["Linkedin Profile link"], "linkedin");

                      return (
                        <div key={idx} className="group flex flex-col items-center animate-slideUp" style={{ animationDelay: `${idx * 100}ms` }}>
                          <div className="relative mb-6">
                            <div className="absolute -inset-2 rounded-full border border-dashed border-[#00a896] opacity-30 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-700"></div>
                            
                            <img
                              src={getGoogleDriveImage(member.img)}
                              alt={member.name}
                              referrerPolicy="no-referrer"
                              className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] group-hover:scale-105 transition-transform duration-500 bg-gray-100"
                              onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=No+Image"; }}
                            />

                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                                {instaLink && (
                                  <a href={instaLink} target="_blank" rel="noopener noreferrer" className="bg-white text-[#E4405F] p-2 rounded-full border border-gray-100 shadow-md hover:scale-110 hover:bg-[#E4405F] hover:text-white transition-all duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                                  </a>
                                )}
                                {linkedinLink && (
                                  <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="bg-white text-[#0077b5] p-2 rounded-full border border-gray-100 shadow-md hover:scale-110 hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.321c0-4.608 5.472-4.474 5.472 0v8.321h5v-9.643c0-6.918-7.416-6.671-9.356-3.791v-2.887z"/></svg>
                                  </a>
                                )}
                            </div>
                          </div>
                          <div className="text-center">
                            <h3 className="text-xl font-black text-[#1a1c24] mb-1 group-hover:text-[#00a896] transition-colors">{member.name}</h3>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px]">{member.role}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 opacity-50 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50">
                    <svg className="w-12 h-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <h3 className="text-lg font-bold text-gray-400">Members coming soon</h3>
                  </div>
                )}
              </div>
              <div className="flex justify-center pt-8">
                <button onClick={() => setSelectedCategory("All")} className="px-8 py-3 bg-gray-100 hover:bg-[#1a1c24] hover:text-white text-gray-600 rounded-xl font-bold uppercase tracking-widest text-xs transition-all duration-300">Back to All Teams</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}