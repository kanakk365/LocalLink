import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section id="hero" className="relative pt-24 min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-primary/[0.02] bg-[length:32px_32px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Community-powered local delivery
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 tracking-tight animate-fade-in-up">
              Connect, Deliver, <span className="text-accent">Thrive</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up animation-delay-100">
              Need something delivered? Connect with neighbors already traveling that route. Going somewhere? Earn by
              delivering packages along your way.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-200">
              <Link
                to="/order"
                className="inline-flex items-center justify-center bg-accent text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20"
              >
                Place an Order
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                to="/deliver"
                className="inline-flex items-center justify-center bg-white text-primary border border-gray-200 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 transition-all duration-300 shadow-md"
              >
                Become a Deliverer
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500 animate-fade-in-up animation-delay-300">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>10,000+ Users</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>5,000+ Deliveries</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in-left">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/10 rounded-lg rotate-12"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-lg -rotate-12"></div>

              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-primary">Active Deliveries</h3>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">Live</span>
                </div>

                {/* Delivery card 1 */}
                <div className="bg-gray-50 rounded-xl p-4 mb-4 border border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-medium">
                        JD
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-primary">John's Route</h4>
                        <p className="text-sm text-gray-500">Downtown → Business District</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-200">
                      8:00 AM
                    </span>
                  </div>

                  <div className="flex items-center text-xs text-gray-500 justify-between">
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>2 delivery spots
                    </span>
                    <span className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>3 seats available
                    </span>
                  </div>
                </div>

                {/* Delivery card 2 */}
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-medium">
                        EM
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-primary">Emma's Request</h4>
                        <p className="text-sm text-gray-500">Small package delivery</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium bg-accent text-white px-2 py-1 rounded-full">Urgent</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3">
                    Need delivery from Downtown to Business District before 9:00 AM
                  </p>

                  <div className="flex items-center text-sm text-accent font-medium">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Matched with John's route!
                  </div>
                </div>

                {/* Stats at bottom */}
                <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary">94%</p>
                    <p className="text-xs text-gray-500">On-time</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">4.9</p>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">30%</p>
                    <p className="text-xs text-gray-500">Cost savings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

