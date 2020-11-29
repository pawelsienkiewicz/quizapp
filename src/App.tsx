import React, { useState } from "react";
import {getQuestions} from "./TriviaDB";

import QuestionCard from "./components/QuestionCard";

const TOTAL_QUESTIONS = 10;

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameIsFinished, setGameIsFinished] = useState(false);
  
  const startQuiz = async () => {};
  const checkAnswer = () => {};
  const nextQuestion = () => {};


  console.log(getQuestions);

  return (
    <div className="App">
      <h1>Quiz</h1>
      <button onClick={startQuiz}>Zacznij quiz!</button>
      <p>Twój wynik: </p>
      {/* <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        givenAnswer= {userAnswers ? userAnswers[number] : undefined}
        callback = {checkAnswer}
      /> */}
      <button onClick={nextQuestion}>Następne pytanie</button>
    </div>
  );
}

export default App;
