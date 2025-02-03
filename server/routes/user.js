import express from "express";
import { register, login, logout } from "../controllers/user.js";
import isAuthenticated from "../middleware/isAuthenticated.js"; // Import the existing middleware

const router = express.Router();

// Routes
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);

// Route to check auth
router.route("/auth/check").get(isAuthenticated, (req, res) => {
  res.status(200).json({    
    success: true,
    message: "User is authenticated",
    userId: req.id, // Use the user ID attached by the middleware
  });
});

export default router;