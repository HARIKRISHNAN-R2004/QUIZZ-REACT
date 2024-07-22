// src/components/Result.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const email = queryParams.get('email');
  const score = queryParams.get('score');

  return (
    <div id="result">
      <h1>Quiz Result</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default Result;
