// src/components/Home.js
import React from 'react';

const Home = ({ startQuiz }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    startQuiz(name, email);
  };

  return (
    <div id="home">
      <h1>IQ QUIZ</h1>
      <img src="/200w.gif" alt="Computer man" />
      <div className="container">
        <h2>User Details</h2>
        <form id="userForm" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name.." required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your email.." required />
          <button type="submit">Let's Play</button>
        </form>
      </div>
      <h3>General Rules</h3>
      <p>Participation: The quiz is open to anyone who wishes to participate.</p>
      <p>Quiz Format: The quiz consists of 30 questions, which may include multiple-choice and true/false.</p>
      <p>Time Limit: Players have a total of 30 minutes to complete all 30 questions.</p>
    </div>
  );
};

export default Home;
