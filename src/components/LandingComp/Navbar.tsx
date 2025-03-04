import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-neutral-900 fixed w-full z-50" id="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-xl font-bold">LocalLink</span>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {/* <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#delivery" className="text-gray-300 hover:text-white transition-colors">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#carpool" className="text-gray-300 hover:text-white transition-colors">
                  Carpool
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-300 hover:text-white transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li> */}
              <li>
                <Link to={"/login"} className="bg-[#dc2626] text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">Login</Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-400 hover:text-white" 
              aria-controls="mobile-menu" 
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
          <ul className="px-2 pt-2 pb-3 space-y-1">
            <li>
              <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#delivery" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Delivery
              </a>
            </li>
            <li>
              <a href="#carpool" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Carpool
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Features
              </a>
            </li>
            <li>
              <a href="#community" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Community
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
            </li>
            <li>
              <a href="#signup" className="bg-[#dc2626] text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-red-700 transition-colors">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;