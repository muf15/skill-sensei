import { Course } from "../models/course.js"; // Assuming you have a Course model

// Fetch all courses
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server error!", error });
  }
};

// Fetch a specific course by ID
export const getCourseById = async (req, res) => {
  const { courseId: _id } = req.params;

  try {
    const course = await Course.findById(_id);
    if (!course) return res.status(404).json({ message: "Course not found!" });

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: "Server error!", error });
  }
};

// Fetch a specific lecture inside a course
export const getLectureById = async (req, res) => {
  const { courseId: _id, lectureId } = req.params;

  try {
    const course = await Course.findById(_id);
    if (!course) return res.status(404).json({ message: "Course not found!" });

    const lecture = course.lectures.find((lec) => lec._id.toString() === lectureId);
    if (!lecture) return res.status(404).json({ message: "Lecture not found!" });

    res.status(200).json(lecture);
  } catch (error) {
    res.status(500).json({ message: "Server error!", error });
  }
};

// Fetch quiz for a specific lecture
export const getLectureQuiz = async (req, res) => {
  const { courseId: _id, lectureId, quizId } = req.params;

  try {
    const course = await Course.findById(_id);
    if (!course) return res.status(404).json({ message: "Course not found!" });

    const lecture = course.lectures.find((lec) => lec._id.toString() === lectureId);
    if (!lecture) return res.status(404).json({ message: "Lecture not found!" });

    const quiz = lecture.quizzes.find((q) => q._id.toString() === quizId);
    if (!quiz) return res.status(404).json({ message: "Quiz not found!" });

    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Server error!", error });
  }
};

// Fetch module quiz
export const getModuleQuiz = async (req, res) => {
  const { courseId: _id } = req.params;

  try {
    const course = await Course.findById(_id);
    if (!course) return res.status(404).json({ message: "Course not found!" });

    res.status(200).json(course.moduleQuiz);
  } catch (error) {
    res.status(500).json({ message: "Server error!", error });
  }
};
