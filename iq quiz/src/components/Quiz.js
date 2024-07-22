// src/components/Quiz.js
import React, { useState, useEffect } from 'react';

const Quiz = ({ submitQuiz, userName, userEmail, quizData }) => {
  const questionsPerPage = 10;
  const totalQuestions = quizData.length;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState(Array(totalQuestions).fill(null));
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      if (currentPage < totalPages - 1) {
        nextPage();
      } else {
        handleSubmit();
      }
    }
  }, [timeLeft, currentPage]);

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[currentPage * questionsPerPage + index] = answer;
    setAnswers(newAnswers);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setTimeLeft(600); // Reset the timer for the next page
  };

  const handleSubmit = () => {
    submitQuiz(answers);
  };

  const renderQuestions = () => {
    const start = currentPage * questionsPerPage;
    const end = start + questionsPerPage;
    return quizData.slice(start, end).map((question, index) => (
      <div key={index}>
        <h4>{question.question}</h4>
        <ul>
          {question.options.map((option, i) => (
            <li key={i}>
              <label>
                <input
                  type="radio"
                  name={`question${start + index}`}
                  value={option}
                  checked={answers[start + index] === option}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div>
      <h3>Welcome, {userName}!</h3>
      <h4>Email: {userEmail}</h4>
      <div>
        {renderQuestions()}
      </div>
      <div>
        <p>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60}</p>
      </div>
      {currentPage < totalPages - 1 ? (
        <button onClick={nextPage}>Next Page</button>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default Quiz;
