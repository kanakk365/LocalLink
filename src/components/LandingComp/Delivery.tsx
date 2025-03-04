import React from 'react';

const Delivery = () => {
  return (
    <section id="delivery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Deliver and Earn</h2>
          <p className="text-xl text-neutral-600">Add your travel route and receive delivery requests from others</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl bg-neutral-100 p-8 animate__animated animate__fadeInLeft">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="origin">Origin</label>
                <input type="text" id="origin" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition" placeholder="Enter pickup location" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="destination">Destination</label>
                <input type="text" id="destination" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition" placeholder="Enter drop-off location" />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="date">Date</label>
                <input type="date" id="date" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition" />
              </div>

              <button type="submit" className="w-full bg-[#2563eb] text-white py-3 px-6 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                Add Delivery Route
              </button>
            </form>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden animate__animated animate__fadeInRight">
            <div className="absolute inset-0 bg-neutral-100">
              <div className="w-full h-full" id="delivery-map">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <svg className="absolute w-full h-full text-[#2563eb]/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" fill="none" strokeWidth="2">
                        <animate attributeName="d" dur="5s" repeatCount="indefinite" 
                          values="M0,50 Q25,25 50,50 T100,50;
                                  M0,50 Q25,75 50,50 T100,50;
                                  M0,50 Q25,25 50,50 T100,50"/>
                      </path>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-neutral-500">Interactive Map Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;