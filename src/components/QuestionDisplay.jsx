import React from 'react';
export const QuestionDisplay = ({ 
  question, 
  questionNumber, 
  totalQuestions, 
  selectedAnswer, 
  onSelectAnswer 
}) => (
  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
    <div className="flex justify-between items-center mb-6">
      <span className="text-sm font-medium text-gray-500">
        Question {questionNumber} of {totalQuestions}
      </span>
      <span className="text-sm text-gray-500">Question ID: {question.id}</span>
    </div>

    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
      {question.text}
    </h2>

    <div className="space-y-3">
      {question.options.map((option, idx) => {
        const isSelected = selectedAnswer === idx;

        return (
          <button
            key={idx}
            onClick={() => onSelectAnswer(question.id, idx)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              isSelected
                ? 'border-blue-600 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300 bg-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                isSelected
                  ? 'border-blue-600 bg-blue-600'
                  : 'border-gray-300'
              }`}>
                {isSelected && (
                  <div className="w-3 h-3 bg-white rounded-full" />
                )}
              </div>
              <span className={`flex-1 ${isSelected ? 'text-blue-900 font-medium' : 'text-gray-700'}`}>
                {option}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  </div>
);