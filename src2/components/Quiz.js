import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../index.css";
import { Link } from 'react-router-dom';

export default function Quiz({ category }) { // Accept category as a prop
  const API_URL = `https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`;

  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [loading, setLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  function handleClicks(answer) {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(prevScore => prevScore + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
    } else {
      setGameOver(true);
    }
  }

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setQuestions(response.data.results);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [API_URL]);

  // Show loading screen until data is fetched
  if (loading) return <div>Loading...</div>;

  // Check if questions array is empty
  if (!questions.length) return <div>Error: No questions available.</div>;


  const currentQ = questions[currentQuestion];
  if (!currentQ) return <div>Error: Invalid question index.</div>;

  if (gameOver) {
    return (
      <div className="container text-center mt-5">
        <h1>TERMINER !</h1>
        <p>VOTRE SCORE : {score}</p>
        <Link to="/" className="btn btn-success">Restart</Link>
      </div>
    );
  }

  const answers = [
    currentQ.correct_answer,
    ...currentQ.incorrect_answers,
  ].sort();

  return (
    <div className="container text-center mt-5">
      <h2>{currentQ.question}</h2>
      <div className="mb-4">
        {answers.map((answer, index) => (
          <button
            key={index}
            className="btn btn-outline-primary m-2"
            onClick={() => handleClicks(answer)}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
