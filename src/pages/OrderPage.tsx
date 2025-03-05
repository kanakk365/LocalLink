import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link, Navigate } from "react-router-dom";
import AvailableRoutes from "../components/RouteComponents/AvailableRoutes";
import MyOrders from "../components/RouteComponents/MyOrders";
import AppNav from "../components/AppNav";

const OrderPage: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [activeTab, setActiveTab] = useState<"available" | "my-orders">("available");

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AppNav />
      <div className="max-w-4xl mx-auto px-4 py-8 pt-24">
        {/* Title Area */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Order Delivery</h1>
            <p className="text-gray-600 mt-1">
              Request items to be delivered by people traveling your route
            </p>
          </div>
          <Link 
            to="/delivery" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
            Switch to Delivery
          </Link>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-4 px-4 text-center font-medium ${
                activeTab === "available"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("available")}
            >
              <div className="flex items-center justify-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                </svg>
                Available Routes
              </div>
            </button>
            <button
              className={`flex-1 py-4 px-4 text-center font-medium ${
                activeTab === "my-orders"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("my-orders")}
            >
              <div className="flex items-center justify-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                My Orders
              </div>
            </button>
          </div>

          <div className="p-6">
            {activeTab === "available" ? <AvailableRoutes /> : <MyOrders />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
