import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const MockInterview = () => {
  const [skill, setSkill] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const API_KEY = "AIzaSyAtV8nuqqKXDNbJ3yahxqGfzWxMBB-RmvU";
  const genAI = new GoogleGenerativeAI(API_KEY);

  const getNewQuestion = async () => {
    if (!skill) return alert("Please select a skill first!");

    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `Generate a multiple-choice interview question for ${skill}. Provide 4 answer options and mark the correct answer. Format: Question, Option1, Option2, Option3, Option4, CorrectOption.`;

      const response = await model.generateContent(prompt);
      const generatedText = response?.response?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!generatedText) throw new Error("No valid response from AI");

      const lines = generatedText.split("\n").filter(line => line.trim() !== "");

      if (lines.length < 6) throw new Error("Unexpected response format from AI");

      setQuestion(lines[0]);
      setOptions(lines.slice(1, 5));
      setSelectedAnswer(null);
      setFeedback("");
    } catch (error) {
      console.error("Error fetching question:", error.message);
      alert("Failed to fetch question. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const evaluateAnswer = async () => {
    if (!selectedAnswer) return alert("Please select an answer first!");

    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `The question was: "${question}"\nUser selected: "${selectedAnswer}".\nWas it correct? Provide a brief explanation.`;

      const response = await model.generateContent(prompt);
      const generatedText = response?.response?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!generatedText) throw new Error("No valid response from AI");

      setFeedback(generatedText);
    } catch (error) {
      console.error("Error evaluating answer:", error.message);
      alert("Failed to evaluate answer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const startTest = () => {
    if (!skill) return alert("Please select a skill!");
    setTestStarted(true);
    getNewQuestion();
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-900 text-white rounded-xl shadow-lg mt-10">
      {!testStarted ? (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">AI Mock Interview</h2>
          <div className="space-y-4">
            <p className="text-lg">Select the skill you want to be tested on:</p>
            <select
              className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            >
              <option value="">-- Select Skill --</option>
              <option value="Data Structures">Data Structures</option>
              <option value="Algorithms">Algorithms</option>
              <option value="React.js">React.js</option>
              <option value="Node.js">Node.js</option>
              <option value="Machine Learning">Machine Learning</option>
            </select>
            <button
              className="w-full p-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transition-colors duration-200"
              onClick={startTest}
            >
              Start Test
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-400">AI Mock Interview - {skill}</h2>

          <div className="p-6 bg-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Question:</h3>
            {loading ? (
              <p className="text-gray-400 animate-pulse">Loading question...</p>
            ) : (
              <p className="text-lg">{question}</p>
            )}
          </div>

          <div className="space-y-4">
            {options.map((option, index) => (
              <label
                key={index}
                className="flex items-center p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors duration-200"
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => setSelectedAnswer(option)}
                  className="w-5 h-5 text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-3">{option}</span>
              </label>
            ))}
          </div>

          <div className="flex space-x-4">
            <button
              className="flex-1 p-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 transition-colors duration-200"
              onClick={evaluateAnswer}
              disabled={loading}
            >
              <PaperAirplaneIcon className="w-5 h-5" />
              <span>Submit Answer</span>
            </button>
            <button
              className="flex-1 p-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-semibold transition-colors duration-200"
              onClick={getNewQuestion}
              disabled={loading}
            >
              New Question
            </button>
          </div>

          {feedback && (
            <div className="p-6 bg-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold text-green-400 mb-4">AI Feedback</h3>
              <p className="text-gray-300 leading-relaxed">{feedback}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MockInterview;