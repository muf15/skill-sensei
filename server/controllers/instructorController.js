import { Course } from "../models/course.js";  // ✅ Import Course Model
import { uploadMedia } from "../utils/cloudinary.js";  // ✅ Function to upload files to Cloudinary
import { uploadFiles } from "../utils/multer.js";  // ✅ Multer middleware to handle file uploads

export const createCourse = async (req, res) => {
  try {
    console.log("Incoming Request: ", req.body); // ✅ Log request body
    console.log("Uploaded Files: ", req.files);  // ✅ Log uploaded files

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
    // ✅ Log incoming request for debugging
console.log("Incoming Modules:", modules);




    // Parse modules correctly
    let parsedModules;
    try {
      parsedModules = JSON.parse(modules);
      console.log("Parsed Modules after JSON Parse:", parsedModules); // ✅ Debugging Log
      if (!Array.isArray(parsedModules)) throw new Error("Modules must be an array");
    } catch (error) {
      console.error("Error parsing modules: ", error);
      return res.status(400).json({ message: "Invalid modules format" });
    }

    // ✅ Ensure uploaded videos are correctly mapped
    if (req.files && req.files.lectureVideos) {
      req.files.lectureVideos.forEach((file, index) => {
        if (parsedModules[index]) {
          parsedModules[index].lecture = {
            videoUrl: `/uploads/${file.filename}`,
            publicId: file.filename, // ✅ Save Public ID
          };
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
    console.error("Internal Server Error: ", error);
    res.status(500).json({ message: "Failed to create course", error: error.message });
  }
};
