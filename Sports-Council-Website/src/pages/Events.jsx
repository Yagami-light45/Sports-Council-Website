import DisplayContext from '../context/DisplayContext';
import { useContext, useEffect, useState } from 'react';
import img1 from "../images/1.jpg"


/* 🔹 DATA OBJECT WITH UPDATED IMAGES */
const categoryContent = {
  "JOSH 2.0": {
    title: "JOSH ",
    img: img1,
    tagline: "Unleash the Fire Within",
    description: "JOSH 2.0 is the annual sports fest of IIT Indore featuring high-energy competitions, inter-college participation, and a celebration of sportsmanship."
  },
  "General Championship": {
    title: "General Championship",
    img: img1,
    tagline: "The Ultimate Battle for Glory",
    description: "The General Championship is a year-long competition among hostels across multiple sports to crown the best overall hostel."
  },
  "Inter Hostel": {
    title: "Inter Hostel",
    img: img1,
    tagline: "Unity through Competition",
    description: "Inter Hostel tournaments encourage competitive spirit among hostels in various indoor and outdoor sports."
  },
 

};

export default function Events() {
  const { getEvents } = useContext(DisplayContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="pt-28 pb-20 min-h-screen font-poppins bg-white selection:bg-[#00a896] selection:text-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 flex flex-col items-center">

        {/* 🔹 HEADER SECTION */}
        <div className="text-center mb-16 relative">
          {/* Decorative Background Blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[#00a896] opacity-10 blur-3xl rounded-full pointer-events-none"></div>
          
          <span className="text-[#00a896] text-xs font-black uppercase tracking-[0.4em] block mb-3 relative z-10">
            Institutional Spirit
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#1a1c24] leading-none mb-6 relative z-10 tracking-tight">
            Flagship <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-[#017a6c]">Events</span>
          </h1>
          <div className="w-20 h-1.5 bg-[#1a1c24] mx-auto rounded-full relative z-10"></div>
        </div>

        {/* 🔹 NAVIGATION TABS */}
        <div className="mb-16 w-full overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex justify-center min-w-max gap-3 md:gap-4 px-2">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                selectedCategory === "All"
                  ? "bg-[#1a1c24] border-[#1a1c24] text-white shadow-lg scale-105"
                  : "bg-white border-gray-200 text-gray-500 hover:border-[#00a896] hover:text-[#00a896]"
              }`}
            >
              All Events
            </button>
            {Object.keys(categoryContent).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 border-2 ${
                  selectedCategory === key
                    ? "bg-[#1a1c24] border-[#1a1c24] text-white shadow-lg scale-105"
                    : "bg-white border-gray-200 text-gray-500 hover:border-[#00a896] hover:text-[#00a896]"
                }`}
              >
                {key}
              </button>
            ))}
          </div>
        </div>

        {/* 🔹 DYNAMIC CONTENT AREA */}
        <div className="w-full min-h-[400px]">
          
          {selectedCategory === "All" ? (
            /* --- GRID VIEW (When "All" is selected) --- */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
              {Object.entries(categoryContent).map(([key, data], index) => (
                <div 
                  key={key} 
                  onClick={() => setSelectedCategory(key)}
                  className="group cursor-pointer bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgba(0,168,150,0.15)] transition-all duration-500 overflow-hidden flex flex-col h-full"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img src={data.img} alt={data.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[#1a1c24]/20 group-hover:bg-[#1a1c24]/0 transition-colors"></div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col items-start">
                    <span className="text-[#00a896] text-[10px] font-black uppercase tracking-widest mb-2">{data.tagline}</span>
                    <h3 className="text-2xl font-black text-[#1a1c24] mb-3 leading-tight">{data.title}</h3>
                    <div className="mt-auto pt-4 flex items-center text-[#1a1c24] font-bold text-sm group-hover:text-[#00a896] transition-colors">
                      Read More <span className="ml-2">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* --- DETAILED VIEW (When Specific Category is selected) --- */
            <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden flex flex-col md:flex-row animate-slideUp">
              
              {/* Image Side */}
              <div className="md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
                <img
                  src={categoryContent[selectedCategory].img}
                  alt={categoryContent[selectedCategory].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c24]/30 to-transparent mix-blend-multiply"></div>
                
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                  <span className="text-[#1a1c24] font-bold text-xs uppercase tracking-wide">
                    Featured Event
                  </span>
                </div>
              </div>

              {/* Text Side */}
              <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white relative">
                <div className="absolute top-4 right-6 text-9xl font-black text-gray-50 opacity-50 select-none pointer-events-none">
                  {selectedCategory.charAt(0)}
                </div>

                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 mb-4 border border-[#00a896] rounded-full">
                    <span className="text-[#00a896] font-bold uppercase tracking-[0.1em] text-xs">
                      {categoryContent[selectedCategory].tagline}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1c24] mb-8 leading-[1.1]">
                    {categoryContent[selectedCategory].title}
                  </h2>
                  
                  <p className="text-lg text-gray-500 leading-relaxed text-justify mb-10 font-medium">
                    {categoryContent[selectedCategory].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-[#1a1c24] text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#00a896] hover:-translate-y-1 transition-all duration-300 shadow-xl">
                      View Details
                    </button>
                  
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}