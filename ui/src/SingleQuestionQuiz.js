import { useEffect, useState } from "react";

import "./SingleQuestion.css";
export const SingleQuestion = ({
  questions,
  submitAnswers,
  quizType,
  setQuizType,
}) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div id="container">
        <div id="container1">
          <div id="question">
            {quizType === "one" ? (
              <button onClick={() => setQuizType("all")}>switch to all</button>
            ) : null}
            <p>Question No: {index + 1}</p>
            <p>
              {
                {
                  multiple: "multiple choice mutiple answer",
                  single: "multiple choice single answer",
                  text: "enter your answer maximum words 200",
                }[questions[index].questionType]
              }
            </p>

            <h2>{questions[index].question}</h2>
            <span>
              {questions[index].questionType == "text" ? (
                <textarea
                  placeholder="enter your answer"
                  name={`${questions[index].questionId}_$_0`}
                  id={`${questions[index].questionId}_$_0`}
                  maxLength="200"
                  onBlur={(event) => {
                    submitAnswers(event);
                    console.log(questions);
                  }}
                ></textarea>
              ) : (
                questions[index].options.map((x, y) => (
                  <button
                    onClick={(event) => {
                      submitAnswers(event);
                      console.log(questions);
                    }}
                    id={`${questions[index].questionId}_$_${y}`}
                    key={`${questions[index].questionId}_$_${y}`}
                    className={
                      questions[index].selectedOption.includes(x)
                        ? "isSelected"
                        : "notSelected"
                    }
                  >
                    {x}
                  </button>
                ))
              )}
            </span>
          </div>
          <div id="controls">
            {quizType == "one" ? (
              <button onClick={() => setIndex(index - 1)} disabled={index <= 0}>
                previous
              </button>
            ) : null}
            <button
              onClick={() => setIndex(index + 1)}
              disabled={index >= questions.length - 1}
            >
              next
            </button>
          </div>
          {index + 1 === questions.length && (
            <button onClick={() => setQuizType("preview")}>Submit</button>
          )}
        </div>
        <div id="controls2">
          <p>jump to: </p>
          <fieldset>
            {questions.map((x, y) => (
              <>
                <div>
                  <label>
                    <input
                      type="radio"
                      value={y}
                      name="question index"
                      onClick={(event) => {
                        setIndex(parseInt(event.target.value));
                      }}
                      key={y}
                      checked={index === y ? true : false}
                    />
                    Question {y + 1}
                  </label>
                </div>
              </>
            ))}
          </fieldset>
          <button onClick={() => setQuizType("preview")}>Submit</button>
        </div>
      </div>
    </>
  );
};
