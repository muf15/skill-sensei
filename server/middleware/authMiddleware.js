import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    // ✅ Extract token automatically from cookies
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token found!" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // Attach user details to request

    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
