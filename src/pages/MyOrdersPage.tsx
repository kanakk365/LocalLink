import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate } from "react-router-dom";
import OrderNavbar from "@/components/OrderNavbar";
import axios from "axios";

// Mock data - would be replaced with actual API data
const mockOrders = [
  {
    id: "ord-001",
    itemName: "Laptop",
    description: "MacBook Pro 16-inch. Handle with care.",
    pickup: "123 Main St, Mumbai",
    dropoff: "456 Park Ave, Mumbai",
    createdAt: "2023-08-15T10:30:00",
    deliveryDeadline: "2023-08-16T14:00:00",
    budget: 500,
    status: "pending",
  },
  {
    id: "ord-002",
    itemName: "Documents",
    description: "Important legal documents in sealed envelope",
    pickup: "78 Business Park, Delhi",
    dropoff: "92 Corporate Tower, Delhi",
    createdAt: "2023-08-14T09:15:00",
    deliveryDeadline: "2023-08-14T16:30:00",
    budget: 250,
    status: "in-progress",
  },
  {
    id: "ord-003",
    itemName: "Gift Package",
    description: "Birthday gift, fragile items inside",
    pickup: "45 Residential Area, Bangalore",
    dropoff: "67 Housing Society, Bangalore",
    createdAt: "2023-08-10T14:20:00",
    deliveryDeadline: "2023-08-11T12:00:00",
    budget: 350,
    status: "completed",
  }
];

interface Order {
  id: string;
  itemName: string;
  description: string;
  pickup: string;
  dropoff: string;
  createdAt: string;
  deliveryDeadline: string;
  budget: number;
  status: "pending" | "in-progress" | "completed" | "cancelled";
}

const statusColors: Record<string, string> = {
  "pending": "bg-yellow-100 text-yellow-800",
  "in-progress": "bg-blue-100 text-blue-800",
  "completed": "bg-green-100 text-green-800",
  "cancelled": "bg-red-100 text-red-800",
};

const MyOrdersPage: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
  const [orders , setOrders]= useState<Order[]>()

  const getOrders = async ()=>{
    try {
      const res = await axios.get("lazy_backend_dev" )
    setOrders(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getOrders()
  },[])

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const filteredOrders = statusFilter === "all" 
    ? mockOrders 
    : mockOrders.filter(order => order.status === statusFilter);

  const handleOrderClick = (orderId: string) => {
    setSelectedOrder(selectedOrder === orderId ? null : orderId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <OrderNavbar />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
          <p className="text-gray-600 mt-1">View and manage all your delivery orders</p>
          
          <div className="mt-4 flex space-x-2">
            <button 
              onClick={() => setStatusFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "all" 
                  ? "bg-gray-900 text-white" 
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              All
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
              onClick={() => setStatusFilter("in-progress")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "in-progress" 
                  ? "bg-gray-900 text-white" 
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              In Progress
            </button>
            <button 
              onClick={() => setStatusFilter("completed")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "completed" 
                  ? "bg-gray-900 text-white" 
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order Details
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Locations
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Budget
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <React.Fragment key={order.id}>
                      <tr 
                        onClick={() => handleOrderClick(order.id)}
                        className="cursor-pointer hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{order.itemName}</div>
                          <div className="text-sm text-gray-500">Order #{order.id}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">From: {order.pickup}</div>
                          <div className="text-sm text-gray-500">To: {order.dropoff}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(order.deliveryDeadline).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          ₹{order.budget}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[order.status]}`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                      {selectedOrder === order.id && (
                        <tr>
                          <td colSpan={5} className="px-6 py-4 bg-gray-50">
                            <div className="text-sm">
                              <h4 className="font-medium text-gray-900 mb-2">Order Details</h4>
                              <p className="text-gray-600 mb-2"><span className="font-medium">Description:</span> {order.description}</p>
                              <p className="text-gray-600 mb-2"><span className="font-medium">Created:</span> {new Date(order.createdAt).toLocaleString()}</p>
                              
                              <div className="mt-4 flex space-x-4">
                                <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700">
                                  Track Order
                                </button>
                                {order.status === "pending" && (
                                  <button className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700">
                                    Cancel Order
                                  </button>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-sm text-gray-500">
                      No orders found with the selected filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;
