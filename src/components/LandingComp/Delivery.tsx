import { ArrowRight, Map, DollarSign, Leaf, Clock } from "lucide-react"

const Delivery = () => {
  return (
    <section id="delivery" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Request Delivery</h2>
          <h3 className="text-4xl font-bold text-primary mb-6">Place Your Delivery Order</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Request deliveries that match with travelers already heading that way
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform transition-all duration-500 hover:shadow-2xl">
              <form className="space-y-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-primary" htmlFor="delivery-pickup">
                    Pickup Location
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Map className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="delivery-pickup"
                      className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 py-3 text-gray-900 focus:border-accent focus:ring-accent"
                      placeholder="Where to pick up your item"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-primary" htmlFor="delivery-dropoff">
                    Dropoff Location
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Map className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="delivery-dropoff"
                      className="pl-10 block w-full rounded-lg border-gray-300 bg-gray-50 py-3 text-gray-900 focus:border-accent focus:ring-accent"
                      placeholder="Where to deliver your item"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-primary" htmlFor="delivery-date">
                      Delivery By
                    </label>
                    <input
                      type="date"
                      id="delivery-date"
                      className="block w-full rounded-lg border-gray-300 bg-gray-50 py-3 text-gray-900 focus:border-accent focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-primary" htmlFor="item-size">
                      Package Size
                    </label>
                    <select
                      id="item-size"
                      className="block w-full rounded-lg border-gray-300 bg-gray-50 py-3 text-gray-900 focus:border-accent focus:ring-accent"
                    >
                      <option value="small">Small (fits in pocket)</option>
                      <option value="medium">Medium (shoebox)</option>
                      <option value="large">Large (backpack)</option>
                      <option value="xl">X-Large (suitcase)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center bg-accent text-white py-3 px-6 rounded-lg hover:bg-accent-dark transition-all duration-300 shadow-lg shadow-accent/20 font-medium"
                >
                  Place Order
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Map className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Utilize Existing Routes</h3>
                  <p className="text-gray-600 mt-1">
                    Items delivered by people already traveling that way, reducing unnecessary trips and carbon
                    emissions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <DollarSign className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Cost-Effective Deliveries</h3>
                  <p className="text-gray-600 mt-1">
                    Save up to 70% compared to traditional courier services by leveraging community resources.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-accent/10 rounded-xl">
                    <Leaf className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Eco-Friendly Solution</h3>
                  <p className="text-gray-600 mt-1">
                    Reduce carbon footprint by optimizing existing trips instead of adding new delivery vehicles.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">On-Demand or Scheduled</h3>
                  <p className="text-gray-600 mt-1">
                    Get deliveries when you need them or plan ahead with our flexible scheduling options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-white rounded-2xl p-10 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-center mb-12 text-primary">How Community Delivery Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-accent/20 mb-6 rotate-3">
                1
              </div>
              <h4 className="font-semibold text-lg mb-2 text-primary text-center">Post Your Delivery Need</h4>
              <p className="text-gray-600 text-center">Describe what needs to be delivered, when, and where</p>

              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-accent/20 -z-10">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full"></div>
              </div>
            </div>

            <div className="relative flex flex-col items-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-accent/20 mb-6 -rotate-3">
                2
              </div>
              <h4 className="font-semibold text-lg mb-2 text-primary text-center">Match With a Traveler</h4>
              <p className="text-gray-600 text-center">Connect with someone already traveling along your route</p>

              {/* Connector line */}
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-accent/20 -z-10">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full"></div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-accent/20 mb-6 rotate-3">
                3
              </div>
              <h4 className="font-semibold text-lg mb-2 text-primary text-center">Track & Receive</h4>
              <p className="text-gray-600 text-center">Follow your delivery in real-time and receive your item</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Delivery

