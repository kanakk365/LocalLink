import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate } from "react-router-dom";
import OrderNavbar from "@/components/OrdersComp/OrderNavbar";
import axios from "axios";

// Mock data - would be replaced with actual API data
const mockRoutes = [
  {
    id: "route-001",
    deliveryPartner: "Rahul Singh",
    startLocation: "Andheri East, Mumbai",
    destinations: [
      { address: "Bandra West, Mumbai", estimatedArrival: "2023-08-15T11:30:00" },
      { address: "Dadar, Mumbai", estimatedArrival: "2023-08-15T12:45:00" },
      { address: "Worli, Mumbai", estimatedArrival: "2023-08-15T14:00:00" }
    ],
    departureTime: "2023-08-15T10:00:00",
    estimatedCompletion: "2023-08-15T15:30:00",
    vehicle: "Motorcycle",
    status: "in-progress"
  },
  {
    id: "route-002",
    deliveryPartner: "Priya Patel",
    startLocation: "Indiranagar, Bangalore",
    destinations: [
      { address: "Koramangala, Bangalore", estimatedArrival: "2023-08-16T09:15:00" },
      { address: "HSR Layout, Bangalore", estimatedArrival: "2023-08-16T10:30:00" }
    ],
    departureTime: "2023-08-16T08:30:00",
    estimatedCompletion: "2023-08-16T11:45:00",
    vehicle: "Scooter",
    status: "scheduled"
  },
  {
    id: "route-003",
    deliveryPartner: "Amit Kumar",
    startLocation: "Connaught Place, Delhi",
    destinations: [
      { address: "Karol Bagh, Delhi", estimatedArrival: "2023-08-14T13:00:00" },
      { address: "Lajpat Nagar, Delhi", estimatedArrival: "2023-08-14T14:15:00" },
      { address: "Greater Kailash, Delhi", estimatedArrival: "2023-08-14T15:30:00" }
    ],
    departureTime: "2023-08-14T12:00:00",
    estimatedCompletion: "2023-08-14T16:45:00",
    vehicle: "Car",
    status: "completed"
  }
];

interface Route {
  id: string;
  deliveryPartner: string;
  startLocation: string;
  destinations: Destination[];
  departureTime: string;
  estimatedCompletion: string;
  vehicle: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
}

const statusColors: Record<string, string> = {
  "scheduled": "bg-yellow-100 text-yellow-800",
  "in-progress": "bg-accent/20 text-accent-foreground",
  "completed": "bg-green-100 text-green-800",
  "cancelled": "bg-red-100 text-red-800"
};

const ActiveRoutesPage: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [routes, setRoutes]= useState<Route[]>()

  const getActiveRoutes= async ()=>{
    try {
      const  res = await axios.get("")
      setRoutes(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getActiveRoutes()
  },[])

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const filteredRoutes = statusFilter === "all" 
    ? mockRoutes 
    : mockRoutes.filter(route => route.status === statusFilter);

  const handleRouteClick = (routeId: string) => {
    setSelectedRoute(selectedRoute === routeId ? null : routeId);
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <OrderNavbar />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primary">Active Delivery Routes</h1>
          <p className="text-primary/70 mt-1">View scheduled and ongoing delivery routes</p>

          <div className="mt-4 flex space-x-2">
            <button 
              onClick={() => setStatusFilter("all")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "all" 
                  ? "bg-primary text-white" 
                  : "bg-white text-primary border border-gray-300 hover:bg-secondary"
              }`}
            >
              All Routes
            </button>
            <button 
              onClick={() => setStatusFilter("scheduled")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                statusFilter === "scheduled" 
                  ? "bg-primary text-white" 
                  : "bg-white text-primary border border-gray-300 hover:bg-secondary"
              }`}
            >
              Scheduled
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
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Routes List - 2/5 width */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-secondary overflow-hidden">
              <div className="divide-y divide-secondary">
                {filteredRoutes.length > 0 ? (
                  filteredRoutes.map((route) => (
                    <div 
                      key={route.id}
                      onClick={() => handleRouteClick(route.id)}
                      className={`p-4 cursor-pointer transition-colors duration-150 ${
                        selectedRoute === route.id ? "bg-accent/10" : "hover:bg-secondary/50"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-medium text-primary">
                            Route #{route.id}
                          </h3>
                          <p className="mt-1 text-xs text-primary/70">
                            <span className="font-medium">Partner:</span> {route.deliveryPartner}
                          </p>
                          <p className="mt-1 text-xs text-primary/70">
                            <span className="font-medium">From:</span> {route.startLocation}
                          </p>
                          <p className="mt-1 text-xs text-primary/70">
                            <span className="font-medium">Destinations:</span> {route.destinations.length}
                          </p>
                        </div>
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[route.status]}`}>
                          {route.status.charAt(0).toUpperCase() + route.status.slice(1)}
                        </span>
                      </div>

                      <div className="mt-2 flex justify-between items-center">
                        <div className="text-xs text-primary/70">
                          <span className="font-medium">Departure:</span> {new Date(route.departureTime).toLocaleTimeString()}
                        </div>
                        <div className="text-xs text-primary/70">
                          <span className="font-medium">ETA:</span> {new Date(route.estimatedCompletion).toLocaleTimeString()}
                        </div>
                        <div className="text-xs bg-secondary px-2 py-1 rounded">
                          {route.vehicle}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-sm text-primary/70">
                    No routes found with the selected filter.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Map View - 3/5 width */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-secondary overflow-hidden h-full">
              <div className="p-4 border-b border-secondary">
                <h2 className="font-medium text-primary">Route Map</h2>
                {selectedRoute ? (
                  <p className="text-sm text-primary/70">
                    Viewing details for Route #{selectedRoute}
                  </p>
                ) : (
                  <p className="text-sm text-primary/70">Select a route to view details</p>
                )}
              </div>

              {selectedRoute ? (
                <div>
                  <div className="bg-secondary h-[400px] flex items-center justify-center">
                    <div className="text-center p-4">
                      <svg 
                        className="mx-auto h-12 w-12 text-primary/50" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                      </svg>
                      <p className="mt-2 text-sm text-primary/70">
                        Map view would show the route visualization
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-medium text-primary mb-2">Delivery Stops</h3>
                    
                    <div className="ml-2 relative border-l-2 border-secondary pl-6 py-2">
                      {mockRoutes.find(r => r.id === selectedRoute)?.destinations.map((dest, idx) => (
                        <div key={idx} className="mb-6 relative">
                          <div className="absolute -left-[2.15rem] w-4 h-4 rounded-full border-2 border-secondary bg-white"></div>
                          <div className="bg-secondary/50 p-3 rounded-lg">
                            <p className="text-sm font-medium text-primary">Stop #{idx + 1}</p>
                            <p className="text-sm text-primary/80">{dest.address}</p>
                            <p className="text-xs text-primary/60 mt-1">
                              Estimated arrival: {new Date(dest.estimatedArrival).toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      ))}
                      
                      <div className="absolute -left-[2.15rem] bottom-0 w-4 h-4 rounded-full bg-accent"></div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-secondary h-[500px] flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg 
                      className="mx-auto h-12 w-12 text-primary/50" 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                    <p className="mt-2 text-sm text-primary/70">
                      Select a route from the list to view details
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveRoutesPage;
