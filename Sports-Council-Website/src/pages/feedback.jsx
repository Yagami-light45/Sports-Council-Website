import React, { useState } from 'react';
import clubs from './Clubsdata.json';

export default function Feedback() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const scriptURL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL'; // <--- PASTE YOUR URL HERE
    const formData = new FormData(e.target);

    try {
      await fetch(scriptURL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors', // Essential for Google Script redirection
      });
      
      setStatus('success');
      e.target.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error!', error.message);
      setStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen bg-white font-poppins selection:bg-[#00a896] selection:text-white overflow-hidden flex items-center justify-center py-20 px-4">
      
      {/* 🔹 DECORATIVE BACKGROUND BLUR (Matches Team Page) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#00a896] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-lg">
        
        {/* 🔹 HEADER SECTION */}
        <div className="text-center mb-10">
            <span className="text-[#00a896] text-xs font-black uppercase tracking-[0.3em] block mb-3">
              We Value Your Voice
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-[#1a1c24] leading-none mb-4 tracking-tight">
              Feedback <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a896] to-[#017a6c]">Form</span>
            </h1>
            <div className="w-16 h-1.5 bg-[#1a1c24] mx-auto rounded-full"></div>
        </div>

        {/* 🔹 FORM CARD */}
        <div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-10 relative">
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            {/* Name Field */}
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

            {/* Sport Selection */}
            <div className="group">
              <label className="block text-xs font-bold text-[#1a1c24] mb-2 uppercase tracking-widest group-focus-within:text-[#00a896] transition-colors">
                Select Sport
              </label>
              <div className="relative">
                <select 
                  name="sport"
                  className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 text-[#1a1c24] font-medium focus:bg-white focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-300 appearance-none cursor-pointer"
                >
                  {clubs.map((club, index) => (
                    <option value={club.name} key={index}>{club.name}</option>
                  ))}
                </select>
                {/* Custom Arrow Icon */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Summary Field */}
            <div className="group">
              <label className="block text-xs font-bold text-[#1a1c24] mb-2 uppercase tracking-widest group-focus-within:text-[#00a896] transition-colors">
                Short Summary
              </label>
              <input 
                type="text" 
                name="summary" 
                placeholder="One line description" 
                required
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 text-[#1a1c24] placeholder-gray-400 font-medium focus:bg-white focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-300"
              />
            </div>

            {/* Details Field */}
            <div className="group">
              <label className="block text-xs font-bold text-[#1a1c24] mb-2 uppercase tracking-widest group-focus-within:text-[#00a896] transition-colors">
                Detailed Description
              </label>
              <textarea 
                name="details" 
                rows="4"
                placeholder="Tell us more about your experience..." 
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-100 text-[#1a1c24] placeholder-gray-400 font-medium focus:bg-white focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-300 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className={`w-full font-black py-4 rounded-full shadow-lg transition-all duration-300 transform uppercase tracking-[0.2em] text-xs mt-2
                ${status === 'loading' 
                  ? 'bg-gray-200 cursor-not-allowed text-gray-400 shadow-none' 
                  : 'bg-[#1a1c24] hover:bg-[#00a896] text-white hover:shadow-[#00a896]/30 hover:-translate-y-1 active:scale-95'}`}
            >
              {status === 'loading' ? 'Sending...' : 'Submit Feedback'}
            </button>

            {/* Success/Error Feedback */}
            {status === 'success' && (
              <div className="p-4 bg-[#f0fdfa] text-[#00a896] border border-[#00a896]/20 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2 animate-bounce">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Message Sent Successfully!
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-600 border border-red-100 rounded-xl text-center text-sm font-bold flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                Failed to send. Please check connectivity.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}