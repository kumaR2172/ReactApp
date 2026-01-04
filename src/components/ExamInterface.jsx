import React, { useEffect } from 'react';
import { Timer } from './Timer';
import { QuestionDisplay } from './QuestionDisplay';
import { QuestionNavigation } from './QuestionNavigation';

export const ExamInterface = ({
  quizData,
  currentQuestion,
  answers,
  timeRemaining,
  onSelectAnswer,
  onNavigate,
  onSubmit,
  setTimeRemaining
}) => {
  const question = quizData.questions[currentQuestion];
  const answeredCount = Object.keys(answers).length;
  const totalQuestions = quizData.questions.length;

  useEffect(() => {
    if (timeRemaining <= 0) {
      onSubmit();
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, onSubmit, setTimeRemaining]);

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      onNavigate(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      onNavigate(currentQuestion + 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold text-gray-900">{quizData.title}</h1>
          <p className="text-sm text-gray-600">{quizData.description}</p>
        </div>
        <Timer timeRemaining={timeRemaining} />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-2">
          <QuestionDisplay
            question={question}
            questionNumber={currentQuestion + 1}
            totalQuestions={totalQuestions}
            selectedAnswer={answers[question.id]}
            onSelectAnswer={onSelectAnswer}
          />

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="px-6 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <span className="text-sm text-gray-600">
              Answered: {answeredCount} / {totalQuestions}
            </span>

            {currentQuestion < totalQuestions - 1 ? (
              <button
                onClick={handleNext}
                className="px-6 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={onSubmit}
                className="px-6 py-2 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                Submit Exam
              </button>
            )}
          </div>
        </div>

        <div>
          <QuestionNavigation
            questions={quizData.questions}
            currentQuestion={currentQuestion}
            answers={answers}
            onNavigate={onNavigate}
          />
        </div>
      </div>
    </div>
  );
};