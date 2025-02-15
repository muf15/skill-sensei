import React, { useState } from 'react';

const Publish = () => {
  const [courseData, setCourseData] = useState({
    courseTitle: '',
    // subcourseTitle: '',
    description: '',
    category: '',
    difficulty: '',
    price: '',
    courseThumbnail: null,
    isPublished: false,
    modules: []
  });

  const [modules, setModules] = useState([
    {
      name: '',
      lectures: [],
      quizzes: []
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleFileUpload = (e) => {
    setCourseData({ ...courseData, courseThumbnail: e.target.files[0] });
  };

  const handleModuleChange = (index, name) => {
    const updatedModules = [...modules];
    updatedModules[index].name = name;
    setModules(updatedModules);
  };

  const handleLectureUpload = (moduleIndex, files) => {
    const updatedModules = [...modules];
    updatedModules[moduleIndex].lectures = [...updatedModules[moduleIndex].lectures, ...files];
    setModules(updatedModules);
  };

  const handleQuizUpload = (moduleIndex, files) => {
    const updatedModules = [...modules];
    updatedModules[moduleIndex].quizzes = [...updatedModules[moduleIndex].quizzes, ...files];
    setModules(updatedModules);
  };

  const addModule = () => {
    setModules([...modules, { name: '', lectures: [], quizzes: [] }]);
  };

  const toggleIsPublished = () => {
    setCourseData({ ...courseData, isPublished: !courseData.isPublished });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('courseTitle', courseData.courseTitle);
    // formData.append('subcourseTitle', courseData.subcourseTitle);
    formData.append('description', courseData.description);
    formData.append('category', courseData.category);
    formData.append('difficulty', courseData.difficulty);
    formData.append('price', courseData.price);
    formData.append('courseThumbnail', courseData.courseThumbnail);
    formData.append('isPublished', courseData.isPublished);
    modules.forEach((module, moduleIndex) => {
      formData.append(`module_${moduleIndex + 1}_name`, module.name);
      module.lectures.forEach((lecture, lectureIndex) => {
        formData.append(`module_${moduleIndex + 1}_lecture_${lectureIndex + 1}`, lecture);
      });
      module.quizzes.forEach((quiz, quizIndex) => {
        formData.append(`module_${moduleIndex + 1}_quiz_${quizIndex + 1}`, quiz);
      });
    });

    const response = await fetch('/api/courses', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Course published successfully!');
    } else {
      alert('Failed to publish course.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b mt-24 from-orange-200 to-white p-8">
      <h1 className="text-3xl font-bold text-orange-600 mb-6">Publish Your Course</h1>
      <div className="shadow-xl rounded-2xl p-6 bg-white">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Course courseTitle"
            name="courseTitle"
            value={courseData.courseTitle}
            onChange={handleInputChange}
            className="w-full border border-orange-500 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          {/* <input
            type="text"
            placeholder="Course SubcourseTitle"
            name="subcourseTitle"
            value={courseData.subcourseTitle}
            onChange={handleInputChange}
            className="w-full border border-orange-500 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          /> */}

          <textarea
            placeholder="Course Description"
            name="description"
            value={courseData.description}
            onChange={handleInputChange}
            className="w-full border border-orange-500 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <select
            onChange={(e) => setCourseData({ ...courseData, category: e.target.value })}
            className="w-full border border-orange-500 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select a Category</option>
            <option value="Web Development">Web Development</option>
            <option value="Design">Design</option>
            <option value="Data Science">Data Science</option>
          </select>

          <select
            onChange={(e) => setCourseData({ ...courseData, difficulty: e.target.value })}
            className="w-full border border-orange-500 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select a difficulty</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <input
            type="text"
            placeholder="Price (INR)"
            name="price"
            value={courseData.price}
            onChange={handleInputChange}
            className="w-full border border-orange-500 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5V5a2.5 2.5 0 012.5-2.5h13A2.5 2.5 0 0121 5v11.5m-9 0v4M8 20h8"></path>
              </svg>
              <span>Upload Thumbnail</span>
              <input type="file" onChange={handleFileUpload} className="hidden" />
            </label>
            {courseData.courseThumbnail && <span>{courseData.courseThumbnail.name}</span>}
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              id="isPublished"
              checked={courseData.isPublished}
              onChange={toggleIsPublished}
              className="w-4 h-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
            />
            <label htmlFor="isPublished" className="text-sm font-medium text-gray-700">
              Publish Course
            </label>
          </div>

          {modules.map((module, index) => (
            <div key={index} className="border border-orange-300 p-4 rounded-lg mb-4 bg-orange-50">
              <input
                type="text"
                placeholder={`Module ${index + 1} Name`}
                value={module.name}
                onChange={(e) => handleModuleChange(index, e.target.value)}
                className="w-full border border-orange-500 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
              />

              <label className="block text-orange-600 font-bold mb-2">Upload Lectures</label>
              <input
                type="file"
                multiple
                onChange={(e) => handleLectureUpload(index, Array.from(e.target.files))}
                className="block border border-orange-500 p-2 rounded-lg w-full"
              />

              {module.lectures.length > 0 && (
                <ul className="mt-2">
                  {module.lectures.map((lecture, lectureIndex) => (
                    <li key={lectureIndex} className="text-sm text-gray-700">{lecture.name}</li>
                  ))}
                </ul>
              )}

              <label className="block text-orange-600 font-bold mb-2 mt-4">Upload Quizzes</label>
              <input
                type="file"
                multiple
                onChange={(e) => handleQuizUpload(index, Array.from(e.target.files))}
                className="block border border-orange-500 p-2 rounded-lg w-full"
              />

              {module.quizzes.length > 0 && (
                <ul className="mt-2">
                  {module.quizzes.map((quiz, quizIndex) => (
                    <li key={quizIndex} className="text-sm text-gray-700">{quiz.name}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <button
            onClick={addModule}
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Add Module
          </button>

          <button
            onClick={handleSubmit}
            className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 mt-4"
          >
            Publish Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publish;