import React from 'react';

const Community = () => {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Join Our Growing Community</h2>
          <p className="text-xl text-neutral-600">Connect with people making a difference in their local areas</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate__animated animate__fadeInLeft">
            <div className="bg-neutral-50 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#2563eb] rounded-full flex items-center justify-center text-white font-semibold">SJ</div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <div className="flex items-center">
                    <span className="text-sm text-neutral-600">Regular Driver</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm">4.9</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-neutral-700">"LocalLink has transformed my daily commute into an opportunity to help others and earn extra income. The community is supportive and the platform is easy to use."</p>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-[#16a34a] rounded-full flex items-center justify-center text-white font-semibold">RM</div>
                <div>
                  <h4 className="font-semibold">Robert Martinez</h4>
                  <div className="flex items-center">
                    <span className="text-sm text-neutral-600">Delivery Partner</span>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm">4.8</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-neutral-700">"I've met amazing people and built lasting connections while making deliveries. The safety features give me peace of mind."</p>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-xl p-8 animate__animated animate__fadeInRight">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="text-4xl font-bold text-[#2563eb] mb-2">10,000+</div>
                <p className="text-neutral-600">Active community members</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#16a34a] mb-2">5,000+</div>
                  <p className="text-neutral-600">Successful deliveries</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#dc2626] mb-2">8,000+</div>
                  <p className="text-neutral-600">Rides shared</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#2563eb] mb-2">95%</div>
                  <p className="text-neutral-600">Satisfaction rate</p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-2xl font-bold text-[#16a34a] mb-2">50+</div>
                  <p className="text-neutral-600">Cities covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;