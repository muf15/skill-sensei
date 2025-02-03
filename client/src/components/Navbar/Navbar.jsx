import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx"; // Import AuthContext
import Course from "../CoursePage/Course";


const Navbar = () => {
  const { isLoggedIn, userId, logout, checkAuthStatus } = useContext(AuthContext);
  const navigate = useNavigate();

  // Check authentication status on component mount
  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  // Handle user logout
  const handleLogout = async () => {
    try {
      await logout(); // Use the logout function from AuthContext
      navigate("/"); // Redirect after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-screen bg-white shadow-md flex justify-between items-center py-4 px-6 md:px-16 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="bg-orange-500 text-white text-3xl p-2 rounded-full">⚡</div>

        <span className="text-orange-500 font-bold text-xl md:text-2xl">
          SkillEdge
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
        <li><Link to="/" className="cursor-pointer hover:text-orange-500">Home</Link></li>
        <li><Link to="/courses" className="cursor-pointer hover:text-orange-500">Courses</Link></li>
        <li><Link to="/who-we-are" className="cursor-pointer hover:text-orange-500">About Us</Link></li>
        <li><Link to="/contact" className="cursor-pointer hover:text-orange-500">Contact</Link></li>
      </ul>

      {/* Authentication/Profile Section */}
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-600 font-medium">Welcome, User #{userId}</span>
            <button
              onClick={handleLogout}
              className="text-gray-600 font-medium px-4 py-2 rounded-md hover:text-orange-500 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/signup" className="text-gray-600 font-medium px-4 py-2 rounded-md hover:text-orange-500 hover:bg-gray-100">
              Sign Up
            </Link>
            <button
              onClick={() => navigate("/login")}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
