import React from 'react';
import { motion } from "framer-motion";

const AboutUs = ({ stats }) => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 w-full" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <span className="h-1 w-12 bg-[#009ca6]"></span>
            <span className="text-[#009ca6] font-bold uppercase tracking-wider text-sm">Who We Are</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Building a Legacy of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009ca6] to-teal-500">
              Sports Excellence
            </span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            The Sports Council of IIT Indore manages a wide array of sports and fitness clubs, 
            promoting an active lifestyle on campus. We believe that sports are not just about 
            winning, but about character building, teamwork, and resilience.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Each year, we host major events like <strong>Lakshya</strong>, <strong>Josh</strong>, and the <strong>General Championship</strong>, 
            highlighting student talent and fostering a spirit of healthy competition.
          </p>

          <button className="text-[#009ca6] font-semibold flex items-center group">
            Learn More About Our Team 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </motion.div>

        {/* Right Side: Dynamic Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats && stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#009ca6]/30 transition-all text-center group"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-[#009ca6] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.Stat_number}
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base uppercase tracking-wide">
                {stat.Stat_name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutUs;