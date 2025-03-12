import { Route, Bell, Star, Shield, Calendar, Zap } from "lucide-react"

const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">What We Offer</h2>
          <h3 className="text-4xl font-bold text-primary mb-6">Platform Features</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for community-powered deliveries and rides
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Route Sharing & Matching */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Route className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Route Sharing & Matching</h3>
            <p className="text-gray-600 mb-6">
              Post your travel routes and get matched with delivery requests or passengers along the way
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                  JD
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">Daily Route: Central → Westside</p>
                  <p className="text-xs text-gray-500">8:00AM departure • Mon-Fri</p>
                </div>
              </div>
              <div className="mt-3 border-t border-gray-200 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded-full border border-gray-200">
                    2 delivery matches
                  </span>
                  <span className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded-full border border-gray-200">
                    1 ride request
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Real-time Tracking */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <Bell className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Real-time Tracking</h3>
            <p className="text-gray-600 mb-6">
              Follow deliveries and rides in real-time with live location updates and notifications
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="relative h-32 mb-3">
                <div className="absolute inset-0 rounded-lg overflow-hidden bg-gray-200">
                  <div className="h-full w-full bg-gray-100 relative">
                    {/* Map elements */}
                    <div className="absolute left-1/4 top-1/3 w-3 h-3 rounded-full bg-accent"></div>
                    <div className="absolute left-1/4 top-1/3 w-6 h-6 rounded-full bg-accent opacity-30 animate-ping"></div>
                    <div className="absolute left-2/3 top-2/3 w-3 h-3 rounded-full bg-primary"></div>
                    <div className="absolute left-1/3 top-1/2 w-3 h-3 rounded-full bg-gray-400"></div>
                    <div
                      className="absolute top-1/3 left-1/4 w-36 border-t-2 border-dashed border-accent"
                      style={{ transform: "rotate(45deg)", transformOrigin: "0 0" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs font-medium">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-accent rounded-full mr-1"></span>
                  Current location
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-1"></span>
                  Destination
                </div>
              </div>
            </div>
          </div>

          {/* Smart Order Matching */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Smart Order Matching</h3>
            <p className="text-gray-600 mb-6">
              Our algorithm automatically matches your delivery needs with travelers heading in that direction
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                  PO
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">Package Order #1234</p>
                  <p className="text-xs text-gray-500">Downtown → Westside • Today</p>
                </div>
              </div>
              <div className="mt-3 border-t border-gray-200 pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-600">3 potential deliverers</span>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    Match found!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Community Ratings & Trust */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <Star className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Community Ratings & Trust</h3>
            <p className="text-gray-600 mb-6">Build reputation within your community through ratings and reviews</p>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white text-sm font-medium">
                  AS
                </div>
                <div>
                  <h4 className="font-medium text-primary">Alice Smith</h4>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic mb-2">
                "Always on time and very reliable. Package was delivered safely and in perfect condition!"
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs font-medium">
                  50+ Deliveries
                </span>
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-xs font-medium">
                  Verified Member
                </span>
              </div>
            </div>
          </div>

          {/* Secure Payments */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Secure Payments</h3>
            <p className="text-gray-600 mb-6">
              All transactions are protected with bank-level security and held in escrow until delivery is confirmed
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-primary">Payment Protection</span>
                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">Active</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Funds held in escrow</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Released upon delivery confirmation</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">Dispute resolution available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Flexible Scheduling */}
          <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
              <Calendar className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Flexible Scheduling</h3>
            <p className="text-gray-600 mb-6">
              Schedule one-time or recurring routes to help your community consistently
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    <span className="text-sm text-primary">Morning Commute</span>
                  </div>
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-200">
                    8:00 AM
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-sm text-primary">Evening Return</span>
                  </div>
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-200">
                    5:30 PM
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-sm text-primary">Weekend Trip</span>
                  </div>
                  <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full border border-gray-200">
                    Sat 10:00 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

