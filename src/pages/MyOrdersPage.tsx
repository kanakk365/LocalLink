import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate } from "react-router-dom";
import OrderNavbar from "@/components/OrdersComp/OrderNavbar";
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
  "in-progress": "bg-accent/20 text-accent-foreground",
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
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <OrderNavbar />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary">My Orders</h1>
          <p className="text-primary/70 mt-1">View and manage all your delivery orders</p>
          
          <div className="mt-4 flex space-x-2">
            <button 
              onClick={() => setStatusFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "all" 
                  ? "bg-primary text-white" 
                  : "bg-white text-primary border border-gray-300 hover:bg-secondary"
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setStatusFilter("pending")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "pending" 
                  ? "bg-primary text-white" 
                  : "bg-white text-primary border border-gray-300 hover:bg-secondary"
              }`}
            >
              Pending
            </button>
            <button 
              onClick={() => setStatusFilter("in-progress")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "in-progress" 
                  ? "bg-primary text-white" 
                  : "bg-white text-primary border border-gray-300 hover:bg-secondary"
              }`}
            >
              In Progress
            </button>
            <button 
              onClick={() => setStatusFilter("completed")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "completed" 
                  ? "bg-primary text-white" 
                  : "bg-white text-primary border border-gray-300 hover:bg-secondary"
              }`}
            >
              Completed
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-secondary overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-secondary">
              <thead className="bg-secondary/50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary/70 uppercase tracking-wider">
                    Order Details
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary/70 uppercase tracking-wider">
                    Locations
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary/70 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary/70 uppercase tracking-wider">
                    Budget
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary/70 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-secondary">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => (
                    <React.Fragment key={order.id}>
                      <tr 
                        onClick={() => handleOrderClick(order.id)}
                        className="cursor-pointer hover:bg-secondary/30"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-primary">{order.itemName}</div>
                          <div className="text-sm text-primary/70">Order #{order.id}</div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-primary">From: {order.pickup}</div>
                          <div className="text-sm text-primary/70">To: {order.dropoff}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-primary/70">
                          {new Date(order.deliveryDeadline).toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-primary/70">
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
                          <td colSpan={5} className="px-6 py-4 bg-secondary/30">
                            <div className="text-sm">
                              <h4 className="font-medium text-primary mb-2">Order Details</h4>
                              <p className="text-primary/80 mb-2"><span className="font-medium">Description:</span> {order.description}</p>
                              <p className="text-primary/80 mb-2"><span className="font-medium">Created:</span> {new Date(order.createdAt).toLocaleString()}</p>
                              
                              <div className="mt-4 flex space-x-4">
                                <button className="px-3 py-1 bg-accent text-white text-xs rounded hover:bg-accent/90">
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
                    <td colSpan={5} className="px-6 py-4 text-center text-sm text-primary/70">
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
