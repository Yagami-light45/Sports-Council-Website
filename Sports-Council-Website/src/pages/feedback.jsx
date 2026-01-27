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
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-50 py-12 px-4 font-poppins">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Feedback Form</h2>
          <p className="text-gray-500 mt-2">Data will be saved to Excel and emailed to Admin.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Enter your name" 
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
            />
          </div>

          {/* Sport Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Select Sport</label>
            <select 
              name="sport"
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
            >
            { clubs.map((club,index)=>(
              <option value={club.name} key={index}>{club.name}</option>)) }

            </select>
          </div>

          {/* Summary Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Short Summary</label>
            <input 
              type="text" 
              name="summary" 
              placeholder="One line description" 
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200"
            />
          </div>

          {/* Details Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Detailed Description</label>
            <textarea 
              name="details" 
              rows="4"
              placeholder="Tell us more..." 
              className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={status === 'loading'}
            className={`w-full font-bold py-3 rounded-lg shadow-lg transition-all duration-300 transform 
              ${status === 'loading' 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600 text-white hover:-translate-y-1 active:scale-95'}`}
          >
            {status === 'loading' ? 'Submitting...' : 'Submit to Admin'}
          </button>

          {/* Success/Error Feedback */}
          {status === 'success' && (
            <div className="p-3 bg-green-100 text-green-700 rounded-lg text-center font-medium animate-pulse">
              ✓ Successfully saved to Sheet & Email sent!
            </div>
          )}
          {status === 'error' && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg text-center font-medium">
              × Failed to send. Please check your connection.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
