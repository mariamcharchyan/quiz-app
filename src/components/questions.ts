interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
  }
  
const questions: Question[] = [
    {
      question: 'In JavaScript, what is the purpose of the "console.log()" function?',
      options: [
        'To display a message in the browser console',
        'To create a new HTML element',
        'To define a variable',
        'To execute a loop'],
      correctAnswer: 'To display a message in the browser console',
    },
    {
      question: 'What does HTML stand for?',
      options: [
        'Hyper Text Markup Language',
        'High Tech Machine Learning',
        'Hyperlink and Text Management Language',
        'Home Tool Markup Language'],
      correctAnswer: 'Hyper Text Markup Language',
    },
    {
      question: 'What is the main purpose of a "for" loop in programming?',
      options: [
        'To make decisions in code',
        'To define a function',
        'To perform a repetitive task a specific number of times',
        'To print text to the console'],
      correctAnswer: 'To perform a repetitive task a specific number of times',
    },
    {
      question: 'What is the role of the "else" statement in programming?',
      options: [
        'To define a function',
        'To perform a loop',
        'To execute a block of code when a certain condition is not met',
        'To print text to the console'],
      correctAnswer: 'To execute a block of code when a certain condition is not met',
    },
    {
      question: 'What is the purpose of the version control system Git?',
      options: [
        'To write HTML code',
        'To create web pages',
        'To manage and track changes in code',
        'To design user interfaces'],
      correctAnswer: 'To manage and track changes in code',
    },
  ];
  export default questions;