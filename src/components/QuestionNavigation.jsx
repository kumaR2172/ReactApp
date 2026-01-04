import React from 'react';

export const QuestionNavigation = ({ 
  questions, 
  currentQuestion, 
  answers, 
  onNavigate 
}) => (
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-semibold text-gray-900 mb-3">Question Navigation</h3>
    <div className="grid grid-cols-5 gap-2">
      {questions.map((q, idx) => {
        const isAnswered = answers[q.id] !== undefined;
        const isCurrent = idx === currentQuestion;

        return (
          <button
            key={q.id}
            onClick={() => onNavigate(idx)}
            className={`h-10 rounded font-semibold transition-colors ${
              isCurrent
                ? 'bg-blue-600 text-white'
                : isAnswered
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {idx + 1}
          </button>
        );
      })}
    </div>
  </div>
);