import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

const Navbar = () => {
  const { isLoggedIn, userId, logout, checkAuthStatus } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 shadow-lg border-b border-gray-800 flex justify-between items-center py-4 px-6 md:px-16 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <div className="p-1 rounded-full bg-gradient-to-r from-orange-400 to-red-600 shadow-xl animate-pulse">
          <div className="bg-black text-white text-xl p-3 rounded-full flex items-center justify-center">
            ⚡
          </div>
        </div>
        <span className="text-orange-400 font-extrabold text-xl md:text-2xl tracking-wide drop-shadow-lg">
          Skill-Sensei
        </span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-lg text-gray-300">
        <li>
          <Link to="/" className="cursor-pointer hover:text-orange-400 transition-all duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/courses" className="cursor-pointer hover:text-orange-400 transition-all duration-300">
            Courses
          </Link>
        </li>
        <li>
          <Link to="/who-we-are" className="cursor-pointer hover:text-orange-400 transition-all duration-300">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" className="cursor-pointer hover:text-orange-400 transition-all duration-300">
            Contact
          </Link>
        </li>
      </ul>

      {/* Authentication/Profile Section */}
      <div className="flex items-center space-x-4">
        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <span className="text-gray-300 font-medium">
              Welcome, User #{userId}
            </span>
            <button
              onClick={handleLogout}
              className="text-gray-300 font-medium px-4 py-2 rounded-md hover:text-orange-400 hover:bg-gray-800 transition-all duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link
              to="/signup"
              className="text-gray-300 font-medium px-4 py-2 rounded-md hover:text-orange-400 hover:bg-gray-800 transition-all duration-300"
            >
              Sign Up
            </Link>
            <button
              onClick={() => navigate("/login")}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-all duration-300 shadow-md"
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
