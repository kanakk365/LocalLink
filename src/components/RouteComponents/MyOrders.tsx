import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Order, Route } from "../../store/slice/routeSlice";

const MyOrders: React.FC = () => {
  const { routes } = useSelector((state: RootState) => state.route);
  const { user } = useSelector((state: RootState) => state.auth);

  // Get all orders made by the current user
  const myOrders: { order: Order; route: Route }[] = [];
  
  routes.forEach(route => {
    route.orders.forEach(order => {
      if (order.userId === user?.email) {
        myOrders.push({ order, route });
      }
    });
  });

  if (myOrders.length === 0) {
    return (
      <div className="py-8 text-center">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
        <h3 className="mt-2 text-xl font-medium text-gray-900">No active orders</h3>
        <p className="mt-1 text-gray-500">You don't have any pending delivery orders.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Orders</h2>
      
      <div className="space-y-6">
        {myOrders.map(({ order, route }) => (
          <div key={order.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <div className="p-5">
              <div className="flex items-center justify-between">
                <div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : order.status === "accepted"
                        ? "bg-blue-100 text-blue-800"
                        : order.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-lg font-medium text-gray-900">{order.itemDescription}</p>
                
                <div className="mt-2 space-y-1">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="h-4 w-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>Pickup: {order.pickupLocation}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="h-4 w-4 text-gray-400 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                    <span>Delivery: {order.deliveryLocation}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <svg className="h-4 w-4 text-gray-400 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                  <span className="text-sm text-gray-600">
                    Route: {route.startLocation} → {route.endLocation}
                  </span>
                </div>
                <div className="flex items-center mt-1">
                  <svg className="h-4 w-4 text-gray-400 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <span className="text-sm text-gray-600">Driver: {route.userName}</span>
                </div>
                <div className="flex items-center mt-1">
                  <svg className="h-4 w-4 text-gray-400 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-sm text-gray-600">
                    {new Date(route.date).toLocaleDateString()} at {route.time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
