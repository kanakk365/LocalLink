import React from 'react';

const Trust = () => {
  return (
    <section id="trust" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Safe and Reliable</h2>
          <p className="text-xl text-neutral-600">Community reviews, secure payments, and safety guidelines</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#2563eb]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Verified Users</h3>
              <p className="text-neutral-600">Every member of our community goes through a thorough verification process</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#16a34a]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#16a34a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
              <p className="text-neutral-600">All transactions are protected with bank-level security measures</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp animate__delay-2s">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#dc2626]/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#dc2626]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Community Reviews</h3>
              <p className="text-neutral-600">Transparent feedback system to maintain high service quality</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-50 rounded-xl p-8 animate__animated animate__fadeInLeft">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-[#2563eb] flex items-center justify-center text-white">JD</div>
                <div className="w-10 h-10 rounded-full bg-[#16a34a] flex items-center justify-center text-white">AS</div>
                <div className="w-10 h-10 rounded-full bg-[#dc2626] flex items-center justify-center text-white">MK</div>
              </div>
              <p className="text-neutral-600">Join 10,000+ verified users</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-2">4.9/5 average rating</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-xl p-8 animate__animated animate__fadeInRight">
            <h4 className="text-lg font-semibold mb-4">Safety Guidelines</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#16a34a] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                24/7 Customer Support
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#16a34a] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Real-time Journey Tracking
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-[#16a34a] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Emergency Assistance
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;