// src/App.js
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';
import quizData from './data';

const App = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [score, setScore] = useState(null);
  const navigate = useNavigate();

  const startQuiz = (name, email) => {
    setUserName(name);
    setUserEmail(email);
    navigate('/quiz');
  };

  const submitQuiz = (answers) => {
    let correctAnswers = 0;
    quizData.forEach((question, index) => {
      if (question.answer === answers[index]) {
        correctAnswers += 1;
      }
    });
    setScore(correctAnswers);
    navigate(`/result?name=${userName}&email=${userEmail}&score=${correctAnswers}`);
  };

  return (
    <Routes>
      <Route path="/" element={<Home startQuiz={startQuiz} />} />
      <Route path="/quiz" element={<Quiz submitQuiz={submitQuiz} userName={userName} userEmail={userEmail} quizData={quizData} />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
};

export default App;
