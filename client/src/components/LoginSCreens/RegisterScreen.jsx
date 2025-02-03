import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import axios from "axios";
import "../../App.css"; // Custom CSS for font import

const RegisterScreen = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    try {
      const response = await axios.post(
        "http://localhost:3015/api/v1/user/register", // Replace with your API URL
        { name, email, password }
      );

      console.log("Registration successful:", response.data);
      setSuccess(response.data.message); // Show success message
      setError(""); // Clear any previous errors
      setName("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error during registration:", error.response?.data || error.message);
      setError(
        error.response?.data?.message || "An unexpected error occurred. Please try again."
      );
      setSuccess(""); // Clear any success messages
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="w-full md:w-1/2">
          <img
            src="./src/assets/Images/ai-generated-8810198_1280.webp" // Image path untouched
            alt="Engineers working"
            className="object-cover w-full h-48 md:h-full"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-4 md:mb-6">
              Welcome to Skills Sensei..!
            </h2>
            {/* Login and Register Tabs */}
            <div className="flex justify-center mb-6 group">
              <button
                className="flex-1 bg-orange-500 text-white border border-orange-500 px-4 py-2 rounded-l-full group-hover:bg-white group-hover:text-orange-500 transition duration-300"
                onClick={() => navigate("/signup")} // Navigate to /signup
              >
                Register
              </button>
              <button
                className="flex-1 bg-white text-orange-500 border border-orange-500 px-4 py-2 rounded-r-full hover:bg-orange-500 hover:text-white transition duration-300"
                onClick={() => navigate("/login")} // Navigate to /login
              >
                Login
              </button>
            </div>
            {/* Display success or error messages */}
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            {success && <p className="text-green-500 text-center mb-4">{success}</p>}

            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2 text-sm">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your Name"
                  className="w-full px-4 py-2 border border-orange-400 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2 text-sm">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your Email Address"
                  className="w-full px-4 py-2 border border-orange-400 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  required
                />
              </div>
              <div className="mb-6 relative">
                <label htmlFor="password" className="block text-gray-700 mb-2 text-sm">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  className="w-full px-4 py-2 border border-orange-400 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 rounded-full hover:bg-orange-600 transition duration-300 text-sm"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
