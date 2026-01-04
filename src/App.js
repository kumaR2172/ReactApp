import React from 'react';
import { useQuizManager } from './hooks/useQuizManager';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ExamInterface } from './components/ExamInterface';
import { ResultsScreen } from './components/ResultsScreen';

function App() {
  const {
    quizData,
    loading,
    error,
    currentQuestion,
    answers,
    isSubmitted,
    timeRemaining,
    results,
    loadQuiz,
    selectAnswer,
    navigateToQuestion,
    submitQuiz,
    resetQuiz,
    setTimeRemaining
  } = useQuizManager();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      {!quizData && !loading && (
        <WelcomeScreen onStart={loadQuiz} loading={loading} error={error} />
      )}

      {loading && (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Loading exam...</p>
          </div>
        </div>
      )}

      {quizData && !isSubmitted && (
        <ExamInterface
          quizData={quizData}
          currentQuestion={currentQuestion}
          answers={answers}
          timeRemaining={timeRemaining}
          onSelectAnswer={selectAnswer}
          onNavigate={navigateToQuestion}
          onSubmit={submitQuiz}
          setTimeRemaining={setTimeRemaining}
        />
      )}

      {isSubmitted && results && (
        <ResultsScreen
          results={results}
          quizData={quizData}
          onRetry={resetQuiz}
        />
      )}
    </div>
  );
}

export default App;