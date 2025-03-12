import { ArrowRight, Clock, DollarSign, Users } from "lucide-react"

const Carpool = () => {
  return (
    <section id="carpool" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-3">Earn While You Travel</h2>
          <h3 className="text-4xl font-bold text-primary mb-6">Share Your Travel Route</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Add your journey and earn by delivering packages along the way
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Flexible Schedule</h3>
                  <p className="text-gray-600 mt-1">
                    Deliver packages on your own schedule, whenever you're already traveling.
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
                  <h3 className="font-semibold text-lg text-primary">Earn While Traveling</h3>
                  <p className="text-gray-600 mt-1">
                    Get paid for deliveries along routes you're already taking, turning your commute into income.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary">Meet New People</h3>
                  <p className="text-gray-600 mt-1">
                    Build connections in your community while helping others with their delivery needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg text-primary">Average Earnings</h3>
                <span className="text-xs font-medium bg-accent/10 text-accent px-3 py-1 rounded-full">Per Month</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Daily Commuters</span>
                  </div>
                  <span className="font-semibold text-primary">$200 - $400</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Weekend Travelers</span>
                  </div>
                  <span className="font-semibold text-primary">$100 - $250</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Occasional Drivers</span>
                  </div>
                  <span className="font-semibold text-primary">$50 - $150</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative">
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-accent/10 rounded-lg rotate-12 -z-10"></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-primary/10 rounded-lg -rotate-12 -z-10"></div>

              <h3 className="text-xl font-semibold text-primary mb-6">Add Your Route</h3>

              <form className="space-y-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-primary" htmlFor="ride-origin">
                    Starting Point
                  </label>
                  <input
                    type="text"
                    id="ride-origin"
                    className="block w-full rounded-lg border-gray-300 bg-gray-50 py-3 text-gray-900 focus:border-primary focus:ring-primary"
                    placeholder="Enter pickup location"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-primary" htmlFor="ride-destination">
                    Destination
                  </label>
                  <input
                    type="text"
                    id="ride-destination"
                    className="block w-full rounded-lg border-gray-300 bg-gray-50 py-3 text-gray-900 focus:border-primary focus:ring-primary"
                    placeholder="Enter drop-off location"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-primary" htmlFor="ride-date">
                      Date
                    </label>
                    <input
                      type="date"
                      id="ride-date"
                      className="block w-full rounded-lg border-gray-300 bg-gray-50 py-3 text-gray-900 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-primary" htmlFor="available-seats">
                      Available Seats
                    </label>
                    <select
                      id="available-seats"
                      className="block w-full rounded-lg border-gray-300 bg-gray-50 py-3 text-gray-900 focus:border-primary focus:ring-primary"
                    >
                      <option value="1">1 Seat</option>
                      <option value="2">2 Seats</option>
                      <option value="3">3 Seats</option>
                      <option value="4">4 Seats</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-sm font-medium text-primary" htmlFor="route-frequency">
                    Frequency
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="flex items-center">
                      <input
                        id="one-time"
                        name="route-frequency"
                        type="radio"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                        defaultChecked
                      />
                      <label htmlFor="one-time" className="ml-2 block text-sm text-gray-600">
                        One-time
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="weekly"
                        name="route-frequency"
                        type="radio"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <label htmlFor="weekly" className="ml-2 block text-sm text-gray-600">
                        Weekly
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="daily"
                        name="route-frequency"
                        type="radio"
                        className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                      />
                      <label htmlFor="daily" className="ml-2 block text-sm text-gray-600">
                        Daily
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex justify-center items-center bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 font-medium"
                >
                  Add My Route
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carpool

