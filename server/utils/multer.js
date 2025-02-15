import multer from "multer";

const storage = multer.diskStorage({});
const upload = multer({ storage });

// Middleware for multiple file uploads
const uploadFiles = upload.fields([
    { name: "courseThumbnail", maxCount: 1 },
    { name: "videoUrl", maxCount: 1 }
]);

export { uploadFiles };
