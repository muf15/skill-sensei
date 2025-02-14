import React, { useState } from "react";
import { jsPDF } from "jspdf";
import axios from "axios";

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
    jobTitle: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const generateAIContent = async () => {
    setLoading(true);
    try {
      const apiKey = "AIzaSyAtV8nuqqKXDNbJ3yahxqGfzWxMBB-RmvU"; // Replace with your actual Gemini API key
  
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
        {
          contents: [
            {
              parts: [
                {
                  text: `Generate a professional resume summary and experience section for a ${resumeData.jobTitle} based on the following details: ${JSON.stringify(resumeData)}`
                }
              ]
            }
          ]
        }
      );
  
      const aiResponse = response.data;
      setResumeData((prevData) => ({
        ...prevData,
        summary: aiResponse.candidates?.[0]?.content?.parts?.[0]?.text || "",
        experience: aiResponse.candidates?.[0]?.content?.parts?.[0]?.text || "",
      }));
    } catch (error) {
      console.error("AI Generation Error:", error);
    } finally {
      setLoading(false);
    }
  };
  

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text(`Resume - ${resumeData.name}`, 10, 10);
    doc.setFontSize(12);
    doc.text(`Email: ${resumeData.email}`, 10, 20);
    doc.text(`Phone: ${resumeData.phone}`, 10, 30);
    doc.text(`Job Title: ${resumeData.jobTitle}`, 10, 40);
    doc.text(`Summary: ${resumeData.summary}`, 10, 50, { maxWidth: 180 });
    doc.text(`Experience: ${resumeData.experience}`, 10, 70, { maxWidth: 180 });
    doc.text(`Education: ${resumeData.education}`, 10, 90, { maxWidth: 180 });
    doc.text(`Skills: ${resumeData.skills}`, 10, 110, { maxWidth: 180 });
    doc.save("resume.pdf");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">AI-Powered Resume Builder</h2>
      <input className="w-full p-2 border rounded mb-2" name="name" placeholder="Full Name" onChange={handleChange} />
      <input className="w-full p-2 border rounded mb-2" name="email" placeholder="Email" onChange={handleChange} />
      <input className="w-full p-2 border rounded mb-2" name="phone" placeholder="Phone Number" onChange={handleChange} />
      <input className="w-full p-2 border rounded mb-2" name="jobTitle" placeholder="Job Title" onChange={handleChange} />
      <textarea className="w-full p-2 border rounded mb-2" name="summary" placeholder="Professional Summary" value={resumeData.summary} onChange={handleChange} />
      <textarea className="w-full p-2 border rounded mb-2" name="experience" placeholder="Work Experience" value={resumeData.experience} onChange={handleChange} />
      <textarea className="w-full p-2 border rounded mb-2" name="education" placeholder="Education" onChange={handleChange} />
      <textarea className="w-full p-2 border rounded mb-2" name="skills" placeholder="Key Skills" onChange={handleChange} />
      <button onClick={generateAIContent} className="mt-4 w-full bg-blue-500 text-white p-2 rounded" disabled={loading}>{loading ? "Generating..." : "Use AI to Improve Resume"}</button>
      <button onClick={generatePDF} className="mt-4 w-full bg-green-500 text-white p-2 rounded">Download PDF</button>
    </div>
  );
};

export default ResumeBuilder;