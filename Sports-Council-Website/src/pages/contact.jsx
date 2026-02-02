import React, { useState, useContext } from 'react';
import DisplayContext from '../context/DisplayContext';
import ThankYouPopup from './ThankYouPopup';
import clubs from './Clubsdata.json';

export default function Contact() {
  const { SaveMessage } = useContext(DisplayContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate network request or use actual context function
    await SaveMessage(e);
    
    setLoading(false);
    setIsPopupOpen(true);
    e.target.reset();
  };

  return (
    <div className="relative min-h-screen bg-white font-poppins selection:bg-[#00a896] selection:text-white overflow-hidden flex items-center justify-center py-24 px-4">
      
      {/* 🔹 DECORATIVE BACKGROUND BLUR */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00a896] opacity-10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-4xl">
        
        {/* 🔹 HEADER SECTION */}
        <div className="text-center mb-12">
            <span className="text-[#00a896] text-xs font-black uppercase tracking-[0.3em] block mb-3">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-[#1a1c24] leading-none mb-6 tracking-tight">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-[#017a6c]">& Feedback</span>
            </h1>
            <div className="w-20 h-1.5 bg-[#1a1c24] mx-auto rounded-full"></div>
        </div>

        {/* 🔹 MAIN CARD */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-12 relative overflow-hidden">
          
          {/* Top Contact Info Bar (Replaces the black sidebar) */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-2xl p-6 mb-10 border border-gray-100">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
               <div className="w-12 h-12 rounded-full bg-[#e6f6f4] flex items-center justify-center text-[#00a896]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Us</p>
                 <p className="text-[#1a1c24] font-bold text-lg">gs.sports@iiti.ac.in</p>
               </div>
            </div>
            <div className="text-right hidden md:block">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">IITI Sports Council</p>
              <p className="text-[#00a896] font-bold text-sm">We listen to your voice</p>
            </div>
          </div>

          <form onSubmit={handleFormSubmit} className="flex flex-col gap-8">
            
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-xs font-bold text-[#1a1c24] mb-2 uppercase tracking-widest group-focus-within:text-[#00a896] transition-colors">
                  Full Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Enter your name" 
                  required
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 text-[#1a1c24] placeholder-gray-400 font-medium focus:bg-white focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-300"
                />
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-[#1a1c24] mb-2 uppercase tracking-widest group-focus-within:text-[#00a896] transition-colors">
                  Email Address
                </label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="john@example.com" 
                  required
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 text-[#1a1c24] placeholder-gray-400 font-medium focus:bg-white focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Row 2: Phone & Sport Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="block text-xs font-bold text-[#1a1c24] mb-2 uppercase tracking-widest group-focus-within:text-[#00a896] transition-colors">
                  Phone Number
                </label>
                <input 
                  type="number" 
                  name="phone" 
                  placeholder="+91 98765..." 
                  required
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 text-[#1a1c24] placeholder-gray-400 font-medium focus:bg-white focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-300"
                />
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-[#1a1c24] mb-2 uppercase tracking-widest group-focus-within:text-[#00a896] transition-colors">
                  Select Sport / Topic
                </label>
                <div className="relative">
                  <select 
                    name="sport"
                    className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 text-[#1a1c24] font-medium focus:bg-white focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="General Query">General Query</option>
                    {clubs && clubs.map((club, index) => (
                      <option value={club.name} key={index}>{club.name}</option>
                    ))}
                  </select>
                  {/* Custom Arrow Icon */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: Short Summary */}
            <div className="group">
              <label className="block text-xs font-bold text-[#1a1c24] mb-2 uppercase tracking-widest group-focus-within:text-[#00a896] transition-colors">
                Short Summary
              </label>
              <input 
                type="text" 
                name="summary" 
                placeholder="One line description of your query" 
                required
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 text-[#1a1c24] placeholder-gray-400 font-medium focus:bg-white focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-300"
              />
            </div>

            {/* Row 4: Detailed Description */}
            <div className="group">
              <label className="block text-xs font-bold text-[#1a1c24] mb-2 uppercase tracking-widest group-focus-within:text-[#00a896] transition-colors">
                Detailed Description
              </label>
              <textarea 
                name="details" 
                rows="5"
                placeholder="Tell us more..." 
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 text-[#1a1c24] placeholder-gray-400 font-medium focus:bg-white focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={loading}
              className={`w-full font-black py-4 rounded-xl shadow-lg transition-all duration-300 transform uppercase tracking-[0.2em] text-xs mt-2
                ${loading 
                  ? 'bg-gray-200 cursor-not-allowed text-gray-400 shadow-none' 
                  : 'bg-[#1a1c24] hover:bg-[#00a896] text-white hover:shadow-[#00a896]/30 hover:-translate-y-1 active:scale-95'}`}
            >
              {loading ? 'Sending...' : 'Submit Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Popup Component */}
      <ThankYouPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </div>
  );
}