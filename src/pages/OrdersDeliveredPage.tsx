import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate } from "react-router-dom";
import DeliveryNavbar from "@/components/DeliveryComp/DeliveryNavbar";

// Mock delivered orders data
const mockDeliveredOrders = [
  {
    id: "order-101",
    itemName: "Electronics Package",
    itemDescription: "Smartphone with accessories, handle with care",
    pickupLocation: "Malad West, Mumbai",
    deliveryLocation: "Powai, Mumbai",
    status: "delivered",
    createdAt: "2023-07-25T10:30:00",
    deliveredAt: "2023-07-25T14:45:00",
    deliveryPartner: "Rahul Singh",
    price: 150,
    rating: 5,
    feedback: "Excellent service, delivered ahead of schedule!"
  },
  {
    id: "order-102",
    itemName: "Book Set",
    itemDescription: "Set of 3 hardcover books",
    pickupLocation: "Indiranagar, Bangalore",
    deliveryLocation: "Whitefield, Bangalore",
    status: "delivered",
    createdAt: "2023-07-28T09:15:00",
    deliveredAt: "2023-07-28T11:30:00",
    deliveryPartner: "Priya Patel",
    price: 80,
    rating: 4,
    feedback: "Good service, books arrived in perfect condition"
  },
  {
    id: "order-103",
    itemName: "Office Supplies",
    itemDescription: "Stationery and office equipment",
    pickupLocation: "Connaught Place, Delhi",
    deliveryLocation: "Noida, UP",
    status: "delivered",
    createdAt: "2023-08-02T11:00:00",
    deliveredAt: "2023-08-02T15:20:00",
    deliveryPartner: "Amit Kumar",
    price: 120,
    rating: 3,
    feedback: "Delivery was delayed by 30 minutes, but items were intact"
  },
  {
    id: "order-104",
    itemName: "Homemade Food Package",
    itemDescription: "Freshly prepared meals in insulated container",
    pickupLocation: "Andheri West, Mumbai",
    deliveryLocation: "Juhu, Mumbai",
    status: "delivered",
    createdAt: "2023-08-10T12:30:00",
    deliveredAt: "2023-08-10T13:45:00",
    deliveryPartner: "Sanjay Verma",
    price: 90,
    rating: 5,
    feedback: "Food arrived hot and fresh, great service!"
  }
];

// Star rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      ))}
    </div>
  );
};

const OrdersDeliveredPage: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [timeFilter, setTimeFilter] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const currentDate = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(currentDate.getDate() - 7);
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(currentDate.getMonth() - 1);

  const filteredOrders = (() => {
    if (timeFilter === "week") {
      return mockDeliveredOrders.filter(order => new Date(order.deliveredAt) >= oneWeekAgo);
    }
    if (timeFilter === "month") {
      return mockDeliveredOrders.filter(order => new Date(order.deliveredAt) >= oneMonthAgo);
    }
    return mockDeliveredOrders;
  })();

  const handleOrderClick = (orderId: string) => {
    setSelectedOrder(selectedOrder === orderId ? null : orderId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DeliveryNavbar />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Orders Delivered</h1>
          <p className="text-gray-600 mt-1">View your completed delivery history</p>

          <div className="mt-4 flex flex-wrap gap-2">
            <button 
              onClick={() => setTimeFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeFilter === "all" 
                  ? "bg-gray-900 text-white" 
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              All Time
            </button>
            <button 
              onClick={() => setTimeFilter("month")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeFilter === "month" 
                  ? "bg-gray-900 text-white" 
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              Past Month
            </button>
            <button 
              onClick={() => setTimeFilter("week")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                timeFilter === "week" 
                  ? "bg-gray-900 text-white" 
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              Past Week
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
                          <div className="mt-1 flex items-center">
                            <StarRating rating={order.rating} />
                            <span className="text-xs text-gray-500 ml-1">
                              ({order.rating}/5)
                            </span>
                          </div>
                        </div>
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Delivered
                        </span>
                      </div>

                      <div className="mt-2 flex flex-col gap-1">
                        <div className="flex items-center text-xs">
                          <svg className="h-3.5 w-3.5 text-gray-400 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-600">
                            Delivered: {new Date(order.deliveredAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                          {order.deliveryPartner}
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
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No orders found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      No delivered orders in the selected time period.
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
                  const order = mockDeliveredOrders.find(o => o.id === selectedOrder);
                  if (!order) return null;
                  
                  return (
                    <>
                      <div className="p-6 border-b border-gray-200">
                        <div className="flex justify-between items-start">
                          <div>
                            <h2 className="text-xl font-bold text-gray-900">{order.itemName}</h2>
                            <p className="text-sm text-gray-500 mt-1">Order #{order.id}</p>
                          </div>
                          <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Delivered
                          </span>
                        </div>
                        
                        <div className="mt-4 flex items-center">
                          <StarRating rating={order.rating} />
                          <span className="ml-2 text-sm text-gray-700">
                            {order.rating}/5 Rating
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 border-b border-gray-200">
                        <h3 className="text-md font-medium text-gray-900 mb-4">Delivery Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Delivered On</p>
                            <p className="text-sm font-medium text-gray-900">
                              {new Date(order.deliveredAt).toLocaleDateString()} at {new Date(order.deliveredAt).toLocaleTimeString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Order Placed</p>
                            <p className="text-sm font-medium text-gray-900">
                              {new Date(order.createdAt).toLocaleDateString()} at {new Date(order.createdAt).toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                        
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
                        <h3 className="text-md font-medium text-gray-900 mb-4">Item Details</h3>
                        <p className="text-sm text-gray-700 mb-4">
                          {order.itemDescription}
                        </p>
                        
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              {order.deliveryPartner.charAt(0)}
                            </span>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">{order.deliveryPartner}</p>
                            <p className="text-xs text-gray-500">Delivery Partner</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-md font-medium text-gray-900 mb-3">Feedback</h3>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-700 italic">
                            "{order.feedback}"
                          </p>
                        </div>
                        
                        <div className="mt-6 flex justify-between items-center">
                          <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            Contact Support
                          </button>
                          <span className="text-md font-bold text-gray-900">₹{order.price}</span>
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

export default OrdersDeliveredPage;
