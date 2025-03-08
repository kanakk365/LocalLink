import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate } from "react-router-dom";
import OrderNavbar from "@/components/OrderNavbar";

const OrderPage: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [deliveryDate, setDeliveryDate] = useState("");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <OrderNavbar/>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
       

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
          {/* Form Section - 30% width */}
          <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
            <form className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Delivery Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="pickup" className="block text-sm font-medium text-gray-700 mb-1">
                      Pickup Location
                    </label>
                    <input 
                      type="text" 
                      id="pickup"
                      placeholder="Enter pickup address" 
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700 mb-1">
                      Dropoff Location
                    </label>
                    <input 
                      type="text" 
                      id="dropoff"
                      placeholder="Enter destination address" 
                      className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="item" className="block text-sm font-medium text-gray-700 mb-1">
                    Item Name
                  </label>
                  <input 
                    type="text" 
                    id="item"
                    placeholder="What are you sending?" 
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Item Description
                  </label>
                  <textarea 
                    id="description" 
                    rows={4}
                    placeholder="Include size, weight, handling instructions, etc." 
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="deliveryTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Delivery Deadline
                  </label>
                  <input 
                    type="datetime-local" 
                    id="deliveryTime"
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                    Maximum Budget (₹)
                  </label>
                  <input 
                    type="number" 
                    id="budget"
                    min="0"
                    step="0.01"
                    placeholder="How much are you willing to pay?" 
                    className="block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="pt-5">
                <button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#0a0a0a] hover:bg-[#282828] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Create Order
                </button>
              </div>
            </form>
          </div>

          {/* Map Section - 70% width */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-medium text-gray-900">Delivery Route</h2>
                <p className="text-sm text-gray-500">Preview the route on the map</p>
              </div>
              <div className="bg-gray-200 h-[600px] flex items-center justify-center">
                <div className="text-center p-4">
                  <svg 
                    className="mx-auto h-12 w-12 text-gray-400" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">
                    Map will display your route after entering locations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;