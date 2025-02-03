import React from "react";


const CourseSection = () => {
  const courses = [
    {
      id: 1,
      title: "MATLAB and VLSI Foundations",
      description:
        "Learn the fundamentals of MATLAB programming and VLSI design principles, including digital circuit design and simulation.",
      imgSrc:
        "https://images.unsplash.com/photo-1578853302081-0cf1c7e32a94?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fG1hdGxhYiUyMGV4cGVyaWVuY2V8ZW58MHx8fHwxNjk0NjMwMzc&ixlib=rb-1.2.1&q=80&w=1080",
      buttonText: "Get it Now",
    },
    {
      id: 2,
      title: "Advanced VLSI Design with MATLAB",
      description:
        "Explore advanced topics in VLSI design using MATLAB. Focus on optimization, signal processing, and hardware design.",
      imgSrc:
        "https://images.unsplash.com/photo-1521747116042-e0b4e1c4d6cc?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGNpcnYlMjBkZXNpZ258ZW58MHx8fHwxNjk0NjMwNDE&ixlib=rb-1.2.1&q=80&w=1080",
      buttonText: "Get it Now",
    },
    {
      id: 3,
      title: "MATLAB for Signal Processing",
      description:
        "Learn how to use MATLAB for signal processing tasks, including Fourier transforms, filtering, and spectral analysis in VLSI applications.",
      imgSrc:
        "https://images.unsplash.com/photo-1501698231274-c6da8e0c12eb?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGZpcmV8ZW58MHx8fHwxNjk0NjMwNzA&ixlib=rb-1.2.1&q=80&w=1080",
      buttonText: "Get it Now",
    },
    {
      id: 4,
      title: "Digital Circuit Design Using MATLAB",
      description:
        "Design and simulate digital circuits using MATLAB. Learn to create digital systems, such as multiplexers, flip-flops, and counters.",
      imgSrc:
        "https://images.unsplash.com/photo-1598884829892-0be2d7b14392?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDh8fGZpcnN0fGVufDB8fHx8fDE2OTQ2MzEwMTQ&ixlib=rb-1.2.1&q=80&w=1080",
      buttonText: "Get it Now",
    },
    {
      id: 5,
      title: "VLSI Design Automation with MATLAB",
      description:
        "Understand VLSI design automation techniques using MATLAB, including layout design, circuit simulation, and optimization algorithms.",
      imgSrc:
        "https://images.unsplash.com/photo-1595926747586-f272b9e2737c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGV4cGVyaWVuY2V8ZW58MHx8fHwxNjk0NjMwNzY&ixlib=rb-1.2.1&q=80&w=1080",
      buttonText: "Get it Now",
    },
    {
      id: 6,
      title: "MATLAB for VLSI Testing and Verification",
      description:
        "Master the art of testing and verifying VLSI designs with MATLAB. Learn how to apply various testing techniques for digital circuits.",
      imgSrc:
        "https://images.unsplash.com/photo-1604672424379-ecf13a244282?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHZsc2l8ZW58MHx8fHwxNjk0NjMwNzg&ixlib=rb-1.2.1&q=80&w=1080",
      buttonText: "Get it Now",
    },
    {
      id: 7,
      title: "Analog VLSI Design with MATLAB",
      description:
        "Learn the principles of analog VLSI design, including operational amplifiers and voltage-controlled oscillators, using MATLAB.",
      imgSrc:
        "https://images.unsplash.com/photo-1556922763-634df0efc81a?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDkwfHxhbmFsb2dfdmxzZHNlfGVufDB8fHx8fDE2OTQ2MzEwNzI&ixlib=rb-1.2.1&q=80&w=1080",
      buttonText: "Get it Now",
    },
    {
      id: 8,
      title: "FPGA and VLSI with MATLAB",
      description:
        "Learn how to design and implement VLSI circuits using FPGA platforms in conjunction with MATLAB for simulation and verification.",
      imgSrc:
        "https://images.unsplash.com/photo-1531843125955-fb99822cda2d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDg4fHxhbmFsb2dfcGNpZ3xlbnwwfHx8fDE2OTQ2MzEyNzQ&ixlib=rb-1.2.1&q=80&w=1080",
      buttonText: "Get it Now",
    },
    {
      id: 9,
      title: "VLSI Power Consumption Optimization Using MATLAB",
      description:
        "Explore techniques for optimizing power consumption in VLSI designs with MATLAB, focusing on energy-efficient digital circuits.",
      imgSrc:
        "https://images.unsplash.com/photo-1618301178787-d4de8a21e1a5?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fFZMSUklMjBwaW93ZXJ8ZW58MHx8fHwxNjk0NjMwNzk&ixlib=rb-1.2.1&q=80&w=1080",
      buttonText: "Get it Now",
    },
    {
      id: 10,
      title: "MATLAB-Based VLSI Circuit Simulation",
      description:
        "Gain hands-on experience in simulating VLSI circuits with MATLAB, learning techniques for functional simulation and performance analysis.",
      imgSrc:
        "https://images.unsplash.com/photo-1503952857074-4c8406e2b36c?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDczfHxmY2lrdWlzcml8ZW58MHx8fHwxNjk0NjMwODg&ixlib=rb-1.2.1&q=80&w=1080",
      buttonText: "Get it Now",
    },
  ];

  return (
    <>
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-left">
        Our Courses
      </h2>
      <p className="text-gray-600 mb-8 text-left">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
        habitasse in velit fringilla feugiat senectus in.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={course.imgSrc}
              alt={course.title}
              className="w-full h-60 object-cover" // Image height
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-800 text-left">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-4 text-left">
                {course.description}
              </p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 text-left">
                {course.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-8">
        <a href="#" className="text-orange-500 hover:text-orange-600">
          View All
        </a>
      </div>
    </div>
    
    </>
  );
};

export default CourseSection;
