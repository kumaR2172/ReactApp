export const mockAPI = {
  fetchQuiz: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldFail = Math.random() < 0.05; 
        if (shouldFail) {
          reject(new Error('Failed to load quiz data'));
        } else {
          resolve({
            id: 'quiz-001',
            title: 'JavaScript & React Fundamentals',
            description: 'Test your knowledge of modern JavaScript and React',
            timeLimit: 1800, 
            questions: [
              {
                id: 1,
                text: 'What is the purpose of React Hooks?',
                options: [
                  'To style components',
                  'To add state and lifecycle features to functional components',
                  'To create class components',
                  'To handle routing'
                ],
                correctAnswer: 1
              },
              {
                id: 2,
                text: 'Which array method returns a new array without mutating the original?',
                options: ['push()', 'splice()', 'map()', 'sort()'],
                correctAnswer: 2
              },
              {
                id: 3,
                text: 'What does the "key" prop do in React lists?',
                options: [
                  'Encrypts component data',
                  'Helps React identify which items have changed',
                  'Creates unique CSS classes',
                  'Defines component hierarchy'
                ],
                correctAnswer: 1
              },
              {
                id: 4,
                text: 'What is closure in JavaScript?',
                options: [
                  'A way to close browser windows',
                  'A function that has access to variables in its outer scope',
                  'A method to terminate loops',
                  'A CSS property'
                ],
                correctAnswer: 1
              },
              {
                id: 5,
                text: 'Which hook is used for side effects in React?',
                options: ['useState', 'useEffect', 'useContext', 'useMemo'],
                correctAnswer: 1
              },
              {
                id: 6,
                text: 'What is the Virtual DOM?',
                options: [
                  'A copy of the actual DOM kept in memory',
                  'A CSS framework',
                  'A database technology',
                  'A JavaScript library'
                ],
                correctAnswer: 0
              },
              {
                id: 7,
                text: 'What does "===" check in JavaScript?',
                options: [
                  'Only value equality',
                  'Only type equality',
                  'Both value and type equality',
                  'Reference equality only'
                ],
                correctAnswer: 2
              },
              {
                id: 8,
                text: 'What is the purpose of useState in React?',
                options: [
                  'To fetch data from APIs',
                  'To add state variables to functional components',
                  'To optimize performance',
                  'To handle form validation'
                ],
                correctAnswer: 1
              }
            ]
          });
        }
      }, 800);
    });
  }
};