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

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <svg className="h-8 w-8 text-[#1ABC9C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[#2C3E50] text-xl font-bold tracking-tight">LocalLink</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/my-orders"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isMyOrdersPage 
                  ? "bg-[#ECF0F1] text-[#2C3E50]" 
                  : "text-[#2C3E50] hover:bg-[#ECF0F1] hover:text-[#2C3E50]"
              }`}
            >
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                My Orders
              </div>
            </Link>
            
            <Link
              to="/active-routes"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActiveRoutesPage 
                  ? "bg-[#ECF0F1] text-[#2C3E50]" 
                  : "text-[#2C3E50] hover:bg-[#ECF0F1] hover:text-[#2C3E50]"
              }`}
            >
              <div className="flex items-center">
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Active Routes
              </div>
            </Link>
            
            {isAuthenticated && (
              <>
                <Link
                  to="/delivery"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isDeliveryPage 
                      ? "bg-[#ECF0F1] text-[#2C3E50]" 
                      : "text-[#2C3E50] hover:bg-[#ECF0F1] hover:text-[#2C3E50]"
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Deliver Something
                  </div>
                </Link>
                
               
              </>
            )}
            
            <div className="h-5 w-px bg-[#ECF0F1] mx-1"></div>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-[#1ABC9C] flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {user?.name?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-[#2C3E50] text-sm font-medium">
                    {user?.name}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-[#ECF0F1] hover:bg-[#d8dcdd] text-[#2C3E50] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-[#1ABC9C] hover:bg-[#15a589] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#2C3E50] hover:text-[#2C3E50] hover:bg-[#ECF0F1] focus:outline-none"
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

        <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden border-t border-[#ECF0F1] pt-2`}>
          <div className="px-2 py-2 space-y-1">
            <Link
              to="/my-orders"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isMyOrdersPage 
                  ? "bg-[#ECF0F1] text-[#2C3E50]" 
                  : "text-[#2C3E50] hover:bg-[#ECF0F1] hover:text-[#2C3E50]"
              }`}
            >
              My Orders
            </Link>
            
            <Link
              to="/active-routes"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActiveRoutesPage 
                  ? "bg-[#ECF0F1] text-[#2C3E50]" 
                  : "text-[#2C3E50] hover:bg-[#ECF0F1] hover:text-[#2C3E50]"
              }`}
            >
              Active Routes
            </Link>
            
            {isAuthenticated && (
              <>
                <Link
                  to="/delivery"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isDeliveryPage 
                      ? "bg-[#ECF0F1] text-[#2C3E50]" 
                      : "text-[#2C3E50] hover:bg-[#ECF0F1] hover:text-[#2C3E50]"
                  }`}
                >
                  Delivery
                </Link>
                
                
              </>
            )}

            <div className="my-3 border-t border-[#ECF0F1] pt-3">
              {isAuthenticated ? (
                <>
                  <div className="px-3 py-2 flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-full bg-[#1ABC9C] flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {user?.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <span className="text-[#2C3E50] text-base font-medium">
                      {user?.name}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="mt-2 w-full text-left block bg-[#ECF0F1] hover:bg-[#d8dcdd] text-[#2C3E50] px-3 py-2 rounded-md text-base font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="block bg-[#1ABC9C] hover:bg-[#15a589] text-white px-3 py-2 rounded-md text-base font-medium"
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