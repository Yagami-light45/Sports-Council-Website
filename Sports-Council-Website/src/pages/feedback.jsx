import React, { useState } from 'react';
import clubs from './Clubsdata.json'

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
    <div className="flex items-center justify-center min-h-[80vh] bg-white py-12 px-4 font-poppins">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-8 border border-gray-50">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-[#1a1c24]">
            Feedback <span className="text-[#00a896]">Form</span>
          </h2>
          <div className="w-12 h-1 bg-[#00a896] mx-auto mt-2 rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-bold text-[#1a1c24] mb-2 uppercase tracking-wide">Full Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-200"
            />
          </div>

          {/* Sport Selection */}
          <div>
            <label className="block text-sm font-bold text-[#1a1c24] mb-2 uppercase tracking-wide">Select Sport</label>
            <select 
              name="sport"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-200 appearance-none cursor-pointer"
            >
            { clubs.map((club,index)=>(
              <option value={club.name} key={index}>{club.name}</option>)) }
            </select>
          </div>

          {/* Summary Field */}
          <div>
            <label className="block text-sm font-bold text-[#1a1c24] mb-2 uppercase tracking-wide">Short Summary</label>
            <input 
              type="text" 
              name="summary" 
              placeholder="One line description" 
              required
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-200"
            />
          </div>

          {/* Details Field */}
          <div>
            <label className="block text-sm font-bold text-[#1a1c24] mb-2 uppercase tracking-wide">Detailed Description</label>
            <textarea 
              name="details" 
              rows="4"
              placeholder="Tell us more..." 
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-[#00a896] focus:ring-4 focus:ring-[#00a896]/10 outline-none transition-all duration-200 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className={`w-full font-black py-4 rounded-xl shadow-lg transition-all duration-300 transform uppercase tracking-widest text-sm
              ${status === 'loading' 
                ? 'bg-gray-300 cursor-not-allowed text-gray-500' 
                : 'bg-[#1a1c24] hover:bg-[#00a896] text-white hover:-translate-y-1 active:scale-95'}`}
          >
            {status === 'loading' ? 'Submitting...' : 'Submit to Admin'}
          </button>

          {/* Success/Error Feedback */}
          {status === 'success' && (
            <div className="p-4 bg-[#f0fdfa] text-[#00a896] border border-[#00a896]/20 rounded-xl text-center font-bold animate-bounce">
              ✓ Message Sent Successfully!
            </div>
          )}
          {status === 'error' && (
            <div className="p-4 bg-red-50 text-red-600 border border-red-100 rounded-xl text-center font-bold">
              × Failed to send. Please check your connection.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}