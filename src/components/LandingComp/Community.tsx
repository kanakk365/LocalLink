import { ArrowRight, Package, Users, MapPin, Clock } from "lucide-react"
import { Link } from "react-router-dom"

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary/50 rounded-bl-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/10 rounded-tr-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Simple Process</h2>
          <h3 className="text-4xl font-bold text-primary mb-6">How LocalLink Works</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect package senders with community deliverers in just a few simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - For Package Senders */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative">
            <div className="absolute -top-5 left-8 px-4 py-2 bg-accent text-white rounded-lg font-medium">
              For Package Senders
            </div>

            <div className="space-y-12 mt-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent">
                    <Package className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm mr-3">
                      1
                    </div>
                    <h4 className="text-xl font-semibold text-primary">Place Your Order</h4>
                  </div>
                  <div className="mt-3 pl-11">
                    <p className="text-gray-600">
                      Enter pickup and delivery locations, package details, and when you need it delivered.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm mr-3">
                      2
                    </div>
                    <h4 className="text-xl font-semibold text-primary">Get Matched</h4>
                  </div>
                  <div className="mt-3 pl-11">
                    <p className="text-gray-600">
                      Our system finds community members already traveling along your delivery route.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm mr-3">
                      3
                    </div>
                    <h4 className="text-xl font-semibold text-primary">Track & Receive</h4>
                  </div>
                  <div className="mt-3 pl-11">
                    <p className="text-gray-600">
                      Follow your package in real-time and receive it at your specified location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - For Deliverers */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative">
            <div className="absolute -top-5 left-8 px-4 py-2 bg-primary text-white rounded-lg font-medium">
              For Deliverers
            </div>

            <div className="space-y-12 mt-6">
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mr-3">
                      1
                    </div>
                    <h4 className="text-xl font-semibold text-primary">Add Your Route</h4>
                  </div>
                  <div className="mt-3 pl-11">
                    <p className="text-gray-600">
                      Share where you're going, when, and how much space you have available.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
                    <Package className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mr-3">
                      2
                    </div>
                    <h4 className="text-xl font-semibold text-primary">Accept Deliveries</h4>
                  </div>
                  <div className="mt-3 pl-11">
                    <p className="text-gray-600">
                      Browse and accept package delivery requests that match your route and schedule.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm mr-3">
                      3
                    </div>
                    <h4 className="text-xl font-semibold text-primary">Deliver & Earn</h4>
                  </div>
                  <div className="mt-3 pl-11">
                    <p className="text-gray-600">
                      Pick up and deliver packages along your way and get paid for each successful delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-lg text-lg font-medium hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

