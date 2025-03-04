import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Platform Features</h2>
          <p className="text-xl text-neutral-600">Everything you need to start earning on your travels</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Real-time Notifications Preview */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#dc2626] rounded-full flex items-center justify-center text-white text-sm animate-pulse">3</div>
              <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-time Notifications</h3>
              <p className="text-neutral-600 mb-4">Stay updated with delivery requests and ride matches instantly</p>
              <div className="bg-neutral-50 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm">New delivery request nearby</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <p className="text-sm">Ride request matched</p>
                </div>
              </div>
            </div>
          </div>

          {/* User Profile Preview */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="w-12 h-12 bg-[#16a34a]/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">User Profile</h3>
            <p className="text-neutral-600 mb-4">Build trust with a verified profile</p>
            <div className="bg-neutral-50 rounded-lg p-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#2563eb] rounded-full flex items-center justify-center text-white font-semibold">JD</div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="ml-1 text-sm">4.9</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-neutral-600">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Verified Driver
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Member since 2023
                </div>
              </div>
            </div>
          </div>

          {/* Community Feed Preview */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="w-12 h-12 bg-[#dc2626]/10 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-[#dc2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Community Feed</h3>
            <p className="text-neutral-600 mb-4">Stay connected with your local community</p>
            <div className="space-y-4">
              <div className="bg-neutral-50 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center text-white text-sm">AS</div>
                  <p className="text-sm font-semibold">Alice Smith</p>
                </div>
                <p className="text-sm text-neutral-600">Just completed my first delivery! Great experience 🚗</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-neutral-500">
                  <span>2m ago</span>
                  <span>•</span>
                  <button className="hover:text-[#2563eb]">Like</button>
                  <button className="hover:text-[#2563eb]">Comment</button>
                </div>
              </div>
              <div className="bg-neutral-50 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-[#16a34a] rounded-full flex items-center justify-center text-white text-sm">MK</div>
                  <p className="text-sm font-semibold">Mike Kumar</p>
                </div>
                <p className="text-sm text-neutral-600">Looking for riders from downtown to airport tomorrow morning!</p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-neutral-500">
                  <span>5m ago</span>
                  <span>•</span>
                  <button className="hover:text-[#2563eb]">Like</button>
                  <button className="hover:text-[#2563eb]">Comment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;