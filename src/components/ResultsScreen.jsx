import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

export const ResultsScreen = ({ results, quizData, onRetry }) => {
  const percentage = parseFloat(results.percentage);
  const passed = percentage >= 70;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <div className="text-center mb-8">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 ${
            passed ? 'bg-green-100' : 'bg-red-100'
          }`}>
            {passed ? (
              <CheckCircle size={48} className="text-green-600" />
            ) : (
              <XCircle size={48} className="text-red-600" />
            )}
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {passed ? 'Congratulations!' : 'Exam Complete'}
          </h1>
          <p className="text-gray-600">
            {passed ? 'You passed the exam!' : 'Keep practicing to improve your score'}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-blue-600">{results.percentage}%</div>
            <div className="text-sm text-gray-600">Score</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-600">{results.correctCount}</div>
            <div className="text-sm text-gray-600">Correct</div>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-red-600">{results.incorrectCount}</div>
            <div className="text-sm text-gray-600">Incorrect</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-gray-600">{results.unanswered}</div>
            <div className="text-sm text-gray-600">Unanswered</div>
          </div>
        </div>

        <button
          onClick={onRetry}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Take Another Exam
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Review</h2>
        <div className="space-y-6">
          {results.questionResults.map((result, idx) => (
            <div key={result.questionId} className="border-b border-gray-200 pb-6 last:border-0">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  result.isCorrect ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  {result.isCorrect ? (
                    <CheckCircle size={20} className="text-green-600" />
                  ) : (
                    <XCircle size={20} className="text-red-600" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Question {idx + 1}: {result.question}
                  </h3>
                  <div className="space-y-2">
                    {result.options.map((option, optIdx) => {
                      const isUserAnswer = result.userAnswer === optIdx;
                      const isCorrectAnswer = result.correctAnswer === optIdx;

                      return (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-lg ${
                            isCorrectAnswer
                              ? 'bg-green-50 border border-green-200'
                              : isUserAnswer
                              ? 'bg-red-50 border border-red-200'
                              : 'bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {isCorrectAnswer && (
                              <CheckCircle size={16} className="text-green-600" />
                            )}
                            {isUserAnswer && !isCorrectAnswer && (
                              <XCircle size={16} className="text-red-600" />
                            )}
                            <span className={`${
                              isCorrectAnswer
                                ? 'text-green-900 font-medium'
                                : isUserAnswer
                                ? 'text-red-900'
                                : 'text-gray-700'
                            }`}>
                              {option}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {result.userAnswer === undefined && (
                    <p className="text-orange-600 text-sm mt-2">
                      This question was not answered
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};