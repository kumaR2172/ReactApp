# Getting Started with Create React App- using npx create-react-app quiz-exam-system

## Key Features

I have created the quiz application containing some React and Javascript questions. using React, Javascript and ES6+ features and for the responsive design using Tailwind CSS.

## Hooks used:
I'm used useQuizManager hook for centralized state logic 
React Hooks (useState, useEffect, useCallback, useMemo)  and created saparate moduler components and tried to handle the unnecessary re-renders.

### Adding some core Functionality:
Welcome screen with some instructions and countdown timer (30 minutes)
One question at a time with navigation
Question navigation grid showing answered/unanswered status
Auto-submit when time expires
Show the results screen with detailed review

### Using separate Component for each functionality :
WelcomeScreen.jsx
ExamInterface.jsx
QuestionDisplay.jsx
QuestionNavigation.jsx 
Timer.jsx
ResultsScreen.jsx - It will show the Score summary and detailed review.

### Technical Highlights:
Async data loading with loading/error states
Mock API simulation with network delay
Proper cleanup of timers with useEffect hook
Used Tailwind CSS
Accessible UI with proper semantic HTML

The application follows React best practices with functional components, proper hook usage.

### Note: 
When trying to running this application on other system , please installing the required dependencies, node_modules and packages and make sure the tailwind config file in the Root directory.

## Screenshots:
<img width="1920" height="1080" alt="Screenshot (6)" src="https://github.com/user-attachments/assets/d80b5538-7386-4d42-9509-dc4ec3b37751" />
<img width="1920" height="1080" alt="Screenshot (7)" src="https://github.com/user-attachments/assets/72796013-2f2f-4165-843f-68bf8257a470" />
<img width="1920" height="1080" alt="Screenshot (8)" src="https://github.com/user-attachments/assets/b7806f34-89ed-413b-9169-c2805c5c25b9" />






### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
