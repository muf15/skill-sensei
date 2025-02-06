import React from "react";

const WhoWeAre = () => {
  return (
    <div className="relative w-full h-screen bg-gray-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2020/03/17/17/48/engineer-4941351_1280.jpg')`, // Replace with your image URL
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16 lg:px-32">
        <div className="max-w-lg text-white">
          <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
            Who We Are
          </h1>
          <p className="text-sm md:text-base leading-relaxed">
            We are a dedicated team committed to empowering learners worldwide
            with cutting-edge resources in design, technology, and development.
            Our mission is to provide high-quality, accessible, and innovative
            learning experiences that equip individuals with the skills they
            need to excel in today’s fast-evolving digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
