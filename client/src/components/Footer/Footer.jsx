import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 md:flex md:justify-between md:items-center">
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <img
            src="/path/to/logo.png"
            alt="Logo"
            className="w-12 h-12 mb-4"
          />
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <a href="mailto:hello@skillbridge.com" className="hover:underline">
                📧 hello@skillbridge.com
              </a>
            </li>
            <li>
              <a href="tel:+91918132309" className="hover:underline">
                📞 +91 91813 23 2309
              </a>
            </li>
            <li>📍 Somewhere in the World</li>
          </ul>
        </div>

        {/* Middle Section */}
        <div className="flex justify-around md:space-x-16">
          {/* Home Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Home</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="#" className="hover:underline">Benefits</a></li>
              <li><a href="#" className="hover:underline">Our Courses</a></li>
              <li><a href="#" className="hover:underline">Our Testimonials</a></li>
              <li><a href="#" className="hover:underline">Our FAQ</a></li>
            </ul>
          </div>

          {/* About Us Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">About Us</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li><a href="#" className="hover:underline">Company</a></li>
              <li><a href="#" className="hover:underline">Achievements</a></li>
              <li><a href="#" className="hover:underline">Our Goals</a></li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="font-semibold text-gray-800 mb-4">Social Profiles</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-200 p-2 rounded hover:bg-gray-300">
              <img src="/path/to/facebook-icon.png" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-200 p-2 rounded hover:bg-gray-300">
              <img src="/path/to/twitter-icon.png" alt="Twitter" className="w-5 h-5" />
            </a>
            <a href="#" className="bg-gray-200 p-2 rounded hover:bg-gray-300">
              <img src="/path/to/linkedin-icon.png" alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2023 Skillbridge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
