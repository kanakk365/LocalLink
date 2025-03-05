import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";
import CreateRoute from "../components/RouteComponents/CreateRoute";
import MyRoutes from "../components/RouteComponents/MyRoutes";
import OrderTab from "../components/RouteComponents/OrderTab";
import AppNav from "../components/AppNav";

const RouteManagement: React.FC = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const { isDeliveryMode } = useSelector((state: RootState) => state.ui);
  const [activeTab, setActiveTab] = useState<"create" | "my-routes">("create");

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100">
        <AppNav />
        <div className="max-w-4xl mx-auto px-4 py-8 pt-24">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">You need to be logged in</h2>
            <p className="mb-6 text-gray-600">
              Please log in to create routes or request deliveries.
            </p>
            <Link
              to="/login"
              className="inline-block bg-black text-white font-medium py-2 px-6 rounded-md hover:bg-gray-800"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AppNav />
      <div className="max-w-4xl mx-auto px-4 py-8 pt-24">
        {/* Title Area */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">LocalLink</h1>
          <p className="text-gray-600 mt-1">
            {isDeliveryMode ? "Offer deliveries along your route" : "Request items to be delivered"}
          </p>
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {isDeliveryMode ? (
            /* Delivery Provider Mode */
            <div>
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
          ) : (
            /* Order Mode */
            <div className="p-6">
              <OrderTab />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RouteManagement;
