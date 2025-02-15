import multer from "multer";

const storage = multer.diskStorage({});
const upload = multer({ storage });

export const uploadCourseThumbnail = (req, res, next) => {
    upload.single("courseThumbnail")(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: "File upload failed", error: err.message });
        }
        next();
    });
};

