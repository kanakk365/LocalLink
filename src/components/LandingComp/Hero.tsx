import React from 'react';
import { Link } from 'react-router-dom';

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
              Community-Powered Deliveries & Rides
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              Share your travel routes to help neighbors with deliveries or rides. Request items or carpools along existing community routes.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate__animated animate__fadeInUp animate__delay-2s">
              <Link to="/login" className="inline-block bg-[#dc2626] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300">
                Share Your Route
              </Link>
              <Link to="/login" className="inline-block bg-[#2563eb] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                Request a Delivery
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block lg:w-1/2 pl-12 animate__animated animate__fadeInRight">
            <div className="relative">
              <div className="w-full h-96 rounded-xl bg-gradient-to-br from-[#2563eb]/20 to-[#16a34a]/20 backdrop-blur-sm border border-white/10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full p-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/20">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">JD</div>
                          <span className="text-white font-medium">John's Route</span>
                        </div>
                        <span className="text-white/70 text-sm">Today</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex flex-col items-center mr-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="h-12 w-0.5 bg-white/30"></div>
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        </div>
                        <div>
                          <p className="text-white/90">Downtown • 8:00 AM</p>
                          <p className="text-white/90">Business District • 8:45 AM</p>
                        </div>
                      </div>
                      <div className="mt-2 flex justify-between">
                        <span className="text-white/70 text-sm">2 delivery spots available</span>
                        <span className="text-white/70 text-sm">3 seats open</span>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-bold">EM</div>
                          <span className="text-white font-medium">Emma's Request</span>
                        </div>
                        <span className="text-white/70 text-sm">Urgent</span>
                      </div>
                      <p className="text-white/90">Small package delivery needed from Downtown to Business District before 9:00 AM</p>
                      <div className="mt-2 text-green-400 font-medium">
                        Matched with John's route!
                      </div>
                    </div>
                  </div>
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