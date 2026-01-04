import { useState, useCallback, useMemo } from 'react';
import { mockAPI } from '../services/mockAPI';

export const useQuizManager = () => {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(null);

  const loadQuiz = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await mockAPI.fetchQuiz();
      setQuizData(data);
      setTimeRemaining(data.timeLimit);
      setAnswers({});
      setCurrentQuestion(0);
      setIsSubmitted(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const selectAnswer = useCallback((questionId, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  }, []);

  const navigateToQuestion = useCallback((index) => {
    if (quizData && index >= 0 && index < quizData.questions.length) {
      setCurrentQuestion(index);
    }
  }, [quizData]);

  const submitQuiz = useCallback(() => {
    setIsSubmitted(true);
  }, []);

  const resetQuiz = useCallback(() => {
    setQuizData(null);
    setAnswers({});
    setCurrentQuestion(0);
    setIsSubmitted(false);
    setTimeRemaining(null);
  }, []);

  const results = useMemo(() => {
    if (!quizData || !isSubmitted) return null;

    const totalQuestions = quizData.questions.length;
    let correctCount = 0;

    const questionResults = quizData.questions.map(q => {
      const userAnswer = answers[q.id];
      const isCorrect = userAnswer === q.correctAnswer;
      if (isCorrect) correctCount++;

      return {
        questionId: q.id,
        question: q.text,
        userAnswer,
        correctAnswer: q.correctAnswer,
        isCorrect,
        options: q.options
      };
    });

    return {
      totalQuestions,
      correctCount,
      incorrectCount: totalQuestions - correctCount,
      unanswered: totalQuestions - Object.keys(answers).length,
      percentage: ((correctCount / totalQuestions) * 100).toFixed(1),
      questionResults
    };
  }, [quizData, answers, isSubmitted]);

  return {
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
  };
};