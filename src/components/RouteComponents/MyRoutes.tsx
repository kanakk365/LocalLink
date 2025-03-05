import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { updateRouteStatus, deleteRoute, Route, updateOrderStatus } from "../../store/slice/routeSlice";

const MyRoutes: React.FC = () => {
  const dispatch = useDispatch();
  const { userRoutes } = useSelector((state: RootState) => state.route);
  const activeRoutes = userRoutes.filter((route) => route.status === "active");

  const handleStatusChange = (routeId: string, status: Route["status"]) => {
    dispatch(updateRouteStatus({ routeId, status }));
  };

  const handleDeleteRoute = (routeId: string) => {
    if (window.confirm("Are you sure you want to delete this route?")) {
      dispatch(deleteRoute(routeId));
    }
  };

  const routes = [
    {
      id: 1,
      startLocation: "Downtown",
      endLocation: "Business District",
      type: "recurring",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      departureTime: "08:00",
      arrivalTime: "08:45",
      availableSeats: 3,
      deliveryCapacity: "Medium",
      matches: {
        deliveries: 2,
        carpools: 1
      },
      status: "active"
    },
    {
      id: 2,
      startLocation: "Suburbs",
      endLocation: "City Center",
      type: "one-time",
      date: "2023-12-15",
      departureTime: "10:30",
      availableSeats: 2,
      deliveryCapacity: "Large",
      matches: {
        deliveries: 0,
        carpools: 0
      },
      status: "pending"
    },
    {
      id: 3,
      startLocation: "University",
      endLocation: "Shopping Mall",
      type: "recurring",
      days: ["Sat"],
      departureTime: "13:00",
      arrivalTime: "13:30",
      availableSeats: 1,
      deliveryCapacity: "Small",
      matches: {
        deliveries: 1,
        carpools: 0
      },
      status: "active"
    }
  ];

  if (activeRoutes.length === 0) {
    return (
      <div className="py-8 text-center">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
        </svg>
        <h3 className="mt-2 text-xl font-medium text-gray-900">No active routes</h3>
        <p className="mt-1 text-gray-500">You don't have any active routes at the moment.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">My Travel Routes</h2>
            <p className="text-sm text-gray-600 mt-1">Manage your existing routes</p>
          </div>
          <button className="rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            View Matches
          </button>
        </div>

        {routes.length === 0 ? (
          <div className="text-center py-6 bg-gray-50 rounded-lg">
            <p className="text-gray-500">You haven't created any routes yet</p>
            <button className="mt-2 text-blue-600 hover:text-blue-800">Create your first route</button>
          </div>
        ) : (
          <div className="space-y-4">
            {routes.map((route) => (
              <div 
                key={route.id} 
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-medium">
                          {route.startLocation} → {route.endLocation}
                        </h3>
                        <span className={`ml-3 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          route.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {route.status === 'active' ? 'Active' : 'Pending'}
                        </span>
                      </div>
                      
                      <div className="mt-2 flex flex-wrap gap-y-1">
                        {route.type === 'recurring' ? (
                          <span className="inline-flex items-center text-sm text-gray-700 mr-4">
                            <svg className="mr-1.5 h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {route.days.join(', ')}
                          </span>
                        ) : (
                          <span className="inline-flex items-center text-sm text-gray-700 mr-4">
                            <svg className="mr-1.5 h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {route.date}
                          </span>
                        )}
                        
                        <span className="inline-flex items-center text-sm text-gray-700 mr-4">
                          <svg className="mr-1.5 h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {route.departureTime}
                        </span>
                        
                        {route.type === 'recurring' && (
                          <span className="inline-flex items-center text-sm text-gray-700 mr-4">
                            <svg className="mr-1.5 h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                            </svg>
                            {route.arrivalTime}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="rounded p-2 hover:bg-gray-100">
                        <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="rounded p-2 hover:bg-gray-100">
                        <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-4 border-t border-gray-100 pt-4 flex justify-between">
                    <div className="flex space-x-6">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="text-sm">{route.availableSeats} seats</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4" />
                        </svg>
                        <span className="text-sm">{route.deliveryCapacity} capacity</span>
                      </div>
                    </div>
                    <div className="flex space-x-6">
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">{route.matches.deliveries} deliveries</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm">{route.matches.carpools} carpools</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRoutes;
