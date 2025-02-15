import { Course } from "../models/course.js";
import { uploadMedia, deleteVideoFromCloudinary } from "../utils/cloudinary.js";

// Create Course (Without Modules Initially)
export const createCourse = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized access" });
    }
    
    const { courseTitle, description, category, difficulty, price } = req.body;
    if (!courseTitle || !description || !difficulty || price == null) {
      return res.status(400).json({ message: "All required fields must be provided." });
    }
    if (!["beginner", "intermediate", "advanced"].includes(difficulty)) {
      return res.status(400).json({ message: "Invalid difficulty level." });
    }
    
    let courseThumbnail = "default-thumbnail-url.jpg";
    if (req.file) {
      const uploadResult = await uploadMedia(req.file.path);
      courseThumbnail = uploadResult.secure_url;
    }

    const course = await Course.create({
      courseTitle,
      description,
      category,
      difficulty,
      price,
      createdBy: req.user.id,
      courseThumbnail,
      modules: [],
    });
    
    return res.status(201).json({ course, message: "Course created successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Failed to create course", error: error.message });
  }
};

// Add Module to Course
export const addModule = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { moduleTitle } = req.body;
    if (!moduleTitle) {
      return res.status(400).json({ message: "Module title is required." });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found." });
    }
    if (course.createdBy.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized to modify this course." });
    }

    course.modules.push({ moduleTitle, lecture: {}, quiz: { questions: [] } });
    await course.save();
    
    return res.status(201).json({ course, message: "Module added successfully." });
  } catch (error) {
    return res.status(500).json({ message: "Failed to add module", error: error.message });
  }
};

// Upload Lecture Video
export const uploadLecture = async (req, res) => {
  try {
    const { courseId, moduleId } = req.params;
    if (!req.file) {
      return res.status(400).json({ message: "Please upload a lecture video." });
    }

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found." });
    
    const module = course.modules.id(moduleId);
    if (!module) return res.status(404).json({ message: "Module not found." });

    if (module.lecture.videoUrl) {
      await deleteVideoFromCloudinary(module.lecture.publicId);
    }

    const uploadResult = await uploadMedia(req.file.path);
    module.lecture = {
      videoUrl: uploadResult.secure_url,
      publicId: uploadResult.public_id,
    };

    await course.save();
    return res.status(200).json({ message: "Lecture uploaded successfully.", module });
  } catch (error) {
    return res.status(500).json({ message: "Failed to upload lecture", error: error.message });
  }
};

// Redirect to Quiz Design (Front-end should handle the redirection)
export const redirectToQuizDesign = (req, res) => {
  try {
    const { courseId, moduleId } = req.params;
    return res.status(200).json({ redirectUrl: `/quiz-design/${courseId}/${moduleId}` });
  } catch (error) {
    return res.status(500).json({ message: "Failed to redirect", error: error.message });
  }
};
