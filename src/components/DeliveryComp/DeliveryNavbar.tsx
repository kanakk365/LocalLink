import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { logout } from "../../store/slice/authSlice";
import { useAuth0 } from "@auth0/auth0-react";

const OrderNavbar: React.FC = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { logout: auth0Logout } = useAuth0();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });
    dispatch(logout());
    navigate("/");
  };

  const isDeliveryPage = location.pathname === "/delivery";
  const isOrderPage = location.pathname === "/orders";
  const isMyOrdersPage = location.pathname === "/my-orders";
  const isActiveRoutesPage = location.pathname === "/active-routes";
  const isOrdersDeliveredPage = location.pathname === "/orders-delivered";
  const isActiveOrdersPage = location.pathname === "/active-orders";

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-900 text-xl font-bold tracking-tight">LocalLink</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/orders-delivered"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isOrdersDeliveredPage 
                  ? "bg-blue-100 text-blue-800" 
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Orders Delivered
              </div>
            </Link>
            
            <Link
              to="/active-orders"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActiveOrdersPage 
                  ? "bg-blue-100 text-blue-800" 
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Active Orders
              </div>
            </Link>
            
            {isAuthenticated && (
              <>
              
                
                <Link
                  to="/orders"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isOrderPage 
                      ? "bg-blue-100 text-blue-800" 
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Orders Something
                  </div>
                </Link>
              </>
            )}
            
            <div className="h-5 w-px bg-gray-300 mx-1"></div>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-gray-700 text-sm font-medium">
                    {user?.name}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden border-t border-gray-200 pt-2`}>
          <div className="px-2 py-2 space-y-1">
            <Link
              to="/my-orders"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isMyOrdersPage 
                  ? "bg-blue-100 text-blue-800" 
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              My Orders
            </Link>
            
            <Link
              to="/active-routes"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActiveRoutesPage 
                  ? "bg-blue-100 text-blue-800" 
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Active Routes
            </Link>
            
            <Link
              to="/orders-delivered"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isOrdersDeliveredPage 
                  ? "bg-blue-100 text-blue-800" 
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Orders Delivered
            </Link>
            
            <Link
              to="/active-orders"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActiveOrdersPage 
                  ? "bg-blue-100 text-blue-800" 
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              Active Orders
            </Link>
            
            {isAuthenticated && (
              <>
            
                
                <Link
                  to="/orders"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isOrderPage 
                      ? "bg-blue-100 text-blue-800" 
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  Orders
                </Link>
              </>
            )}

            <div className="my-3 border-t border-gray-200 pt-3">
              {isAuthenticated ? (
                <>
                  <div className="px-3 py-2 flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-gray-900 text-base font-medium">
                      {user?.name}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="mt-2 w-full text-left block bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-2 rounded-md text-base font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default OrderNavbar;