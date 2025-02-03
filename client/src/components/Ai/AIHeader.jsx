import React from 'react';

const AiHeader = () => {
  return (
    <div className="min-h-screen">
    {/* Navbar */}
    
    {/* Hero Section with Background Image */}
    <div className="relative pt-16"> {/* Added pt-16 for navbar spacing */}
      <div className="absolute inset-0">
        <img
          src="/api/placeholder/1920/1080"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70"></div> {/* Overlay for better text readability */}
      </div>

      {/* Content */}
      <div className="relative">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-white">
              <span className="text-amber-500">Get all Your Doubts</span>
              <br />
              <span className="text-white">Done using AI</span>
            </h1>
            <p className="text-gray-200 text-base lg:text-lg leading-relaxed">
              We are a dedicated team committed to empowering learners worldwide with cutting-edge resources in design, technology, and development. Our mission is to provide high-quality, accessible, and innovative learning experiences that equip individuals with the skills they need to excel in today's fast-evolving digital world.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Secondary Section */}
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Learn smarter, not harder - your personal AI tutor is here!
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto">
          With our AI chatbot, you'll get personalized guidance that simplifies complex topics and helps you focus on what matters most in your studies.
        </p>
      </div>
    </div>
  </div>
  );
};

export default AiHeader;