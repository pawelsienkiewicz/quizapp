import React from "react";

type Props = {
  answers: string[];
  callback: any;
  question: string;
  givenAnswer: any;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  answers,
  callback,
  question,
  givenAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <div>
    <p>
      Pytanie: {questionNumber}/{totalQuestions}
    </p>
    <p>{question}</p>
    <div>
      {answers.map((answer) => (
        <div key={answer}>
          <button disabled={givenAnswer} onClick={callback} value={answer}>
            <span>{answer}</span>
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
