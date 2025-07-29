import React from 'react';

const ResultScreen = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  
  const getMessage = () => {
    if (percentage >= 80) return "Excellent awareness! You recognize microaggressions well.";
    if (percentage >= 60) return "Good job! You're developing strong awareness.";
    if (percentage >= 40) return "You're learning! Keep building your awareness.";
    return "This is a great start! Awareness is the first step.";
  };

  return (
    <div className="result-screen">
      <h2>Quiz Complete!</h2>
      
      <div className="score-circle">
        <div className="score-number">{score}/{total}</div>
        <div className="score-label">Correct</div>
      </div>
      
      <div className="result-message">
        {getMessage()}
      </div>
      
      <div className="result-details">
        <p>You correctly identified {score} out of {total} scenarios.</p>
        <p>Remember: Recognizing microaggressions is an ongoing learning process. The goal is to become more aware and create more inclusive environments.</p>
      </div>
      
      <button className="restart-button" onClick={onRestart}>
        Take Quiz Again
      </button>
    </div>
  );
};

export default ResultScreen;