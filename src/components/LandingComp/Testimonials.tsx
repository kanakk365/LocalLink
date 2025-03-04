import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-neutral-100 dark:bg-neutral-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">What Our Community Says</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">Join thousands of satisfied users connecting and earning through LocalLink</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-200 text-xl font-bold">SK</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Sarah K.</h3>
                <p className="text-neutral-600 dark:text-neutral-300">Regular Driver</p>
              </div>
            </div>
            <p className="text-neutral-700 dark:text-neutral-200">"I've been able to offset my commuting costs by delivering packages along my route. LocalLink has made it so easy to earn while helping others!"</p>
            <div className="mt-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-800 flex items-center justify-center">
                <span className="text-green-600 dark:text-green-200 text-xl font-bold">MR</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Mike R.</h3>
                <p className="text-neutral-600 dark:text-neutral-300">Package Sender</p>
              </div>
            </div>
            <p className="text-neutral-700 dark:text-neutral-200">"Found someone heading to my destination who could deliver my package. Saved money and met a great person from my community!"</p>
            <div className="mt-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white dark:bg-neutral-700 rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-800 flex items-center justify-center">
                <span className="text-orange-600 dark:text-orange-200 text-xl font-bold">JL</span>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">Jenny L.</h3>
                <p className="text-neutral-600 dark:text-neutral-300">Carpooler</p>
              </div>
            </div>
            <p className="text-neutral-700 dark:text-neutral-200">"LocalLink has transformed my daily commute. I share rides with amazing people and we split the costs. Win-win for everyone!"</p>
            <div className="mt-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;