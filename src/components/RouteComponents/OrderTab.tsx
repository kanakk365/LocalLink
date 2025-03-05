import React, { useState } from "react";
import AvailableRoutes from "./AvailableRoutes";
import MyOrders from "./MyOrders";

const OrderTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"available" | "my-orders">("available");

  return (
    <div>
      <div className="flex border-b border-gray-200 mb-6">
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

      {activeTab === "available" ? <AvailableRoutes /> : <MyOrders />}
    </div>
  );
};

export default OrderTab;
