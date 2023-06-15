//question types
// multiple choice single answer => single => string
// multiple choice multiple answer => multiple => array
// input question and answers , fill in the blanks => ans text => string
//timer is not working problem

import { useEffect, useState } from "react";
import { AllQuestions } from "./AllQuestions";
import { SingleQuestion } from "./SingleQuestionQuiz";
import { PreviewSubmission } from "./previewQuiz/PreviewSubmission";
import { Timer } from "./timer/Timer";
import "./Quiz.css";
export const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswer] = useState([]);
  const [quizType, setQuizType] = useState("all");
  const [origQuizType, setOrigQuizType] = useState("all");
  const [startTime, setStartTime] = useState();

  // let quizType = ["all", "one"];
  // quizType = "all at once";
  let seed = [
    {
      questionId: 1,
      question: " Who developed Python Programming Language?",
      options: [
        "Wick van Rossum",
        " Rasmus Lerdorf",
        "Guido van Rossum",
        " Niene Stom",
      ],
      selectedOption: [],
      questionType: "multiple",
    },
    {
      questionId: 2,
      question: "Which type of Programming does Python support?",
      options: [
        "object-oriented programming",
        "structured programming",
        "functional programming",
        "all of the mentioned",
      ],
      selectedOption: [],
      questionType: "single",
    },
    {
      questionId: 3,
      question: "Which type of Programming does Python support?",
      options: [
        "object-oriented programming",
        "structured programming",
        "functional programming",
        "all of the mentioned",
      ],
      selectedOption: [],
      questionType: "text",
    },
    {
      questionId: 4,
      question: "Which type of Programming does Python support?",
      options: [
        "object-oriented programming",
        "structured programming",
        "functional programming",
        "all of the mentioned",
      ],
      selectedOption: [],
      questionType: "text",
    },
    {
      questionId: 5,
      question: "Which type of Programming does Python support?",
      options: [
        "object-oriented programming",
        "structured programming",
        "functional programming",
        "all of the mentioned",
      ],
      selectedOption: [],
      questionType: "text",
    },
    {
      questionId: 6,
      question: "Which type of Programming does Python support?",
      options: [
        "object-oriented programming",
        "structured programming",
        "functional programming",
        "all of the mentioned",
      ],
      selectedOption: [],
      questionType: "text",
    },
    {
      questionId: 7,
      question: "Which type of Programming does Python support?",
      options: [
        "object-oriented programming",
        "structured programming",
        "functional programming",
        "all of the mentioned",
      ],
      selectedOption: [],
      questionType: "text",
    },
    {
      questionId: 8,
      question: "Which type of Programming does Python support?",
      options: [
        "object-oriented programming",
        "structured programming",
        "functional programming",
        "all of the mentioned",
      ],
      selectedOption: [],
      questionType: "text",
    },
  ];

  // this function is to register the answer if the user edits the same question it will register the new ans
  const ans = (event) => {
    let questionId = event.target.id.split("_$_")[0];
    let selectedOption = event.target.innerHTML || event.target.value;

    questions.map((x, y) => {
      if (
        x.questionId == questionId &&
        (x.questionType == "single" || x.questionType == "text")
      ) {
        x.selectedOption = [selectedOption];
      } else if (x.questionId == questionId && x.questionType == "multiple") {
        if (x.selectedOption.includes(selectedOption)) {
          x.selectedOption.splice(x.selectedOption.indexOf(selectedOption), 1);
        } else {
          x.selectedOption = [...x.selectedOption, selectedOption];
        }
      }
    });

    setQuestions([...questions]);
  };
  const comp = () => {
    switch (quizType) {
      case "all":
        return (
          <AllQuestions
            questions={questions}
            submitAnswers={ans}
            setQuizType={setQuizType}
            quizType={quizType}
          ></AllQuestions>
        );
      case "one":
      case "default":
        return (
          <SingleQuestion
            questions={questions}
            submitAnswers={ans}
            setQuizType={setQuizType}
            quizType={quizType}
          />
        );
      case "done":
      case "preview":
        return (
          <PreviewSubmission
            questions={questions}
            setQuizType={setQuizType}
            quizType={quizType}
          ></PreviewSubmission>
        );
    }
  };

  useEffect(() => {
    setQuestions(seed);
    setStartTime(Date.now());
    console.log("running");
  }, []);
  if (questions.length == 0) {
    return <p>loading</p>;
  }

  return (
    <div>
      {quizType == "done" || quizType == "preview" ? null : (
        <Timer setQuizType={setQuizType} startTime={startTime}></Timer>
      )}
      {comp()}
    </div>
  );
};
