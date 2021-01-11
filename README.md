Speed Typing Game let's you know how fast you type. It's build with React Functional components, React Hooks and styled with CSS. The project is one of the Challenges I solved in Scrimba's Frontend Developer Career Path course.

The React Hooks used are as follows:

useState() - For state management

useRef() - For textarea focus

useEffect() - For timing and ending game

This project demonstrates the following tech skills:

React Hooks and Functional Components.

I started the project by first building out the basic structures of the app such as the text area elements, start button and elements to display TIME REMAINING and WORD COUNT. Then I set up a state using the useState() hook to keep track of the text in the text area after every key stroke. I then created a function - countWords() - to calculate the number of separate words in the 'text' state.

Then I created a second state to hold the current value of the count down timer. I then linked it up with the header element to display 'TIME REMAINING'.

ROADBLOCK ENCOUNTERED: The major challenge I experienced was how to display the number of words the user typed into the text area when the timer reaches 0.

SOLUTION: To solve this I created another state - wordCount - and built a conditional logic to setWordCount based on remaining time (timeRemaining) in a useEffect() hook.

EXPERIENCE GAINED: In this project, I gained experience with React Functional components and React Hooks.

Date: 28-Nov-20

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).