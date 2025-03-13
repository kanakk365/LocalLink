import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRoute } from "../../store/slice/routeSlice";
import { RootState } from "../../store/store";
import { v4 as uuidv4 } from "uuid";
import RouteMap from "../ui/RouteMap";
import axios from "axios";

const CreateRoute: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const [formData, setFormData] = useState({
    startLocation: "",
    endLocation: "",
    date: "",
    time: "",
  });

  const [showPreview, setShowPreview] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(formData)
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Hide preview when form changes
    if (showPreview && (name === "startLocation" || name === "endLocation")) {
      setShowPreview(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData)

    if (!user) {
      alert("You must be logged in to create a route");
      return;
    }

    try {
      const res = await axios.post("0_0" , formData)
      
    } catch (error) {
      console.log(error)
    }
    

    // Reset form
    setFormData({
      startLocation: "",
      endLocation: "",
      date: "",
      time: "",
    });

    setShowPreview(false);
    alert("Route created successfully!");
  };

  const handlePreview = () => {
    if (formData.startLocation && formData.endLocation) {
      setShowPreview(true);
    } else {
      alert("Please enter both starting location and destination");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
      {/* Form Section - 30% width */}
      <div className="lg:col-span-3 bg-white rounded-xl shadow-sm p-6 border border-gray-200">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Create Route</h2>
          <p className="text-gray-700">
            Share your journey with others and help deliver items along your route.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="startLocation" className="block text-sm font-medium text-gray-700 mb-1">
                Starting Location
              </label>
              <div className="flex items-center px-4 py-3 rounded-lg border border-gray-300 focus-within:ring-blue-500 focus-within:border-blue-500">
                <svg
                  className="h-5 w-5 text-gray-400 mr-3"
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
                <input
                  type="text"
                  id="startLocation"
                  name="startLocation"
                  value={formData.startLocation}
                  onChange={handleChange}
                  className="flex-1 bg-transparent outline-none border-none"
                  placeholder="Enter starting location"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="endLocation" className="block text-sm font-medium text-gray-700 mb-1">
                Destination
              </label>
              <div className="flex items-center px-4 py-3 rounded-lg border border-gray-300 focus-within:ring-blue-500 focus-within:border-blue-500">
                <svg
                  className="h-5 w-5 text-gray-400 mr-3"
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
                <input
                  type="text"
                  id="endLocation"
                  name="endLocation"
                  value={formData.endLocation}
                  onChange={handleChange}
                  className="flex-1 bg-transparent outline-none border-none"
                  placeholder="Enter destination"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <div className="flex items-center px-4 py-3 rounded-lg border border-gray-300 focus-within:ring-blue-500 focus-within:border-blue-500">
                <svg
                  className="h-5 w-5 text-gray-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="flex-1 bg-transparent outline-none border-none"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <div className="flex items-center px-4 py-3 rounded-lg border border-gray-300 focus-within:ring-blue-500 focus-within:border-blue-500">
                <svg
                  className="h-5 w-5 text-gray-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="flex-1 bg-transparent outline-none border-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className="pt-5">
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#0a0a0a] hover:bg-[#282828] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Create Route
            </button>
          </div>
        </form>
      </div>

      {/* Map Section - 70% width */}
      <div className="lg:col-span-7">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden ">
              <div className="p-4 border-b border-gray-200">
                <h2 className="font-medium text-gray-900">Delivery Route</h2>
                <p className="text-sm text-gray-500">Preview the route on the map</p>
              </div>
              <div className="bg-gray-200 h-[600px] flex items-center justify-center">
                <div className="text-center p-4">
                  <svg 
                    className="mx-auto h-12 w-12 text-gray-400" 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={1.5} 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <p className="mt-2 text-sm text-gray-500">
                    Map will display your route after entering locations
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default CreateRoute;
