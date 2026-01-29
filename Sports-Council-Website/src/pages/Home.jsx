import React, { useContext, useEffect } from 'react';
import DisplayContext from '../context/DisplayContext';
import homeBG from '/src/images/image.png'; // Using your existing image variable
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'; // Assuming you use router for the button
import AboutUs from './AboutUs';

export default function Home() {
  const { updates, getUpdates, stats, getStats } = useContext(DisplayContext);

  useEffect(() => {
    getUpdates();
    getStats();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      
     
      <section className="bg-[#f0fdfa] min-h-[90vh] flex items-center px-6 md:px-16 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#009ca6] leading-tight">
              Sports Council
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              IIT Indore
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
              Dedicated to fostering a vibrant sports culture, promoting physical 
              well-being, and achieving excellence in various athletic disciplines at IIT Indore.
            </p>
            
            <div className="pt-4">
              <Link to="/facilities">
                <button className="bg-[#009ca6] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#007c85] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Explore Sports
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img 
              src={homeBG} 
              alt="IIT Indore Sports Team" 
              className="w-full h-auto object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* --- EXISTING SECTIONS (Stats & Updates) --- */}
      
      {/* Stats Section */}
      <div className='bg-white py-16 w-full'>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-12">
            Our Impact
          </h2>
          
          <div className='flex flex-wrap justify-center gap-8'>
            {stats && stats.map((stat, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }} 
                className='bg-gray-50 h-[180px] w-[180px] md:h-[220px] md:w-[220px] flex flex-col justify-center items-center rounded-3xl shadow-sm hover:shadow-md border border-gray-100 cursor-pointer transition-colors hover:bg-blue-50'
              >
                <div className='text-md md:text-lg font-semibold text-gray-500 text-center mb-2'>
                  {stat.Stat_name}
                </div>
                <div className='text-3xl md:text-4xl font-extrabold text-[#009ca6]'>
                  {stat.Stat_number}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Updates Section */}
      <div className='bg-gray-50 py-16 w-full'>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-12">
            Latest Updates
          </h2>
          
          <div className='space-y-6'>
            {updates && updates.map((update, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#009ca6]'
              >
                <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-2'>
                  {update.Title}
                </h3>
                <a 
                  href={update.Link} 
                  target='_blank' 
                  rel="noreferrer"
                  className='text-[#009ca6] hover:text-[#007c85] font-medium underline break-all'
                >
                  View Details &rarr;
                </a>
              </motion.div>
              
            ))}
          </div>
        </div>
      </div>
       <AboutUs/>

    </div>
  );
}