import React, { useState } from 'react';
import styles from '../styles/Quiz.module.scss';
import questions from './questions';


const Quiz: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answers, setAnswers] = useState<string[]>(Array.from({ length: questions.length }, () => ''));
    const [userScore, setUserScore] = useState<number>(0);

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestion] = event.target.value;
            return newAnswers;
        });
    };
  
    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleBack = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleFinish = () => {
        if (answers.every((answer) => answer !== '')) {
            const correctAnswers = questions.map((question) => question.correctAnswer);
            const score = answers.reduce((acc, userAnswer, index) => acc + (userAnswer === correctAnswers[index] ? 1 : 0), 0);
            setUserScore(score);
        } else {
            alert('Please answer all questions before finishing.');
        }
    };

  return (
    <div className={styles.container}>
        {userScore === 0 ? 
            <div className={styles.card}>
                <h3>{currentQuestion+1} / {questions.length}</h3>
                <h3>{questions[currentQuestion].question}</h3>
                <div className={styles.options}>
                    {questions[currentQuestion].options.map((option) => (
                    <label key={option}>
                        <input
                        type="radio"
                        value={option}
                        checked={answers[currentQuestion] === option}
                        onChange={handleOptionChange}
                        />
                        {option}
                    </label>
                    ))}
                </div>
                <div className={styles.cardButton}>
                    <button onClick={handleBack} disabled={currentQuestion === 0 }>
                        Back
                    </button>
                    <button onClick={handleNext} disabled={currentQuestion === questions.length - 1}>
                        Next
                    </button>
                </div>
            </div>
        :<div className={styles.card}>
            <h1>Your score is {userScore} / {questions.length} </h1>
            
        </div>}
        {userScore === 0 ?
            <div >
                <button className={styles.button} onClick={handleFinish} >
                    Finish
                </button>
            </div>
        :''}
    </div>
  );
};

export default Quiz;