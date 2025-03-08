import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link, Navigate } from "react-router-dom";
import CreateRoute from "../components/RouteComponents/CreateRoute";
import DeliveryNavbar from "@/components/DeliveryComp/DeliveryNavbar";

const DeliveryPage: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);


  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className=" bg-white">
      <DeliveryNavbar/>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 ">
        {/* Title Area */}
        <div className="mb-6 flex justify-between items-center">
        </div>

        {/* Main Content Area */}
        <div className="bg-white ">
          <div className="">
            <CreateRoute />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;
