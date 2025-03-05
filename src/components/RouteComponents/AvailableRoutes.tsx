import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { addOrderToRoute, Order, Route } from "../../store/slice/routeSlice";
import { v4 as uuidv4 } from 'uuid';
import RouteMap from "../ui/RouteMap";

const AvailableRoutes: React.FC = () => {
  const dispatch = useDispatch();
  const { routes } = useSelector((state: RootState) => state.route);
  const { user } = useSelector((state: RootState) => state.auth);
  
  const [selectedRouteId, setSelectedRouteId] = useState<string | null>(null);
  const [orderForm, setOrderForm] = useState({
    pickupLocation: "",
    deliveryLocation: "",
    itemDescription: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const activeRoutes = routes.filter(
    (route) => route.status === "active" && route.userId !== user?.email
  );

  const filteredRoutes = searchTerm 
    ? activeRoutes.filter(route => 
        route.startLocation.toLowerCase().includes(searchTerm.toLowerCase()) || 
        route.endLocation.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : activeRoutes;

  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setOrderForm({
      ...orderForm,
      [name]: value,
    });
  };

  const handleSubmitOrder = (e: React.FormEvent, routeId: string) => {
    e.preventDefault();
    
    if (!user) {
      alert("You must be logged in to place an order");
      return;
    }
    
    const newOrder: Order = {
      id: uuidv4(),
      userId: user.email || "",
      userName: user.name || "",
      pickupLocation: orderForm.pickupLocation,
      deliveryLocation: orderForm.deliveryLocation,
      itemDescription: orderForm.itemDescription,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    
    dispatch(addOrderToRoute({ routeId, order: newOrder }));
    
    setOrderForm({
      pickupLocation: "",
      deliveryLocation: "",
      itemDescription: "",
    });
    
    setSelectedRouteId(null);
    
    alert("Order placed successfully!");
  };

  if (!selectedRouteId) {
    // Browse routes view
    return (
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Request a Delivery</h2>
          <p className="text-gray-600">Find someone traveling your route who can deliver your items</p>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center p-4 border border-gray-300 rounded-lg bg-white shadow-sm focus-within:ring-2 focus-within:ring-black">
            <svg className="h-5 w-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="text"
              placeholder="Search routes by location..."
              className="w-full bg-transparent outline-none border-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {filteredRoutes.length === 0 ? (
          <div className="py-8 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
            </svg>
            <h3 className="mt-2 text-xl font-medium text-gray-900">No available routes</h3>
            <p className="mt-1 text-gray-500">
              {searchTerm 
                ? `No routes found matching "${searchTerm}"`
                : "There are no active delivery routes at the moment."
              }
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-gray-900">Available Routes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredRoutes.map((route) => (
                <div key={route.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-32 bg-gray-200 relative">
                    <div className="absolute inset-0">
                      <RouteMap startLocation={route.startLocation} endLocation={route.endLocation} />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-1">
                      {route.startLocation} → {route.endLocation}
                    </h3>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-sm text-gray-600">
                        {new Date(route.date).toLocaleDateString()} • {route.time}
                      </p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      {route.userName}
                    </div>
                    <button
                      onClick={() => setSelectedRouteId(route.id)}
                      className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                    >
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                      </svg>
                      Request Delivery
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  } else {
    // Order detail view
    const selectedRoute = routes.find(route => route.id === selectedRouteId) as Route;

    return (
      <div>
        <button 
          onClick={() => setSelectedRouteId(null)}
          className="mb-6 flex items-center text-gray-600 hover:text-black"
        >
          <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Back to routes
        </button>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Request Delivery</h2>
          <div className="flex items-center text-gray-600">
            <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
            </svg>
            <span className="font-medium">{selectedRoute.startLocation} → {selectedRoute.endLocation}</span>
            <span className="mx-2">•</span>
            <span>{new Date(selectedRoute.date).toLocaleDateString()} at {selectedRoute.time}</span>
          </div>
        </div>
        
        <div className="mb-6">
          <RouteMap startLocation={selectedRoute.startLocation} endLocation={selectedRoute.endLocation} />
        </div>
        
        <form onSubmit={(e) => handleSubmitOrder(e, selectedRoute.id)}>
          <div className="space-y-5 mb-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 mb-4">Delivery Details</h3>
            
            {/* Order form fields */}
            <div>
              <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-1">
                Pickup Location
              </label>
              <div className="flex items-center p-3 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-black">
                <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <input
                  type="text"
                  id="pickupLocation"
                  name="pickupLocation"
                  value={orderForm.pickupLocation}
                  onChange={handleOrderChange}
                  className="flex-1 bg-transparent outline-none border-none"
                  placeholder="Pick-up location (must be along route)"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="deliveryLocation" className="block text-sm font-medium text-gray-700 mb-1">
                Delivery Location
              </label>
              <div className="flex items-center p-3 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-black">
                <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <input
                  type="text"
                  id="deliveryLocation"
                  name="deliveryLocation"
                  value={orderForm.deliveryLocation}
                  onChange={handleOrderChange}
                  className="flex-1 bg-transparent outline-none border-none"
                  placeholder="Delivery location (must be along route)"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="itemDescription" className="block text-sm font-medium text-gray-700 mb-1">
                Item Description
              </label>
              <div className="border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-black">
                <textarea
                  id="itemDescription"
                  name="itemDescription"
                  value={orderForm.itemDescription}
                  onChange={handleOrderChange}
                  className="w-full p-3 bg-transparent outline-none border-none"
                  placeholder="Describe what you need delivered"
                  rows={3}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
          >
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            Request Delivery
          </button>
        </form>
      </div>
    );
  }
};

export default AvailableRoutes;
