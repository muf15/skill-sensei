import { Course } from "../models/course.js";
import { uploadMedia } from "../utils/cloudinary.js";

export const createCourse = async (req, res) => {
  try {
    console.log("Incoming Request: ", req.body);
    console.log("Uploaded Files: ", req.files);

    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const { courseTitle, description, category, difficulty, price, modules, cquiz } = req.body;

    if (!courseTitle || !description || !difficulty || price == null || !modules) {
      return res.status(400).json({ message: "All required fields must be provided." });
    }

    let courseThumbnail = "https://img.freepik.com/free-vector/e-learning-icons-flat_1284-3950.jpg";
    if (req.files?.courseThumbnail) {
      const uploadResult = await uploadMedia(req.files.courseThumbnail[0].path);
      courseThumbnail = uploadResult.secure_url;
    }

    let parsedModules = JSON.parse(modules);
    let parsedCquiz = cquiz ? JSON.parse(cquiz) : null;

    // ✅ Validate final course quiz (cquiz) format
    if (parsedCquiz && (!parsedCquiz.questions || !Array.isArray(parsedCquiz.questions))) {
      return res.status(400).json({ message: "Invalid cquiz format: 'questions' must be an array" });
    }

    // ✅ Save the course with the new schema
    const course = await Course.create({
      courseTitle,
      description,
      category,
      difficulty,
      price,
      createdBy: req.user.id,
      courseThumbnail,
      modules: parsedModules,
      cquiz: parsedCquiz
    });

    res.status(201).json({ course, message: "Course created successfully." });

  } catch (error) {
    console.error("Internal Server Error: ", error);
    res.status(500).json({ message: "Failed to create course", error: error.message });
  }
};

// ✅ Update Course Details
export const updateCourse = async (req, res) => {
  try {
    const { courseId } = req.params;
    const { courseTitle, description, category, difficulty, price, modules, cquiz } = req.body;

    const course = await Course.findById(courseId);
    if (!course) return res.status(404).json({ message: "Course not found" });

    if (req.user.id !== course.createdBy.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    let courseThumbnail = course.courseThumbnail;
    if (req.files?.courseThumbnail) {
      const uploadResult = await uploadMedia(req.files.courseThumbnail[0].path);
      courseThumbnail = uploadResult.secure_url;
    }

    let parsedModules = modules ? JSON.parse(modules) : course.modules;
    let parsedCquiz = cquiz ? JSON.parse(cquiz) : course.cquiz;

    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      {
        courseTitle,
        description,
        category,
        difficulty,
        price,
        courseThumbnail,
        modules: parsedModules,
        cquiz: parsedCquiz
      },
      { new: true }
    );

    res.json({ updatedCourse, message: "Course updated successfully" });

  } catch (error) {
    console.error("Error updating course:", error);
    res.status(500).json({ message: "Failed to update course", error: error.message });
  }
};

// ✅ Get Courses Created by Instructor
export const getInstructorCourses = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const courses = await Course.find({ createdBy: req.user.id });
    res.json({ courses });

  } catch (error) {
    console.error("Error fetching instructor courses:", error);
    res.status(500).json({ message: "Failed to fetch courses" });
  }
};
