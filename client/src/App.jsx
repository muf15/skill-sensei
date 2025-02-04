import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginScreen from "./components/LoginSCreens/Login";
import RegisterScreen from "./components/LoginSCreens/RegisterScreen";
import HeroSection from "./components/HomePage/HeroSection";
import VideoWithPlayButton from "./components/HomePage/VideoWithPlayButton";
import BenefitsSection from "./components/HomePage/BenefitsSection";
import CourseSection from "./components/HomePage/CourseSection";
import Testimonials from "./components/HomePage/Testimonials";
import FAQ from "./components/HomePage/FAQ";
import Video from "./components/SCreen3/Video";
import ChillGuy from "./components/SCreen3/ChillGuy";
import PracticeQuiz from "./components/QuizSCreen/PracticeQuiz";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import Achievements from "./components/WhoWeAre/Acievements";
import Goals from "./components/WhoWeAre/Goals";
import AiHeader from "./components/Ai/AIHeader";
import ContactUs from "./components/Contact/Contactus";
import Course from "./components/CoursePage/Course";
import Header from "./components/JobPage/Header";

import JobApplyPage from "./components/JobPage/JobApplyPage";
import RecommendedJobs from "./components/JobPage/RecommendedJobs";

const App = () => {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />

      {/* Define Routes */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div>
              <HeroSection />
              <VideoWithPlayButton />
              <BenefitsSection />
              <CourseSection />
              <Testimonials />
              <FAQ />
            </div>
          }
        />

        {/* Course section */}
         <Route
            path="/Courses"
            element={
              <div>
                <Course /> 
              </div>
            }
          />

        {/* Login/Register Page */}
        <Route
          path="/login"
          element={
            <div>
              <LoginScreen />
           
             
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div>
      <RegisterScreen />
           
             
            </div>
          }
        />

        {/* Who We Are Page */}
        <Route
          path="/who-we-are"
          element={
            <div>
              <WhoWeAre />
              <Achievements />
              <Goals />
            </div>
          }
        />

        {/* Screen 3 Page */}
        <Route
          path="/screen3"
          element={
            <div>
              <Video />
              <ChillGuy />
            </div>
          }
        />

        {/* Quiz Page */}
        <Route
          path="/quiz"
          element={
            <div>
              <PracticeQuiz />
            </div>
          }
        />

        {/* New Page 1 */}
        
        
       
        
        <Route
          path="/contact"
          element={
            <div>
              <ContactUs/>
            </div>
          }
        />
        <Route
          path="/job"
          element={
            <div>
              <Header/>
              
              <JobApplyPage/>
              <RecommendedJobs/>
            </div>
          }
        />
        <Route
          path="/ai"
          element={
            <div>
              <AiHeader/>
            </div>
          }
        />

        {/* New Page 2 */}
        <Route
          path="/new-page-2"
          element={
            <div>
              <h1>New Page 2</h1>
              <p>This is the content of the second new page.</p>
            </div>
          }
        />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
};

export default App;
