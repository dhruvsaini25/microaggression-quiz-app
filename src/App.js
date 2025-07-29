import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';
import './App.css';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizComplete(false);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="app-title">Microaggression Awareness Quiz</h1>
        <p className="app-subtitle">
          Learn to recognize subtle forms of bias in everyday interactions
        </p>
        
        {!quizComplete ? (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
        ) : (
          <ResultScreen
            score={score}
            total={questions.length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
};

export default App;