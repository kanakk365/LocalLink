import { ArrowRight, Clock, Shield, Zap } from "lucide-react"
import { Link } from "react-router-dom"

const CallToAction = () => {
  return (
    <section id="cta" className="py-24 bg-primary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-primary/[0.1] bg-[length:20px_20px]"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the LocalLink Delivery Network Today</h2>
          <p className="text-xl text-gray-300 mb-10">
            Place orders or deliver packages - our community makes local delivery simple and affordable
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/login"
              className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20 flex items-center justify-center"
            >
              Start Ordering & Delivering
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/learn-more"
              className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center"
            >
              Learn More
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">2 Minute Sign Up</h3>
              <p className="text-gray-300">Quick and easy registration process to get you started immediately</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Verified Members</h3>
              <p className="text-gray-300">All community members are verified for your safety and peace of mind</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Start Instantly</h3>
              <p className="text-gray-300">Begin placing orders or offering deliveries as soon as you sign up</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

