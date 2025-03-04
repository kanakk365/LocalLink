import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="bg-neutral-900 min-h-[70vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="#2563eb" strokeWidth="0.5">
            <animate attributeName="d" dur="10s" repeatCount="indefinite" values="M0,0 L100,0 L100,100 L0,100 Z;M0,20 L100,10 L100,90 L0,80 Z;M0,0 L100,0 L100,100 L0,100 Z"/>
          </path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate__animated animate__fadeInUp">
              Connect, Deliver, Earn
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              Turn your travels into earning opportunities by delivering items or offering rides along your route
            </p>
            <div className="animate__animated animate__fadeInUp animate__delay-2s">
              <a href="#signup" className="inline-block bg-[#dc2626] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300">
                Get Started
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block lg:w-1/2 pl-12 animate__animated animate__fadeInRight">
            <div className="relative">
              <div className="w-full h-96 rounded-xl bg-gradient-to-br from-[#2563eb]/20 to-[#16a34a]/20 backdrop-blur-sm border border-white/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full p-8 text-white/30" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.5">
                      <animate attributeName="r" values="40;42;40" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <path d="M20,50 Q50,20 80,50" stroke="currentColor" strokeWidth="0.5">
                      <animate attributeName="d" values="M20,50 Q50,20 80,50;M20,50 Q50,80 80,50;M20,50 Q50,20 80,50" dur="5s" repeatCount="indefinite"/>
                    </path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-neutral-900 to-transparent"></div>
    </section>
  );
};

export default Hero;