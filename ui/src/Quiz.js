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
  const [quizType, setQuizType] = useState("all");
  const [startTime, setStartTime] = useState();

  let seed = [
    {
      bookmark: 0,
      marks: 1,
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
      bookmark: 0,
      marks: 1,
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
      bookmark: 0,
      marks: 1,
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
      bookmark: 0,
      marks: 1,
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
      bookmark: 0,
      marks: 1,
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
      bookmark: 0,
      marks: 1,
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
      bookmark: 0,
      marks: 1,
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
      bookmark: 0,
      marks: 1,
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
    {
      bookmark: 0,
      marks: 1,
      questionId: 8,
      question:
        "Python is a versatile programming language widely used in various domains. With its clean syntax, extensive standard library, and wide range of third-party libraries, Python has gained immense popularity among developers. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming. One of Python's key features is its dynamic typing, allowing flexibility in variable assignment without explicit type declarations. Python offers a plethora of built-in data types such as integers, floats, strings, lists, tuples, dictionaries, and sets. Additionally, it provides advanced features like list comprehensions, generators, decorators, and exception handling. Python's simplicity, readability, and extensive ecosystem make it a top choice for web development, scientific computing, data analysis, machine learning, and automation.",
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
    let selectedOption = event.target.innerHTML;

    questions.map((x, y) => {
      if (
        x.questionId == questionId &&
        (x.questionType == "single" || x.questionType == "text")
      ) {
        x.selectedOption = [
          x.questionType === "text"
            ? event.target.value
            : event.target.innerHTML,
        ];
      } else if (x.questionId == questionId && x.questionType == "multiple") {
        if (x.selectedOption.includes(selectedOption)) {
          x.selectedOption.splice(x.selectedOption.indexOf(selectedOption), 1);
        } else {
          x.selectedOption = [...x.selectedOption, selectedOption];
        }
      }
    });
    console.log(questions);
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
            setQuestions={setQuestions}
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
