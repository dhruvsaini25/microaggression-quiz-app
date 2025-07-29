import React, { useState } from 'react';

const QuestionCard = ({ question, onAnswer, currentQuestion, totalQuestions }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);
    setTimeout(() => {
      onAnswer(option.value === 'aware');
      setSelectedOption(null);
      setShowFeedback(false);
    }, 3000);
  };

  return (
    <div className="question-card">
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
        />
      </div>
      
      <div className="question-number">
        Question {currentQuestion} of {totalQuestions}
      </div>
      
      <div className="scenario">
        {question.scenario}
      </div>
      
      <div className="options">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${
              selectedOption === option 
                ? option.value === 'aware' 
                  ? 'correct' 
                  : 'incorrect'
                : ''
            }`}
            onClick={() => handleOptionClick(option)}
            disabled={showFeedback}
          >
            {option.text}
          </button>
        ))}
      </div>
      
      {showFeedback && selectedOption && (
        <div className={`feedback ${selectedOption.value === 'aware' ? 'correct-feedback' : 'incorrect-feedback'}`}>
          <div className="feedback-icon">
            {selectedOption.value === 'aware' ? '✓' : '✗'}
          </div>
          {question.feedback[selectedOption.value]}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;