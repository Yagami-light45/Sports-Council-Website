import DisplayContext from '../context/DisplayContext'
import { useContext } from 'react'
import ThankYouPopup from './ThankYouPopup';
import { useState } from 'react';

export default function Contact() {
  const { SaveMessage } = useContext(DisplayContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const handleFormSubmit = async (e) => {
    await SaveMessage(e); 
    setIsPopupOpen(true);
  };

  return (
    // 1. Page Background updated to Mint (#f0fdfa)
    <div className='pt-[100px] w-full p-5 sm:p-20 bg-[#f0fdfa] min-h-screen'>
      <div className='w-full h-full flex justify-center'>
        
        {/* 2. Main Container updated to White with softer border/shadow */}
        <div className='w-full max-w-6xl border border-gray-100 rounded-2xl flex flex-col items-center justify-center p-8 sm:p-16 shadow-xl bg-white'>

          {/* Contact Header */}
          <h2 className='text-3xl md:text-4xl font-bold p-5 text-center text-gray-900'>Contact Us</h2>
          <p className='text-center text-gray-600 px-5'>Feel free to contact us! Submit your queries here, we will listen.</p>

          {/* Contact Options */}
          <div className='flex flex-wrap md:flex-nowrap justify-center gap-6 w-full mt-12'>

            {/* Phone Contact Card - Updated to Teal (#009ca6) */}
            <div className='bg-[#009ca6] p-8 rounded-2xl flex flex-col justify-between items-start h-[220px] w-full md:w-[360px] shadow-md hover:-translate-y-1 transition-transform duration-300'>
              <div>
                <p className='text-white text-md my-1 opacity-90'>Call Us Directly At</p>
                <p className='text-white text-2xl my-1 font-bold'>+91 123 4567 890</p>
              </div>
              <button className='text-[#009ca6] font-bold text-md px-4 py-3 bg-white rounded-lg w-full text-center hover:bg-gray-50 transition-colors'>Contact Us</button>
            </div>

            {/* Email Contact Card - Updated to Teal (#009ca6) for consistency */}
            <div className='bg-[#009ca6] p-8 rounded-2xl flex flex-col justify-between items-start h-[220px] w-full md:w-[360px] shadow-md hover:-translate-y-1 transition-transform duration-300'>
              <div>
                <p className='text-white text-md my-1 opacity-90'>Chat with our team</p>
                <p className='text-white text-2xl my-1 font-bold'>gs.sports@iiti.ac.in</p>
              </div>
              <button className='text-[#009ca6] font-bold text-md px-4 py-3 bg-white rounded-lg w-full text-center hover:bg-gray-50 transition-colors'>Contact Us</button>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleFormSubmit} className='flex flex-col w-full md:w-[600px] mt-12 gap-6'>
            <input 
              type="text" 
              name="name" 
              id="name" 
              className="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#009ca6] focus:border-[#009ca6] focus:outline-none block w-full p-4 transition-all" 
              placeholder="Name" 
              required 
            />
            
            <div className='flex flex-col md:flex-row gap-6'>
              <input 
                type="email" 
                name="email" 
                id="email" 
                className="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#009ca6] focus:border-[#009ca6] focus:outline-none block w-full md:w-1/2 p-4 transition-all" 
                placeholder="Email" 
                required 
              />
              <input 
                type="number" 
                name="phone" 
                id="phone" 
                className="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#009ca6] focus:border-[#009ca6] focus:outline-none block w-full md:w-1/2 p-4 transition-all" 
                placeholder="Phone Number" 
                required 
              />
            </div>

            <textarea 
              id="message" 
              name='message' 
              rows="6" 
              className="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#009ca6] focus:border-[#009ca6] focus:outline-none block w-full p-4 transition-all" 
              placeholder="Message Here..."
            ></textarea>
            
            <button 
              type="submit" 
              className='w-full bg-[#009ca6] text-white font-bold py-4 rounded-lg hover:bg-[#007c85] transition-all duration-300 shadow-md'
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
      <ThankYouPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </div>
  )
}