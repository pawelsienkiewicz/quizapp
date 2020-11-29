import React, { useState } from "react";
import { getQuestions } from "./TriviaDB";

import QuestionCard from "./components/QuestionCard";
import { QuestionState, Question } from "./TriviaDB";

const TOTAL_QUESTIONS = 10;

type Answer = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const [score, setScore] = useState(0);
  const [gameIsFinished, setGameIsFinished] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setGameIsFinished(false);
    const newQuestionsLoaded = await getQuestions();
    setQuestions(newQuestionsLoaded);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameIsFinished) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };
  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameIsFinished(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <div className="App">
      <h1>Quiz</h1>
      {gameIsFinished || userAnswers.length === TOTAL_QUESTIONS ? (
        <button onClick={startQuiz}>Zacznij quiz!</button>
      ) : null}
      {!gameIsFinished ? <p>Twój wynik: {score}</p> : null}
      {loading && <p>Ładowanie pytań...</p>}
      {!gameIsFinished && !loading && (
        <QuestionCard
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          givenAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameIsFinished &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button onClick={nextQuestion}>Następne pytanie</button>
      ) : null}
    </div>
  );
}

export default App;
