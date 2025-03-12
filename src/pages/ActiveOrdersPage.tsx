import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate } from "react-router-dom";
import DeliveryNavbar from "@/components/DeliveryComp/DeliveryNavbar";
import useIsMobile from "@/lib/hooks/useIsMobile";
import axios from "axios";

// Mock available orders data - orders posted by users that delivery partners can accept
const mockAvailableOrders = [
  {
    id: "order-001",
    itemName: "Birthday Gift Package",
    itemDescription: "Wrapped gift box, handle with care, 2kg weight",
    pickupLocation: "Andheri East, Mumbai",
    deliveryLocation: "Bandra West, Mumbai",
    status: "available",
    createdAt: "2023-08-15T10:30:00",
    estimatedDelivery: "2023-08-15T13:30:00",
    customerName: "Amit Sharma",
    price: 120,
  },
  {
    id: "order-002",
    itemDescription: "Important documents, keep dry, 0.5kg weight",
    itemName: "Document Folder",
    pickupLocation: "Koramangala, Bangalore",
    deliveryLocation: "HSR Layout, Bangalore",
    status: "available",
    createdAt: "2023-08-16T09:15:00",
    estimatedDelivery: "2023-08-16T11:30:00",
    customerName: "Priya Patel",
    price: 80,
  },
  {
    id: "order-003",
    itemName: "Laptop",
    itemDescription: "Electronic item, fragile, 1.8kg weight",
    pickupLocation: "Connaught Place, Delhi",
    deliveryLocation: "Lajpat Nagar, Delhi",
    status: "available",
    createdAt: "2023-08-17T11:00:00",
    estimatedDelivery: "2023-08-17T14:45:00",
    customerName: "Rohit Kapoor",
    price: 150,
  },
];

const statusColors: Record<string, string> = {
  available: "bg-green-100 text-green-800",
  far: "bg-yellow-100 text-yellow-800",
  nearby: "bg-accent/20 text-accent",
};

const statusText: Record<string, string> = {
  available: "Order available for pickup",
  far: "Location is far from your current position",
  nearby: "Location is nearby your current position",
};

export interface ActiveOrder {
  id: string;
  itemName: string;
  itemDescription: string;
  pickupLocation: string;
  deliveryLocation: string;
  status:
    | "available"
    | "far"
    | "nearby"
    | "accepted"
    | "in-transit"
    | "delivered"
    | "cancelled";
  createdAt: string;
  estimatedDelivery: string;
  customerName: string;
  price: number;
}

