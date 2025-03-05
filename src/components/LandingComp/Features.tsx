import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Platform Features</h2>
          <p className="text-xl text-neutral-600">
            Everything you need for community-powered deliveries and rides
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Route Sharing & Matching */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-[#2563eb]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Route Sharing & Matching</h3>
            <p className="text-neutral-600 mb-4">
              Post your travel routes and get matched with delivery requests or passengers along the way
            </p>
            <div className="bg-neutral-50 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-[#2563eb] rounded-full flex items-center justify-center text-white text-sm">
                  JD
                </div>
                <div>
                  <p className="text-sm font-medium">Daily Route: Central → Westside</p>
                  <p className="text-xs text-neutral-500">8:00AM departure • Mon-Fri</p>
                </div>
              </div>
              <div className="mt-3 border-t border-neutral-200 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-neutral-600">2 delivery matches</span>
                  <span className="text-xs font-medium text-neutral-600">1 ride request</span>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Tracking */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="w-12 h-12 bg-[#16a34a]/10 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-[#16a34a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Real-time Tracking</h3>
            <p className="text-neutral-600 mb-4">
              Follow deliveries and rides in real-time with live location updates
            </p>
            <div className="bg-neutral-50 rounded-lg p-4">
              <div className="relative h-32 mb-3">
                <div className="absolute inset-0 rounded-lg overflow-hidden bg-gray-200">
                  <div className="h-full w-full bg-neutral-100 relative">
                    <div className="absolute left-1/4 top-1/3 w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="absolute left-1/4 top-1/3 w-4 h-4 rounded-full bg-green-500 opacity-30 animate-ping"></div>
                    <div className="absolute left-2/3 top-2/3 w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="absolute left-1/3 top-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
                    <div
                      className="absolute top-1/3 left-1/4 w-36 border-t-2 border-dashed border-blue-400"
                      style={{ transform: 'rotate(45deg)', transformOrigin: '0 0' }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  Current location
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span>
                  Destination
                </div>
              </div>
            </div>
          </div>

          {/* Community Ratings & Trust */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="w-12 h-12 bg-[#dc2626]/10 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-[#dc2626]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Community Ratings & Trust</h3>
            <p className="text-neutral-600 mb-4">
              Build reputation within your community through ratings and reviews
            </p>
            <div className="bg-neutral-50 rounded-lg p-4">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-10 h-10 bg-[#16a34a] rounded-full flex items-center justify-center text-white text-sm">
                  AS
                </div>
                <div>
                  <h4 className="font-medium">Alice Smith</h4>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-neutral-600 italic">
                "Always on time and very reliable. Package was delivered safely and in perfect condition!"
              </p>
              <div className="mt-2 text-xs text-neutral-500">
                <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">50+ Deliveries</span>
                <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded ml-2">Verified Member</span>
              </div>
            </div>
          </div>

          {/* Flexible Scheduling */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate__animated animate__fadeInUp">
            <div className="w-12 h-12 bg-[#2563eb]/10 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-[#2563eb]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Flexible Scheduling</h3>
            <p className="text-neutral-600 mb-4">
              Schedule one-time or recurring routes to help your community consistently
            </p>
            <div className="bg-neutral-50 rounded-lg p-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#2563eb] rounded-full mr-2"></div>
                    <span className="text-sm">Morning Commute</span>
                  </div>
                  <span className="text-xs text-neutral-500">8:00 AM</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#16a34a] rounded-full mr-2"></div>
                    <span className="text-sm">Evening Return</span>
                  </div>
                  <span className="text-xs text-neutral-500">5:30 PM</span>
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