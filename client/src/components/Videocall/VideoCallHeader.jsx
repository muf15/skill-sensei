import React from 'react';

const VideoCallHeader = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://source.unsplash.com/1600x900/?library,books')`,
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Text content */}
      <div className="relative flex h-full items-center justify-center px-4 text-center">
        <p className="text-lg md:text-2xl lg:text-3xl max-w-4xl leading-relaxed">
          "We are a dedicated team committed to empowering learners worldwide with
          cutting-edge resources in design, technology, and development. Our
          mission is to provide high-quality, accessible, and innovative
          learning experiences that equip individuals with the skills they need
          to excel in today’s fast-evolving digital world."
        </p>
      </div>
    </div>
  );
};

export default VideoCallHeader;
