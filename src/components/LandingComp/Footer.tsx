import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer id="footer" className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Top section with newsletter */}
        <div className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Stay Updated</h3>
              <p className="text-gray-600 mb-2">
                Get the latest news and updates about LocalLink delivered to your inbox
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-sm shadow-accent/20"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white mr-2 shadow-sm">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <h3 className="text-xl font-bold text-primary">LocalLink</h3>
              </div>
              <p className="text-gray-600">Connecting communities through shared journeys and deliveries.</p>

              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="text-gray-600 hover:text-accent transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/guidelines" className="text-gray-600 hover:text-accent transition-colors">
                    Community Guidelines
                  </Link>
                </li>
                <li>
                  <Link to="/safety" className="text-gray-600 hover:text-accent transition-colors">
                    Safety Information
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-600 hover:text-accent transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/press" className="text-gray-600 hover:text-accent transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/help" className="text-gray-600 hover:text-accent transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-accent transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-accent transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-accent transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="text-gray-600 hover:text-accent transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/accessibility" className="text-gray-600 hover:text-accent transition-colors">
                    Accessibility
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-accent mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    123 Community Drive
                    <br />
                    San Francisco, CA 94158
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-accent mr-2" />
                  <a href="mailto:hello@locallink.com" className="text-gray-600 hover:text-accent transition-colors">
                    hello@locallink.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-accent mr-2" />
                  <a href="tel:+1-555-123-4567" className="text-gray-600 hover:text-accent transition-colors">
                    (555) 123-4567
                  </a>
                </li>
              </ul>

              <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-100">
                <h4 className="text-sm font-medium text-primary mb-2">Business Hours</h4>
                <p className="text-sm text-gray-600">
                  Monday - Friday: 9AM - 6PM
                  <br />
                  Saturday: 10AM - 4PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} LocalLink. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-accent transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-accent transition-colors">
                Terms
              </Link>
              <Link to="/sitemap" className="text-sm text-gray-500 hover:text-accent transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

