import express from "express";
import {
  getAllCourses,
  getCourseById,
  getLectureById,
  getLectureQuiz,
  getModuleQuiz,
} from "../controllers/courseController.js";
// import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all courses
router.get("/", getAllCourses);

// Get a specific course by ID
router.get("/:courseId", getCourseById);

// Get a specific lecture inside a course
router.get("/:courseId/:lectureId", getLectureById);

// Get quiz for a specific lecture
router.get("/:courseId/:lectureId/:quizId", getLectureQuiz);

// Get module quiz
router.get("/:courseId/mquiz", getModuleQuiz);

export default router;
