import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../axios.config.js";

const Publish = () => {
  const navigate = useNavigate();
  
  const [courseData, setCourseData] = useState({
    courseTitle: "",
    description: "",
    category: "",
    difficulty: "",
    price: "",
    courseThumbnail: null,
    isPublished: false,
  });

  const [modules, setModules] = useState([
    {
      moduleTitle: "",
      videoUrl: null,
      quiz: [
        { questionText: "", options: ["", "", "", ""], correctAnswerIndex: 0 },
      ],
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleFileUpload = (e) => {
    setCourseData({ ...courseData, courseThumbnail: e.target.files[0] });
  };

  const handleModuleChange = (index, name, value) => {
    const updatedModules = [...modules];
    updatedModules[index][name] = value;
    setModules(updatedModules);
  };

  const handleLectureUpload = (index, file) => {
    const updatedModules = [...modules];
    updatedModules[index].videoUrl = file;
    setModules(updatedModules);
  };

  const handleQuizChange = (moduleIndex, questionIndex, field, value) => {
    const updatedModules = [...modules];
  
    if (field.startsWith("options[")) {
      const optionIndex = parseInt(field.match(/\d+/)[0]); // Extract option index from field
      updatedModules[moduleIndex].quiz[questionIndex].options[optionIndex] = value;
    } else {
      updatedModules[moduleIndex].quiz[questionIndex][field] = value;
    }
  
    setModules(updatedModules);
  };
  

  const addModule = () => {
    setModules([
      ...modules,
      {
        moduleTitle: "",
        videoUrl: null,
        quiz: [
          { questionText: "", options: ["", "", "", ""], correctAnswerIndex: 0 },
        ],
      },
    ]);
  };

  const addQuizQuestion = (moduleIndex) => {
    const updatedModules = [...modules];
    updatedModules[moduleIndex].quiz.push({
      questionText: "",
      options: ["", "", "", ""],
      correctAnswerIndex: 0,
    });
    setModules(updatedModules);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
  
    formData.append("courseTitle", courseData.courseTitle);
    formData.append("description", courseData.description);
    formData.append("category", courseData.category);
    formData.append("difficulty", courseData.difficulty);
    formData.append("price", courseData.price);
  
    if (courseData.courseThumbnail) {
      formData.append("courseThumbnail", courseData.courseThumbnail);
    }
  
    // ✅ Send modules as a JSON string
    const formattedModules = modules.map(module => ({
      moduleTitle: module.moduleTitle,
      lecture: module.lecture ? {
        title: module.moduleTitle,
      } : null,
      quiz: {
        questions: module.quiz.map(question => ({
          questionText: question.questionText,
          options: question.options,
          correctAnswerIndex: parseInt(question.correctAnswerIndex)
        }))
      }
    }));
  
    formData.append("modules", JSON.stringify(formattedModules));
  
    // ✅ Add Lecture Files
    modules.forEach((module, index) => {
      if (module.videoUrl) {
        formData.append(`videoUrl`, module.videoUrl);
      }
    });
  
    try {
      const response = await api.post("/instructor", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      if (response.status === 201) {
        alert("Course created successfully!");
      }
    } catch (error) {
      console.error("Error publishing course:", error);
      alert(error.response?.data?.message || "Failed to publish course");
    }
  };
  
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-4">Publish Your Course</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
        <input type="text" placeholder="Course Title" name="courseTitle" value={courseData.courseTitle} onChange={handleInputChange} className="w-full border p-2 rounded mb-4" required />
        <textarea placeholder="Course Description" name="description" value={courseData.description} onChange={handleInputChange} className="w-full border p-2 rounded mb-4" required />
        <input type="text" placeholder="Category" name="category" value={courseData.category} onChange={handleInputChange} className="w-full border p-2 rounded mb-4" required />
        <select name="difficulty" onChange={handleInputChange} className="w-full border p-2 rounded mb-4" required>
          <option value="">Select Difficulty</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <input type="text" placeholder="Price" name="price" value={courseData.price} onChange={handleInputChange} className="w-full border p-2 rounded mb-4" required />
        <input type="file" onChange={handleFileUpload} className="w-full border p-2 rounded mb-4" required />

        {modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="border p-4 rounded mb-4 bg-gray-100">
            <input type="text" placeholder="Module Title" value={module.moduleTitle} onChange={(e) => handleModuleChange(moduleIndex, "moduleTitle", e.target.value)} className="w-full border p-2 rounded mb-4" />
            <input type="file" onChange={(e) => handleLectureUpload(moduleIndex, e.target.files[0])} className="w-full border p-2 rounded mb-4" />

            <h3 className="text-lg font-bold">Quiz</h3>
            {module.quiz.map((question, qIndex) => (
              <div key={qIndex} className="mb-4">
                <input type="text" placeholder="Question" value={question.questionText} onChange={(e) => handleQuizChange(moduleIndex, qIndex, "questionText", e.target.value)} className="w-full border p-2 rounded mb-2" />
                {question.options.map((option, oIndex) => (
  <input
    key={oIndex}
    type="text"
    placeholder={`Option ${oIndex + 1}`}
    value={option} 
    onChange={(e) => handleQuizChange(moduleIndex, qIndex, `options[${oIndex}]`, e.target.value)}
    className="w-full border p-2 rounded mb-2"
  />
))}
                <select onChange={(e) => handleQuizChange(moduleIndex, qIndex, "correctAnswerIndex", e.target.value)} className="w-full border p-2 rounded mb-2">
                  {question.options.map((_, idx) => (
                    <option key={idx} value={idx}>{`Option ${idx + 1}`}</option>
                  ))}
                </select>
              </div>
            ))}
            <button type="button" onClick={() => addQuizQuestion(moduleIndex)} className="bg-blue-500 text-white p-2 rounded">Add Quiz Question</button>
          </div>
        ))}

        <button type="button" onClick={addModule} className="bg-green-500 text-white p-2 rounded">Add Module</button>
        <button type="submit" className="bg-orange-500 text-white p-2 rounded ml-4">Publish Course</button>
      </form>
    </div>
  );
};

export default Publish;
