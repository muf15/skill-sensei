import express from "express";
import { createCourse, addModule, uploadLecture } from "../controllers/instructorController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import multer from "multer";
import {uploadFiles} from "../utils/multer.js";
const router = express.Router();

router.route("/").post(authMiddleware, uploadFiles, createCourse);
//router.route("/").post(authMiddleware, uploadVideoUrl, createCourse);




//const upload = multer({ dest: "uploads/" }); // Temporary storage, configure Cloudinary in controller

// Instructor creates a new course
//router.post("/course/create", authMiddleware, upload.single("thumbnail"), createCourse);

// Instructor adds a module to a course
/*router.post("/course/:courseId/module", authMiddleware, addModule);

// Instructor uploads a lecture to a module
router.post("/course/:courseId/module/:moduleId/lecture", authMiddleware, upload.single("lectureFile"), uploadLecture);

// Redirect to quiz design page
router.get("/course/:courseId/module/:moduleId/quiz-design", (req, res) => {
    res.redirect(`/quiz-design?courseId=${req.params.courseId}&moduleId=${req.params.moduleId}`);
});*/



export default router;
