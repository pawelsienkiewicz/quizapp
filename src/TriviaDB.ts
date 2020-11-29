
import { randomize } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export const getQuestions = async () => {
  const url = `https://opentdb.com/api.php?amount=10&category=9&type=multiple`;
  const data = await (await fetch(url)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: randomize([...question.incorrect_answers, question.correct_answer]),
  }));
};