const ActiveOrdersPage: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [distanceFilter, setDistanceFilter] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [activeOrders, setActiveOrders] = useState<ActiveOrder[]>();

  const isMobile = useIsMobile();

  const getActiveOrders = async () => {
    try {
      const res = await axios.get(":(");
      setActiveOrders(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getActiveOrders();
  });

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const filteredOrders =
    distanceFilter === "all"
      ? mockAvailableOrders
      : mockAvailableOrders.filter((order) => order.status === distanceFilter);

  const handleOrderClick = (orderId: string) => {
    setSelectedOrder(selectedOrder === orderId ? null : orderId);
  };

  const handleAcceptOrder = async (orderId: string) => {
    // In a real app, this would make an API call to accept the order
    try {
      const res = await axios.post("dfodfa", { orderId: orderId });
      console.log(res);
      alert(
        `Order ${orderId} accepted! This order will now appear in your "Orders Delivered" page.`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DeliveryNavbar />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Available Orders</h1>
          <p className="text-gray-600 mt-1">
            Browse and accept new delivery orders from customers
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setDistanceFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                distanceFilter === "all"
                  ? "bg-accent text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              All Orders
            </button>
            <button
              onClick={() => setDistanceFilter("nearby")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                distanceFilter === "nearby"
                  ? "bg-accent text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              Nearby
            </button>
            <button
              onClick={() => setDistanceFilter("far")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                distanceFilter === "far"
                  ? "bg-accent text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              Far
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
                    <div>
                      <div
                        key={order.id}
                        onClick={() => handleOrderClick(order.id)}
                        className={`p-4 cursor-pointer transition-colors duration-150 ${
                          selectedOrder === order.id
                            ? "bg-accent/10"
                            : "hover:bg-gray-50"
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
                          <span
                            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors.available}`}
                          >
                            Available
                          </span>
                        </div>

                        <div className="mt-3 flex flex-col gap-1">
                          <div className="flex items-center text-xs">
                            <svg
                              className="h-3.5 w-3.5 text-gray-400 mr-1.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                            <span className="text-gray-600">
                              From: {order.pickupLocation}
                            </span>
                          </div>
                          <div className="flex items-center text-xs">
                            <svg
                              className="h-3.5 w-3.5 text-gray-400 mr-1.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                              />
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
                      {isMobile && selectedOrder === order.id
                        ? (() => {
                            const order = mockAvailableOrders.find(
                              (o) => o.id === selectedOrder
                            );
                            if (!order) return null;

                            return (
                              <div className="flex flex-col p-4 border-t border-gray-200 bg-gray-50">
                                <h1 className="font-medium text-gray-900 mb-2">
                                  Delivery Information
                                </h1>
                                <div className="flex justify-between">
                                  <div>
                                    <h1 className="text-sm font-medium text-gray-700">
                                      Customer
                                    </h1>
                                    <div className="flex gap-2 items-center mt-1">
                                      <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                                        <span className="text-white text-sm font-medium">
                                          {order.customerName.charAt(0)}
                                        </span>
                                      </div>
                                      <div>
                                        <h1 className="text-sm font-medium">
                                          {order.customerName}
                                        </h1>
                                        <p className="text-xs text-gray-600">
                                          Customer
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div>
                                    <h1 className="text-sm font-medium text-gray-700">
                                      Delivery Time
                                    </h1>
                                    <div className="mt-1">
                                      <p className="text-sm text-gray-700">
                                        Estimated:{" "}
                                        {new Date(
                                          order.estimatedDelivery
                                        ).toLocaleTimeString()}{" "}
                                        on{" "}
                                        {new Date(
                                          order.estimatedDelivery
                                        ).toLocaleDateString()}
                                      </p>
                                      <p className="text-xs text-gray-500 mt-1">
                                        Order placed:{" "}
                                        {new Date(
                                          order.createdAt
                                        ).toLocaleTimeString()}{" "}
                                        on{" "}
                                        {new Date(
                                          order.createdAt
                                        ).toLocaleDateString()}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  onClick={() => handleAcceptOrder(order.id)}
                                  className="mt-4 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                                >
                                  Accept Order
                                </button>
                              </div>
                            );
                          })()
                        : null}
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                      No orders found
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      No orders match your current filter.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Details - 3/5 width */}
          {isMobile ? null : (
            <div className="lg:col-span-3">
              {selectedOrder ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full">
                  {(() => {
                    const order = mockAvailableOrders.find(
                      (o) => o.id === selectedOrder
                    );
                    if (!order) return null;

                    return (
                      <>
                        <div className="p-6 border-b border-gray-200">
                          <div className="flex justify-between items-start">
                            <div>
                              <h2 className="text-xl font-bold text-gray-900">
                                {order.itemName}
                              </h2>
                              <p className="text-sm text-gray-500 mt-1">
                                Order #{order.id}
                              </p>
                            </div>
                            <span
                              className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors.available}`}
                            >
                              Available
                            </span>
                          </div>

                          <div className="mt-4">
                            <p className="text-sm text-gray-700">
                              {statusText.available}
                            </p>
                          </div>
                        </div>

                        <div className="p-6 border-b border-gray-200">
                          <h3 className="text-md font-medium text-gray-900 mb-4">
                            Item Details
                          </h3>
                          <p className="text-sm text-gray-700">
                            {order.itemDescription}
                          </p>

                          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">
                                Pickup Location
                              </h4>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-sm text-gray-700">
                                  {order.pickupLocation}
                                </p>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">
                                Delivery Location
                              </h4>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-sm text-gray-700">
                                  {order.deliveryLocation}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 border-b border-gray-200">
                          <h3 className="text-md font-medium text-gray-900 mb-4">
                            Delivery Information
                          </h3>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">
                                Customer
                              </h4>
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                                  <span className="text-white text-sm font-medium">
                                    {order.customerName.charAt(0)}
                                  </span>
                                </div>
                                <div className="ml-3">
                                  <p className="text-sm font-medium text-gray-900">
                                    {order.customerName}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    Customer
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">
                                Delivery Time
                              </h4>
                              <p className="text-sm text-gray-700">
                                Estimated:{" "}
                                {new Date(
                                  order.estimatedDelivery
                                ).toLocaleTimeString()}{" "}
                                on{" "}
                                {new Date(
                                  order.estimatedDelivery
                                ).toLocaleDateString()}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                Order placed:{" "}
                                {new Date(order.createdAt).toLocaleTimeString()}{" "}
                                on{" "}
                                {new Date(order.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="flex justify-between items-center">
                            <h3 className="text-md font-medium text-gray-900">
                              Payment
                            </h3>
                            <span className="text-md font-bold text-gray-900">
                              ₹{order.price}
                            </span>
                          </div>

                          <div className="mt-4">
                            <button
                              onClick={() => handleAcceptOrder(order.id)}
                              className="w-full py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                            >
                              Accept Order
                            </button>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden h-full flex items-center justify-center">
                  <div className="text-center p-6">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                      No order selected
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Select an order from the list to view its details.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveOrdersPage;
