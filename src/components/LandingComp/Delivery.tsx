import React from 'react';

const Delivery = () => {
  return (
    <section id="delivery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Community-Driven Deliveries</h2>
          <p className="text-xl text-neutral-600">Request and fulfill deliveries along existing routes</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <div className="bg-neutral-50 rounded-xl shadow-xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="delivery-pickup">Pickup Location</label>
                  <input type="text" id="delivery-pickup" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition" placeholder="Where to pick up your item" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="delivery-dropoff">Dropoff Location</label>
                  <input type="text" id="delivery-dropoff" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition" placeholder="Where to deliver your item" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="delivery-date">Delivery By</label>
                    <input type="date" id="delivery-date" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="item-size">Package Size</label>
                    <select id="item-size" className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#2563eb] focus:border-transparent transition">
                      <option value="small">Small (fits in pocket)</option>
                      <option value="medium">Medium (shoebox)</option>
                      <option value="large">Large (backpack)</option>
                      <option value="xl">X-Large (suitcase)</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#2563eb] text-white py-3 px-6 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
                  Find Delivery Partners
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8 animate__animated animate__fadeInRight">
            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#2563eb]/10 rounded-full">
                  <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Utilize Existing Routes</h3>
                  <p className="text-neutral-600">Items delivered by people already traveling that way</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#2563eb]/10 rounded-full">
                  <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Cost-Effective Deliveries</h3>
                  <p className="text-neutral-600">Save money compared to traditional courier services</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#2563eb]/10 rounded-full">
                  <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Eco-Friendly Solution</h3>
                  <p className="text-neutral-600">Reduce carbon footprint by optimizing existing trips</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#2563eb]/10 rounded-full">
                  <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">On-Demand or Scheduled</h3>
                  <p className="text-neutral-600">Get deliveries when you need them or plan ahead</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-neutral-50 rounded-xl p-8 animate__animated animate__fadeIn">
          <h3 className="text-2xl font-bold text-center mb-8">How Community Delivery Works</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="relative">
              <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
              <h4 className="font-semibold text-lg mb-2">Post Your Delivery Need</h4>
              <p className="text-neutral-600">Describe what needs to be delivered, when, and where</p>
              <div className="hidden md:block absolute top-8 right-0 w-full h-1 bg-[#2563eb]/30"></div>
            </div>
            
            <div className="relative">
              <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
              <h4 className="font-semibold text-lg mb-2">Match With a Traveler</h4>
              <p className="text-neutral-600">Connect with someone already traveling along your route</p>
              <div className="hidden md:block absolute top-8 right-0 w-full h-1 bg-[#2563eb]/30"></div>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-[#2563eb] rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
              <h4 className="font-semibold text-lg mb-2">Track & Receive</h4>
              <p className="text-neutral-600">Follow your delivery in real-time and receive your item</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;