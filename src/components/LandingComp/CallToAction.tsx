import React from 'react';

const CallToAction = () => {
  return (
    <section id="cta" className="py-20 bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="#2563eb" strokeWidth="0.5">
            <animate attributeName="d" dur="8s" repeatCount="indefinite" values="M0,0 L100,0 L100,100 L0,100 Z;M0,50 L100,25 L100,75 L0,50 Z;M0,0 L100,0 L100,100 L0,100 Z"/>
          </path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate__animated animate__fadeInUp">
            Join the LocalLink Community Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
            Start earning while connecting with your community
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate__animated animate__fadeInUp animate__delay-2s">
            <a href="#signup" className="w-full sm:w-auto bg-[#dc2626] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Sign Up Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <span className="text-gray-400 mx-4">or</span>
            <a href="#learn-more" className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-neutral-900 transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
              Learn More
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>2 minute sign up</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Verified members</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Start instantly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;