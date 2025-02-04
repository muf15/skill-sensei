import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:flex md:justify-between md:items-start">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img
            src="/path/to/logo.png"
            alt="Logo"
            className="w-16 h-16 mb-4 rounded-full bg-white p-1 shadow-lg"
          />
          <ul className="text-sm text-gray-400 space-y-2">
            <li>
              <a href="mailto:hello@skillbridge.com" className="hover:text-gray-200">
                📧 hello@skillbridge.com
              </a>
            </li>
            <li>
              <a href="tel:+91918132309" className="hover:text-gray-200">
                📞 +91 91813 23 2309
              </a>
            </li>
            <li>📍 Somewhere in the World</li>
          </ul>
        </div>

        {/* Middle Section */}
        <div className="flex justify-around md:space-x-16 w-full md:w-auto">
          {/* Home Links */}
          <div>
            <h3 className="font-semibold text-gray-300 mb-4">Home</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-gray-200">Benefits</a></li>
              <li><a href="#" className="hover:text-gray-200">Our Courses</a></li>
              <li><a href="#" className="hover:text-gray-200">Testimonials</a></li>
              <li><a href="#" className="hover:text-gray-200">FAQ</a></li>
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h3 className="font-semibold text-gray-300 mb-4">About Us</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-gray-200">Company</a></li>
              <li><a href="#" className="hover:text-gray-200">Achievements</a></li>
              <li><a href="#" className="hover:text-gray-200">Our Goals</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end mt-6 md:mt-0">
          <h3 className="font-semibold text-gray-300 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-gray-600">
              <img src="/path/to/facebook-icon.png" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-gray-600">
              <img src="/path/to/twitter-icon.png" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-700 p-3 rounded-full hover:bg-gray-600">
              <img src="/path/to/linkedin-icon.png" alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © 2024 Skillbridge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;