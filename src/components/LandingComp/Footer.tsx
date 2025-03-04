import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">LocalLink</h3>
            <p className="text-neutral-400">Connecting communities through shared journeys and deliveries.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.17 12.89c-.38 1.18-1.39 2.19-2.57 2.57-1.78.48-6 .48-6 .48s-4.22 0-6-.48c-1.18-.38-2.19-1.39-2.57-2.57-.48-1.78-.48-6-.48-6s0-4.22.48-6c.38-1.18 1.39-2.19 2.57-2.57 1.78-.48 6-.48 6-.48s4.22 0 6 .48c1.18.38 2.19 1.39 2.57 2.57.48 1.78.48 6 .48 6s0 4.22-.48 6z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Community Guidelines</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Safety Information</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" required className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your email" />
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <p className="text-center text-neutral-400">© 2024 LocalLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;