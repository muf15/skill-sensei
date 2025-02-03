import React, { useState } from "react";

const courses = [
  {
    title: "MATLAB and VLSI Foundations",
    description:
      "This course offers a comprehensive introduction to the fundamentals of MATLAB and its application in the field of VLSI. It is designed for beginners who want to understand the basics of MATLAB programming and learn how to apply it effectively for solving VLSI design challenges, from basic circuit modeling to preliminary simulations.",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
    duration: "4 Weeks",
    level: "Beginner",
    instructor: "By John Smith",
    curriculum: [
      "Introduction to MATLAB",
      "Basic Circuit Modeling",
      "Simulation Techniques",
      "VLSI Design Basics",
      "Advanced MATLAB Tools",
    ],
  },
  {
    title: "VLSI Design Using MATLAB",
    description:
      "Explore the integration of MATLAB in designing VLSI circuits, from conceptualization to implementation. This course focuses on how MATLAB’s computational capabilities can streamline the design process, offering practical insights into circuit behavior, timing analysis, and logic design optimization.",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
    duration: "6 Weeks",
    level: "Intermediate",
    instructor: "By Emily Johnson",
    curriculum: [
      "Introduction to Circuit Timing",
      "Behavioral Modeling",
      "Optimization Techniques",
      "Design Validation",
      "MATLAB-Integrated Tools",
    ],
  },
  {
    title: "Responsive Web Design",
    description:
      "Learn how to create responsive websites that look stunning on any device. This course covers foundational web development concepts, including HTML, CSS, and responsive design principles, along with hands-on projects to test your skills.",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
    duration: "5 Weeks",
    level: "Beginner",
    instructor: "By Alice Brown",
    curriculum: [
      "Introduction to HTML",
      "Styling with CSS",
      "Responsive Grid Systems",
      "Media Queries",
      "Building a Portfolio Website",
    ],
  },
  {
    title: "UI/UX Design Fundamentals",
    description:
      "Master the art of crafting user-friendly interfaces with this beginner-friendly course. Dive into user research, prototyping, wireframing, and more to create intuitive and visually appealing digital experiences.",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
    duration: "7 Weeks",
    level: "Beginner",
    instructor: "By Michael Green",
    curriculum: [
      "User Research",
      "Wireframing Techniques",
      "Prototyping Tools",
      "Usability Testing",
      "UI Design Patterns",
    ],
  },
  {
    title: "Data Structures and Algorithms",
    description:
      "Build a solid foundation in data structures and algorithms with this comprehensive course. Understand core concepts like arrays, linked lists, trees, and sorting algorithms, essential for coding interviews and real-world applications.",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
    duration: "8 Weeks",
    level: "Advanced",
    instructor: "By Sarah Williams",
    curriculum: [
      "Introduction to Arrays",
      "Linked Lists and Trees",
      "Sorting Algorithms",
      "Graph Theory",
      "Dynamic Programming",
    ],
  },
  {
    title: "Introduction to Machine Learning",
    description:
      "Step into the world of AI with this beginner-friendly course on Machine Learning. Learn the basics of supervised and unsupervised learning, model evaluation, and hands-on projects using Python libraries like Scikit-Learn.",
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
    duration: "10 Weeks",
    level: "Intermediate",
    instructor: "By Daniel Carter",
    curriculum: [
      "Supervised Learning Basics",
      "Unsupervised Learning",
      "Model Evaluation Techniques",
      "Hands-on with Scikit-Learn",
      "Project: Predictive Analytics",
    ],
  },
];

const Course = () => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [currentCourseTitle, setCurrentCourseTitle] = useState("");

  const openPlayer = (courseTitle) => {
    setCurrentCourseTitle(courseTitle);
    setIsPlayerOpen(true);
  };

  const closePlayer = () => {
    setIsPlayerOpen(false);
    setCurrentCourseTitle("");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 mt-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Online Courses on Design and Development
          </h1>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Welcome to our online course page, where you can enhance your skills
            in design and development. Choose from our carefully curated
            selection of 10 courses designed to provide you with comprehensive
            knowledge and practical experience. Explore the courses below and
            find the perfect fit for your learning journey.
          </p>
        </div>

        {/* Courses */}
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden mb-12"
          >
            {/* Course Details */}
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {course.title}
                </h2>
                <button
                  className="text-blue-600 font-semibold hover:underline"
                  onClick={() => openPlayer(course.title)}
                >
                  View Course
                </button>
              </div>
              <p className="text-gray-600 mt-4">{course.description}</p>
            </div>

            {/* Course Images */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-6 pb-6">
              {course.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`Course Image ${imgIndex + 1}`}
                  className="w-full rounded-lg"
                />
              ))}
            </div>

            {/* Course Metadata */}
            <div className="flex justify-between items-center px-6 py-4 border-t text-gray-600">
              <span>{course.duration}</span>
              <span>{course.level}</span>
              <span>{course.instructor}</span>
            </div>

            {/* Curriculum */}
            <div className="p-6 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Curriculum
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {course.curriculum.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white text-center shadow-md rounded-lg p-4"
                  >
                    <h4 className="text-lg font-bold text-blue-600">
                      0{index + 1}
                    </h4>
                    <p className="text-gray-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mini Player */}
      {isPlayerOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-2/3 lg:w-1/3">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Now Viewing: {currentCourseTitle}
            </h2>
            <p className="text-gray-600 mb-4">
              This is a mini player pop-out for the course. More details or
              videos can be added here.
            </p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={closePlayer}
            >
              Close Player
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Course;
