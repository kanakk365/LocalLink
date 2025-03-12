"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Search, User, ChevronDown } from "lucide-react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
      }`}
      id="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className={`text-xl font-bold flex items-center ${isScrolled ? "text-primary" : "text-primary"}`}
            >
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center text-white mr-2 shadow-md">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L4 6V18L12 22L20 18V6L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22V16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 6L12 10L4 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              LocalLink
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="relative mx-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search routes..."
                className="pl-10 pr-4 py-1.5 text-sm bg-gray-100 border-0 rounded-full focus:ring-2 focus:ring-accent focus:bg-white transition-all duration-300 w-40 focus:w-56"
              />
            </div>

            <NavLink to="/" isScrolled={isScrolled}>
              Home
            </NavLink>
            <NavLink to="/how-it-works" isScrolled={isScrolled}>
              How It Works
            </NavLink>

            <div className="relative group">
              <button
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled ? "text-gray-700 hover:text-accent" : "text-gray-700 hover:text-accent"
                }`}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
              </button>

              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                <div className="py-1 rounded-md bg-white shadow-xs">
                  <Link to="/delivery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Place Order
                  </Link>
                  <Link to="/carpool" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Become Deliverer
                  </Link>
                  <Link to="/features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Features
                  </Link>
                </div>
              </div>
            </div>

            <NavLink to="/pricing" isScrolled={isScrolled}>
              Pricing
            </NavLink>
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-primary hover:text-accent transition-colors flex items-center text-sm font-medium"
            >
              <User className="h-4 w-4 mr-1" />
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-accent hover:bg-accent-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm shadow-accent/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className={`p-2 rounded-md ${isScrolled ? "text-primary" : "text-primary"}`}
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg mx-4">
          <div className="px-3 py-2 mb-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search routes..."
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 border-0 rounded-lg focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          <MobileNavLink to="/">Home</MobileNavLink>
          <MobileNavLink to="/how-it-works">How It Works</MobileNavLink>
          <MobileNavLink to="/delivery">Place Order</MobileNavLink>
          <MobileNavLink to="/carpool">Become Deliverer</MobileNavLink>
          <MobileNavLink to="/features">Features</MobileNavLink>
          <MobileNavLink to="/pricing">Pricing</MobileNavLink>

          <div className="pt-4 pb-2 border-t border-gray-200 mt-4 flex space-x-2">
            <Link
              to="/login"
              className="w-1/2 flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-primary bg-white hover:bg-gray-50"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="w-1/2 flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-dark"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Desktop navigation link component
const NavLink = ({ to, children, isScrolled }) => (
  <Link
    to={to}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isScrolled ? "text-gray-700 hover:text-accent" : "text-gray-700 hover:text-accent"
    }`}
  >
    {children}
  </Link>
)

// Mobile navigation link component
const MobileNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-accent hover:bg-gray-50"
  >
    {children}
  </Link>
)

export default Navbar

