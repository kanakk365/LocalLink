import React from 'react';

const Carpool = () => {
  return (
    <section id="carpool" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Offer Rides and Save</h2>
          <p className="text-xl text-neutral-600">Share your journey and earn by offering seats in your car</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 animate__animated animate__fadeInRight">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="ride-origin">Starting Point</label>
                  <input type="text" id="ride-origin" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition" placeholder="Enter pickup location" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="ride-destination">Destination</label>
                  <input type="text" id="ride-destination" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition" placeholder="Enter drop-off location" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="ride-date">Date</label>
                    <input type="date" id="ride-date" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="available-seats">Available Seats</label>
                    <select id="available-seats" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#16a34a] focus:border-transparent transition">
                      <option value="1">1 Seat</option>
                      <option value="2">2 Seats</option>
                      <option value="3">3 Seats</option>
                      <option value="4">4 Seats</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#16a34a] text-white py-3 px-6 rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300">
                  Offer Ride
                </button>
              </form>
            </div>
          </div>

          <div className="lg:order-1 space-y-8 animate__animated animate__fadeInLeft">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#16a34a]/10 rounded-full">
                  <svg className="w-6 h-6 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Flexible Schedule</h3>
                  <p className="text-neutral-600">Choose your own time and route</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#16a34a]/10 rounded-full">
                  <svg className="w-6 h-6 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Earn While Traveling</h3>
                  <p className="text-neutral-600">Get paid for seats you'd leave empty</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#16a34a]/10 rounded-full">
                  <svg className="w-6 h-6 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Meet New People</h3>
                  <p className="text-neutral-600">Build connections in your community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carpool;