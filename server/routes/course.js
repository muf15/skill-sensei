import express from "express";
import {
  getAllCourses,
 
  getModuleQuiz,
} from "../controllers/courseController.js";
import { getModuleDetails } from "../controllers/courseController.js";
// import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all courses
router.get("/", getAllCourses);

router.get("/:courseId/:moduleId", getModuleDetails);

// Get module quiz
router.get("/:courseId/mquiz", getModuleQuiz);

export default router;
