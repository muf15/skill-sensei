import React from "react";

// Testimonial Card Component
const TestimonialCard = ({ image, name, text }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between space-y-4">
      <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={image}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-gray-900 font-semibold">{name}</span>
        </div>
        <button className="bg-gray-100 text-gray-800 text-sm px-4 py-2 rounded-md hover:bg-gray-200 transition">
          Read Full Story
        </button>
      </div>
    </div>
  );
};

// Main Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah L",
      text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      image: "https://via.placeholder.com/150/FF0080",
    },
    {
      name: "Jason M",
      text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      image: "https://via.placeholder.com/150/800080",
    },
    {
      name: "Sarah L",
      text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      image: "https://via.placeholder.com/150/FF0080",
    },
    {
      name: "Jason M",
      text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      image: "https://via.placeholder.com/150/800080",
    },
    {
      name: "Sarah L",
      text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
      image: "https://via.placeholder.com/150/FF0080",
    },
    {
      name: "Jason M",
      text: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
      image: "https://via.placeholder.com/150/800080",
    },
  ];

  return (
    <div className="bg-gray-50 px-4 py-12 md:px-8 lg:px-16">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="container mx-auto px-4 py-8 md:py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-left">
        Our Courses
      </h2>
      <p className="text-gray-600 mb-8 text-left">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id
        imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit
        fringilla feugiat senectus in.
      </p>
        </div>
        <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-md shadow-sm hover:bg-gray-100 transition">
          View All
        </button>
      </div>

      {/* Testimonial Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            name={item.name}
            text={item.text}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
