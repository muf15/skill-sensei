import React, { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const API_KEY = "AIzaSyAtV8nuqqKXDNbJ3yahxqGfzWxMBB-RmvU";
const genAI = new GoogleGenerativeAI(API_KEY);

const InterviewComponent = () => {
  const [question, setQuestion] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [skill, setSkill] = useState("General");

  // Fetch a new interview question based on skill
  const getNewQuestion = async () => {
    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `Ask a tough mock interview question for software engineers focused on ${skill}.`;
      const response = await model.generateContent(prompt);
      const text = (await response.response.text()).replace(/\*/g, "");
      setQuestion(text);
    } catch (error) {
      console.error("Error fetching question:", error);
      setQuestion("Failed to fetch question. Try again.");
    }
    setLoading(false);
  };

  // Submit user's answer and get AI feedback
  const evaluateAnswer = async () => {
    if (!userAnswer) return;
    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `Evaluate this interview answer: "${userAnswer}". Provide constructive feedback and a rating from 1 to 10.`;
      const response = await model.generateContent(prompt);
      const text = (await response.response.text()).replace(/\*/g, "");
      setFeedback(text);
    } catch (error) {
      console.error("Error evaluating answer:", error);
      setFeedback("Failed to evaluate answer. Try again.");
    }
    setLoading(false);
  };

  useEffect(() => {
    getNewQuestion();
  }, [skill]);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-10 space-y-6">
      <h2 className="text-3xl font-bold text-blue-400 text-center">AI Mock Interview</h2>
      
      <div>
        <label className="block text-gray-400 text-sm font-medium">Select Skill:</label>
        <select
          className="w-full p-3 mt-2 bg-gray-700 text-white rounded-lg border border-gray-600"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Data Structures">Data Structures</option>
          <option value="Algorithms">Algorithms</option>
          <option value="System Design">System Design</option>
        </select>
      </div>

      <div className="p-4 bg-gray-800 rounded-lg min-h-[80px] flex items-center justify-center">
        {loading ? (
          <p className="text-gray-400 animate-pulse">Fetching question...</p>
        ) : (
          <p className="text-lg font-semibold text-center">{question}</p>
        )}
      </div>

      <textarea
        className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-600"
        rows="4"
        placeholder="Type your answer here..."
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      ></textarea>

      <div className="flex space-x-3 justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-white flex items-center shadow-md"
          onClick={evaluateAnswer}
          disabled={loading}
        >
          <PaperAirplaneIcon className="w-5 h-5 mr-2" />
          Submit Answer
        </button>
        <button
          className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-lg text-white shadow-md"
          onClick={getNewQuestion}
        >
          New Question
        </button>
      </div>

      {feedback && (
        <div className="p-4 bg-gray-800 rounded-lg">
          <h3 className="text-lg font-bold text-green-400">AI Feedback</h3>
          <p className="text-gray-300 text-center">{feedback}</p>
        </div>
      )}
    </div>
  );
};

export default InterviewComponent;
