import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate } from "react-router-dom";
import DeliveryNavbar from "@/components/DeliveryComp/DeliveryNavbar";
import axios from "axios";

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

// Mock in-transit orders data - orders accepted by delivery partner but not yet delivered
const mockInTransitOrders = [
  {
    id: "order-201",
    itemName: "Medical Package",
    itemDescription: "Prescription medications, time-sensitive",
    pickupLocation: "Powai Hospital, Mumbai",
    deliveryLocation: "Juhu Residence, Mumbai",
    status: "in-transit",
    createdAt: "2023-08-18T09:30:00",
    estimatedDelivery: "2023-08-18T12:45:00",
    customerName: "Ravi Kumar",
    customerPhone: "+91 98765 43210",
    price: 180,
    acceptedAt: "2023-08-18T10:15:00",
    pickupCompleted: true
  },
  {
    id: "order-202",
    itemName: "Jewelry Box",
    itemDescription: "High-value item, requires signature on delivery",
    pickupLocation: "Jewelry Store, Bangalore",
    deliveryLocation: "Koramangala Apartment, Bangalore",
    status: "in-transit",
    createdAt: "2023-08-18T10:45:00",
    estimatedDelivery: "2023-08-18T14:30:00",
    customerName: "Sneha Patel",
    customerPhone: "+91 87654 32109",
    price: 250,
    acceptedAt: "2023-08-18T11:00:00",
    pickupCompleted: true
  },
  {
    id: "order-203",
    itemName: "Fresh Food Order",
    itemDescription: "Restaurant takeout, keep hot, delivery within 30 minutes",
    pickupLocation: "Restaurant District, Delhi",
    deliveryLocation: "Office Complex, Delhi",
    status: "in-transit",
    createdAt: "2023-08-18T12:15:00",
    estimatedDelivery: "2023-08-18T12:45:00",
    customerName: "Vikram Singh",
    customerPhone: "+91 76543 21098",
    price: 120,
    acceptedAt: "2023-08-18T12:20:00",
    pickupCompleted: false
  }
];

interface InTransitOrder {
  id: string;
  itemName: string;
  itemDescription: string;
  pickupLocation: string;
  deliveryLocation: string;
  status: "in-transit";
  createdAt: string;
  estimatedDelivery: string;
  customerName: string;
  customerPhone: string;
  price: number;
  acceptedAt: string;
  pickupCompleted: boolean;
}

// Star rating component
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "text-accent" : "text-gray-300"
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

const statusColors: Record<string, string> = {
  delivered: "bg-green-100 text-green-800",
  "in-transit": "bg-accent/20 text-accent",
};

