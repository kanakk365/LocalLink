import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRoute } from "../../store/slice/routeSlice";
import { RootState } from "../../store/store";
import { v4 as uuidv4 } from "uuid";
import RouteMap from "../ui/RouteMap";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user) {
      alert("You must be logged in to create a route");
      return;
    }

    // Create new route with generated ID
    dispatch(
      addRoute({
        id: uuidv4(),
        userId: user.email || "",
        userName: user.name || "",
        startLocation: formData.startLocation,
        endLocation: formData.endLocation,
        date: formData.date,
        time: formData.time,
        status: "active",
      })
    );

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
    <div className="grid grid-cols-12 gap-4">
      {/* Left column - Form */}
      <div className="col-span-4 bg-white">
        <p className="text-gray-700 mb-6">
          Share your journey with others and help deliver items along your
          route.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="flex items-center p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-black">
              <svg
                className="h-6 w-6 text-gray-400 mr-3"
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
                placeholder="Starting location"
                required
              />
            </div>

            <div className="flex items-center p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-black">
              <svg
                className="h-6 w-6 text-gray-400 mr-3"
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
                placeholder="Destination"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-black">
                <svg
                  className="h-6 w-6 text-gray-400 mr-3"
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

              <div className="flex items-center p-4 border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 focus-within:ring-2 focus-within:ring-black">
                <svg
                  className="h-6 w-6 text-gray-400 mr-3"
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

            {showPreview && formData.startLocation && formData.endLocation && (
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Route Preview
                </h3>
                <RouteMap
                  startLocation={formData.startLocation}
                  endLocation={formData.endLocation}
                />
              </div>
            )}
          </div>

          <div className="mt-8 flex space-x-4">
            <button
              type="button"
              onClick={handlePreview}
              className="flex-1 bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg hover:bg-gray-300 transition duration-200 mr-2"
            >
              Preview Route
            </button>
            <button
              type="submit"
              className="flex-1 bg-black text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-800 transition duration-200"
            >
              Create Route
            </button>
          </div>
        </form>
      </div>
      
      {/* Right column - Map */}
      <div className="col-span-8 bg-white rounded-lg overflow-hidden min-h-[500px]">
        {formData.startLocation && formData.endLocation ? (
          <RouteMap
            startLocation={formData.startLocation}
            endLocation={formData.endLocation}
          />
        ) : (
          <div className="h-full flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-center">
              Enter start and destination locations<br />to see the route map
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateRoute;
