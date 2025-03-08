import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link, Navigate } from "react-router-dom";
import CreateRoute from "../components/RouteComponents/CreateRoute";
import MyRoutes from "../components/RouteComponents/MyRoutes";
import AppNav from "../components/AppNav";
import DeliveryNavbar from "@/components/DeliveryComp/DeliveryNavbar";

const DeliveryPage: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);


  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <DeliveryNavbar/>
      <div className="max-w-8xl mx-auto px-4 py-8 pt-24">
        {/* Title Area */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Delivery Provider</h1>
            <p className="text-gray-600 mt-1">
              Offer deliveries along your route to help your community
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="bg-white ">
          <div className="p-6">
            <CreateRoute />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