const OrdersDeliveredPage: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [timeFilter, setTimeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("delivered");
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [orders , setOrders] = useState<InTransitOrder>()

  const getDeliverdOrders= async()=>{
    try {
      const res = await axios.get("adfad")
      setOrders(res)
    } catch (error) {
      console.log(error)
    }
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const currentDate = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(currentDate.getDate() - 7);
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(currentDate.getMonth() - 1);

  const filteredOrders = (() => {
    // Select the correct order list based on status filter
    const ordersList = statusFilter === "delivered" ? mockDeliveredOrders : mockInTransitOrders;
    
    // Then apply time filter (only for delivered orders)
    if (statusFilter === "delivered") {
      if (timeFilter === "week") {
        return ordersList.filter(order => new Date(order.deliveredAt) >= oneWeekAgo);
      }
      if (timeFilter === "month") {
        return ordersList.filter(order => new Date(order.deliveredAt) >= oneMonthAgo);
      }
    }
    
    return ordersList;
  })();

  const handleOrderClick = (orderId: string) => {
    setSelectedOrder(selectedOrder === orderId ? null : orderId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DeliveryNavbar />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
          <p className="text-gray-600 mt-1">Manage your accepted and delivered orders</p>

          {/* Status filter buttons */}
          <div className="mt-4 flex flex-wrap gap-2">
            <button 
              onClick={() => setStatusFilter("delivered")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "delivered" 
                  ? "bg-accent text-white" 
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              Delivered
            </button>
            <button 
              onClick={() => setStatusFilter("in-transit")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "in-transit" 
                  ? "bg-accent text-white" 
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              In Transit
            </button>
          </div>

          {/* Time filter - only show for delivered orders */}
          {statusFilter === "delivered" && (
            <div className="mt-4 flex flex-wrap gap-2">
              <button 
                onClick={() => setTimeFilter("all")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  timeFilter === "all" 
                    ? "bg-accent text-white" 
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                All Time
              </button>
              <button 
                onClick={() => setTimeFilter("month")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  timeFilter === "month" 
                    ? "bg-accent text-white" 
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                Past Month
              </button>
              <button 
                onClick={() => setTimeFilter("week")}
                className={`px-4 py-2 rounded-md text-sm font-medium ${
                  timeFilter === "week" 
                    ? "bg-accent text-white" 
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                Past Week
              </button>
            </div>
          )}
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
                        selectedOrder === order.id ? "bg-accent/10" : "hover:bg-gray-50"
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
                          {statusFilter === "delivered" && (
                            <div className="mt-1 flex items-center">
                              <StarRating rating={(order as any).rating} />
                              <span className="text-xs text-gray-500 ml-1">
                                ({(order as any).rating}/5)
                              </span>
                            </div>
                          )}
                        </div>
                        <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          statusFilter === "delivered" 
                            ? "bg-green-100 text-green-800"
                            : "bg-accent/20 text-accent"
                        }`}>
                          {statusFilter === "delivered" ? "Delivered" : "In Transit"}
                        </span>
                      </div>

                      <div className="mt-2 flex flex-col gap-1">
                        <div className="flex items-center text-xs">
                          <svg className="h-3.5 w-3.5 text-gray-400 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-gray-600">
                            {statusFilter === "delivered" 
                              ? `Delivered: ${new Date((order as any).deliveredAt).toLocaleDateString()}`
                              : `Expected: ${new Date(order.estimatedDelivery).toLocaleDateString()}`
                            }
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex justify-between items-center">
                        <div className="text-xs text-gray-500">
                          {statusFilter === "delivered" 
                            ? (order as any).deliveryPartner
                            : order.customerName
                          }
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
                      {statusFilter === "delivered" 
                        ? "No delivered orders in the selected time period."
                        : "You don't have any orders in transit."
                      }
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
                  const orderList = statusFilter === "delivered" ? mockDeliveredOrders : mockInTransitOrders;
                  const order = orderList.find(o => o.id === selectedOrder);
                  if (!order) return null;
                  
                  // Render different content based on order status
                  if (statusFilter === "delivered") {
                    // Display delivered order details
                    const deliveredOrder = order as typeof mockDeliveredOrders[0];
                    return (
                      <>
                        <div className="p-6 border-b border-gray-200">
                          <div className="flex justify-between items-start">
                            <div>
                              <h2 className="text-xl font-bold text-gray-900">{deliveredOrder.itemName}</h2>
                              <p className="text-sm text-gray-500 mt-1">Order #{deliveredOrder.id}</p>
                            </div>
                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Delivered
                            </span>
                          </div>
                          
                          <div className="mt-4 flex items-center">
                            <StarRating rating={deliveredOrder.rating} />
                            <span className="ml-2 text-sm text-gray-700">
                              {deliveredOrder.rating}/5 Rating
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6 border-b border-gray-200">
                          <h3 className="text-md font-medium text-gray-900 mb-4">Delivery Details</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Delivered On</p>
                              <p className="text-sm font-medium text-gray-900">
                                {new Date(deliveredOrder.deliveredAt).toLocaleDateString()} at {new Date(deliveredOrder.deliveredAt).toLocaleTimeString()}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Order Placed</p>
                              <p className="text-sm font-medium text-gray-900">
                                {new Date(deliveredOrder.createdAt).toLocaleDateString()} at {new Date(deliveredOrder.createdAt).toLocaleTimeString()}
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Pickup Location</h4>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-sm text-gray-700">{deliveredOrder.pickupLocation}</p>
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Delivery Location</h4>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-sm text-gray-700">{deliveredOrder.deliveryLocation}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 border-b border-gray-200">
                          <h3 className="text-md font-medium text-gray-900 mb-4">Item Details</h3>
                          <p className="text-sm text-gray-700 mb-4">
                            {deliveredOrder.itemDescription}
                          </p>
                          
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                              <span className="text-white text-sm font-medium">
                                {deliveredOrder.deliveryPartner.charAt(0)}
                              </span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">{deliveredOrder.deliveryPartner}</p>
                              <p className="text-xs text-gray-500">Delivery Partner</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-md font-medium text-gray-900 mb-3">Feedback</h3>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-700 italic">
                              "{deliveredOrder.feedback}"
                            </p>
                          </div>
                          
                          <div className="mt-6 flex justify-between items-center">
                            <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                              Contact Support
                            </button>
                            <span className="text-md font-bold text-gray-900">₹{deliveredOrder.price}</span>
                          </div>
                        </div>
                      </>
                    );
                  } else {
                    // Display in-transit order details
                    const inTransitOrder = order as typeof mockInTransitOrders[0];
                    return (
                      <>
                        <div className="p-6 border-b border-gray-200">
                          <div className="flex justify-between items-start">
                            <div>
                              <h2 className="text-xl font-bold text-gray-900">{inTransitOrder.itemName}</h2>
                              <p className="text-sm text-gray-500 mt-1">Order #{inTransitOrder.id}</p>
                            </div>
                            <span className="px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-accent/20 text-accent">
                              In Transit
                            </span>
                          </div>
                          
                          <div className="mt-4">
                            <p className="text-sm text-gray-700">
                              {inTransitOrder.pickupCompleted ? 
                                "Item picked up, on the way to delivery" :
                                "On the way to pickup location"}
                            </p>
                            <p className="text-sm font-medium text-gray-900 mt-1">
                              Expected Delivery: {new Date(inTransitOrder.estimatedDelivery).toLocaleString()}
                            </p>
                          </div>
                        </div>
                        
                        <div className="p-6 border-b border-gray-200">
                          <h3 className="text-md font-medium text-gray-900 mb-4">Delivery Details</h3>
                          
                          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Pickup Location</h4>
                              <div className={`bg-gray-50 p-3 rounded-lg ${inTransitOrder.pickupCompleted ? "bg-green-50" : ""}`}>
                                <p className="text-sm text-gray-700">{inTransitOrder.pickupLocation}</p>
                                {inTransitOrder.pickupCompleted && 
                                  <p className="text-xs text-green-600 mt-1">✓ Pickup completed</p>
                                }
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-900 mb-2">Delivery Location</h4>
                              <div className="bg-gray-50 p-3 rounded-lg">
                                <p className="text-sm text-gray-700">{inTransitOrder.deliveryLocation}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Accepted At</p>
                              <p className="text-sm font-medium text-gray-900">
                                {new Date(inTransitOrder.acceptedAt).toLocaleTimeString()} on {new Date(inTransitOrder.acceptedAt).toLocaleDateString()}
                              </p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500 mb-1">Order Placed</p>
                              <p className="text-sm font-medium text-gray-900">
                                {new Date(inTransitOrder.createdAt).toLocaleTimeString()} on {new Date(inTransitOrder.createdAt).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 border-b border-gray-200">
                          <h3 className="text-md font-medium text-gray-900 mb-4">Item Details</h3>
                          <p className="text-sm text-gray-700 mb-4">
                            {inTransitOrder.itemDescription}
                          </p>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-md font-medium text-gray-900 mb-3">Customer Information</h3>
                          <div className="flex items-center mb-4">
                            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                              <span className="text-white text-sm font-medium">
                                {inTransitOrder.customerName.charAt(0)}
                              </span>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium text-gray-900">{inTransitOrder.customerName}</p>
                              <p className="text-xs text-gray-500">{inTransitOrder.customerPhone}</p>
                            </div>
                          </div>
                          
                          <div className="mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                            <div className="flex space-x-3">
                              <button className="flex-1 px-4 py-2 bg-accent text-white rounded-md shadow-sm text-sm font-medium hover:bg-accent/90">
                                Call Customer
                              </button>
                              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                Message
                              </button>
                            </div>
                            <div className="text-md font-bold text-gray-900">₹{inTransitOrder.price}</div>
                          </div>
                          
                          {!inTransitOrder.pickupCompleted && (
                            <button className="w-full mt-4 py-3 px-4 bg-accent text-white rounded-md shadow-sm text-sm font-medium hover:bg-accent/90">
                              Mark Pickup as Complete
                            </button>
                          )}
                          
                          {inTransitOrder.pickupCompleted && (
                            <button className="w-full mt-4 py-3 px-4 bg-accent text-white rounded-md shadow-sm text-sm font-medium hover:bg-accent/90">
                              Complete Delivery
                            </button>
                          )}
                        </div>
                      </>
                    );
                  }
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
