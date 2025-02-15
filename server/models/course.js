import mongoose from "mongoose";

/*const moduleSchema = new mongoose.Schema({
  moduleTitle: { type: String, }, // Module Title
  lecture: {
    
    publicId: { type: String },
  },
  quiz: {
    questions: [
      {
        questionText: { type: String,  },
        options: [{ type: String, }],
        correctAnswerIndex: { type: Number, },
      },
    ],
  },
});*/

const courseSchema = new mongoose.Schema(
  {
    courseTitle: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    courseThumbnail: {
      type: String,
      default: "https://img.freepik.com/free-vector/e-learning-icons-flat_1284-3950.jpg",
    },
    videoUrl: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    //modules: [moduleSchema], // Array of modules
    difficulty: { type: String, enum: ["beginner", "intermediate", "advanced"], required: true },
    studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    isPublished: { type: Boolean, default: false },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);
