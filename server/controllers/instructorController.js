import { Course } from "../models/course.js";
import { uploadMedia } from "../utils/cloudinary.js";

export const createCourse = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const { courseTitle, description, category, difficulty, price, modules } = req.body;

    if (!courseTitle || !description || !difficulty || price == null || !modules) {
      return res.status(400).json({ message: "All required fields must be provided." });
    }

    let courseThumbnail = "default-thumbnail-url.jpg";
    if (req.files && req.files.courseThumbnail) {
      const uploadResult = await uploadMedia(req.files.courseThumbnail[0].path);
      courseThumbnail = uploadResult.secure_url;
    }

    const parsedModules = JSON.parse(modules); // ✅ Convert stringified JSON to an array

    if (!Array.isArray(parsedModules)) {
      return res.status(400).json({ message: "Invalid modules format." });
    }

    // ✅ Assign uploaded videos to respective modules
    if (req.files && req.files.lectureVideos) {
      req.files.lectureVideos.forEach((file, index) => {
        if (parsedModules[index]) {
          parsedModules[index].lecture.videoUrl = `/uploads/${file.filename}`;
        }
      });
    }

    const course = await Course.create({
      courseTitle,
      description,
      category,
      difficulty,
      price,
      createdBy: req.user.id,
      courseThumbnail,
      modules: parsedModules
    });

    res.status(201).json({ course, message: "Course created successfully." });

  } catch (error) {
    res.status(500).json({ message: "Failed to create course", error: error.message });
  }
};
