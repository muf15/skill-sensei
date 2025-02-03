import React from "react";
import Navbar from "../Navbar/Navbar";

const HeroSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16 mt-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
          ⚡ <span className="text-orange-500">Unlock</span> Your Creative
          Potential
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          with Online Design and Development Courses.
          <br />
          Learn from Industry Experts and Enhance Your Skills.
        </p>
        <div className="flex space-x-4 mb-10">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600">
            Explore Courses
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-300">
            View Pricing
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
