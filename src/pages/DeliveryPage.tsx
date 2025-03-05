import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link, Navigate } from "react-router-dom";
import CreateRoute from "../components/RouteComponents/CreateRoute";
import MyRoutes from "../components/RouteComponents/MyRoutes";
import AppNav from "../components/AppNav";

const DeliveryPage: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [activeTab, setActiveTab] = useState<"create" | "my-routes">("create");

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
            <h1 className="text-3xl font-bold">Delivery Provider</h1>
            <p className="text-gray-600 mt-1">
              Offer deliveries along your route to help your community
            </p>
          </div>
          <Link 
            to="/orders" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            Switch to Ordering
          </Link>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              className={`flex-1 py-4 px-4 text-center font-medium ${
                activeTab === "create"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("create")}
            >
              Create Route
            </button>
            <button
              className={`flex-1 py-4 px-4 text-center font-medium ${
                activeTab === "my-routes"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-500 hover:text-gray-800"
              }`}
              onClick={() => setActiveTab("my-routes")}
            >
              My Routes
            </button>
          </div>

          <div className="p-6">
            {activeTab === "create" && <CreateRoute />}
            {activeTab === "my-routes" && <MyRoutes />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
