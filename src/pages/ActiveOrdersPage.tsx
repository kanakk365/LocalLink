import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate } from "react-router-dom";
import DeliveryNavbar from "@/components/DeliveryComp/DeliveryNavbar";

// Mock active orders data
const mockActiveOrders = [
  {
    id: "order-001",
    itemName: "Birthday Gift Package",
    itemDescription: "Wrapped gift box, handle with care, 2kg weight",
    pickupLocation: "Andheri East, Mumbai",
    deliveryLocation: "Bandra West, Mumbai",
    status: "in-transit",
    createdAt: "2023-08-15T10:30:00",
    estimatedDelivery: "2023-08-15T13:30:00",
    deliveryPartner: "Rahul Singh",
    price: 120
  },
  {
    id: "order-002",
    itemName: "Document Folder",
    itemDescription: "Important documents, keep dry, 0.5kg weight",
    pickupLocation: "Koramangala, Bangalore",
    deliveryLocation: "HSR Layout, Bangalore",
    status: "accepted",
    createdAt: "2023-08-16T09:15:00",
    estimatedDelivery: "2023-08-16T11:30:00",
    deliveryPartner: "Priya Patel",
    price: 80
  },
  {
    id: "order-003",
    itemName: "Laptop",
    itemDescription: "Electronic item, fragile, 1.8kg weight",
    pickupLocation: "Connaught Place, Delhi",
    deliveryLocation: "Lajpat Nagar, Delhi",
    status: "pending",
    createdAt: "2023-08-17T11:00:00",
    estimatedDelivery: "2023-08-17T14:45:00",
    deliveryPartner: "Not assigned",
    price: 150
  }
];

const statusColors: Record<string, string> = {
  "pending": "bg-yellow-100 text-yellow-800",
  "accepted": "bg-blue-100 text-blue-800",
  "in-transit": "bg-purple-100 text-purple-800",
  "delivered": "bg-green-100 text-green-800",
  "cancelled": "bg-red-100 text-red-800"
};

const statusText: Record<string, string> = {
  "pending": "Waiting for a delivery partner",
  "accepted": "Order accepted, awaiting pickup",
  "in-transit": "Order is on the way",
  "delivered": "Order has been delivered",
  "cancelled": "Order was cancelled"
};

const ActiveOrdersPage: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const filteredOrders = statusFilter === "all" 
    ? mockActiveOrders 
    : mockActiveOrders.filter(order => order.status === statusFilter);

  const handleOrderClick = (orderId: string) => {
    setSelectedOrder(selectedOrder === orderId ? null : orderId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DeliveryNavbar />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Active Orders</h1>
          <p className="text-gray-600 mt-1">Track your currently active delivery orders</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button 
              onClick={() => setStatusFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "all" 
                  ? "bg-gray-900 text-white" 
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              All Orders
            </button>
            <button 
              onClick={() => setStatusFilter("pending")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "pending" 
                  ? "bg-gray-900 text-white" 
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              Pending
            </button>
            <button 
              onClick={() => setStatusFilter("accepted")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "accepted" 
                  ? "bg-gray-900 text-white" 
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              Accepted
            </button>
            <button 
              onClick={() => setStatusFilter("in-transit")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "in-transit" 
                  ? "bg-gray-900 text-white" 
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              In Transit
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Orders List - 2/5 width */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="divide-y divide-gray-200">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <div 
                      key={order.id}
                      onClick={() => handleOrderClick(order.id)}
                      className={`p-4 cursor-pointer transition-colors duration-150 ${
                        selectedOrder === order.id ? "bg-blue-50" : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">
                            {order.itemName}
                          </h3>
                          <p className="mt-1 text-xs text-gray-500 line-clamp-1">
                            {order.itemDescription}
                          </p>
                        </div>
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[order.status]}`}>
                          {order.status.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                        </span>
                      </div>

                      <div className="mt-3 flex flex-col gap-1">
                        <div className="flex items-center text-xs">
                          <svg className="h-3.5 w-3.5 text-gray-400 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-gray-600">
                            From: {order.pickupLocation}
                          </span>
                        </div>
                        <div className="flex items-center text-xs">
                          <svg className="h-3.5 w-3.5 text-gray-400 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                          <span className="text-gray-600">
                            To: {order.deliveryLocation}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </div>
                        <div className="text-sm font-medium">
                          ₹{order.price}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No orders found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      No orders match your current filter.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Details - 3/5 width */}
          <div className="lg:col-span-3">
            {selectedOrder ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full">
                {(() => {
                  const order = mockActiveOrders.find(o => o.id === selectedOrder);
                  if (!order) return null;
                  
                  return (
                    <>
                      <div className="p-6 border-b border-gray-200">
                        <div className="flex justify-between items-start">
                          <div>
                            <h2 className="text-xl font-bold text-gray-900">{order.itemName}</h2>
                            <p className="text-sm text-gray-500 mt-1">Order #{order.id}</p>
                          </div>
                          <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[order.status]}`}>
                            {order.status.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                          </span>
                        </div>
                        
                        <div className="mt-4">
                          <p className="text-sm text-gray-700">
                            {statusText[order.status]}
                          </p>
                        </div>
                      </div>
                      
                      <div className="p-6 border-b border-gray-200">
                        <h3 className="text-md font-medium text-gray-900 mb-4">Item Details</h3>
                        <p className="text-sm text-gray-700">
                          {order.itemDescription}
                        </p>
                        
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Pickup Location</h4>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-sm text-gray-700">{order.pickupLocation}</p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Delivery Location</h4>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-sm text-gray-700">{order.deliveryLocation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6 border-b border-gray-200">
                        <h3 className="text-md font-medium text-gray-900 mb-4">Delivery Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Delivery Partner</h4>
                            <div className="flex items-center">
                              {order.deliveryPartner !== "Not assigned" ? (
                                <>
                                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">
                                      {order.deliveryPartner.charAt(0)}
                                    </span>
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">{order.deliveryPartner}</p>
                                    <p className="text-xs text-gray-500">Delivery Partner</p>
                                  </div>
                                </>
                              ) : (
                                <p className="text-sm text-gray-500">Waiting for assignment</p>
                              )}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-900 mb-2">Delivery Time</h4>
                            <p className="text-sm text-gray-700">
                              Estimated: {new Date(order.estimatedDelivery).toLocaleTimeString()} on {new Date(order.estimatedDelivery).toLocaleDateString()}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Order placed: {new Date(order.createdAt).toLocaleTimeString()} on {new Date(order.createdAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex justify-between items-center">
                          <h3 className="text-md font-medium text-gray-900">Payment</h3>
                          <span className="text-md font-bold text-gray-900">₹{order.price}</span>
                        </div>
                        
                        <div className="mt-4">
                          {order.status === "in-transit" && (
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <div className="flex">
                                <div className="flex-shrink-0">
                                  <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div className="ml-3">
                                  <h3 className="text-sm font-medium text-blue-800">Delivery in progress</h3>
                                  <div className="mt-2 text-sm text-blue-700">
                                    <p>Your order is on the way. You will be notified once it's delivered.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No order selected</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Select an order from the list to view its details.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveOrdersPage;
