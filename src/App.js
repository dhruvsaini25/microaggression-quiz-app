import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';
import './App.css';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('landing'); // landing, quiz, result
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStartQuiz = () => {
    setCurrentScreen('quiz');
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentScreen('result');
    }
  };

  const handleRestart = () => {
    setCurrentScreen('landing');
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  return (
    <div className="app">
      <div className="container">
        {currentScreen === 'landing' && (
          <div className="landing-page">
            <h1 className="app-title">Microaggression Awareness Quiz</h1>
            <p className="app-subtitle">
              Recognize and reflect on subtle biases in everyday situations.
            </p>
            <button className="start-button" onClick={handleStartQuiz}>
              Start Quiz
            </button>
          </div>
        )}

        {currentScreen === 'quiz' && (
          <>
            <h1 className="app-title">Microaggression Awareness Quiz</h1>
            <p className="app-subtitle">
              Learn to recognize subtle forms of bias in everyday interactions
            </p>
            <QuestionCard
              question={questions[currentQuestionIndex]}
              onAnswer={handleAnswer}
              currentQuestion={currentQuestionIndex + 1}
              totalQuestions={questions.length}
            />
          </>
        )}

        {currentScreen === 'result' && (
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
