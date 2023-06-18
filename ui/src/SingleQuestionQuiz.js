import { useEffect, useState } from "react";

import "./SingleQuestion.css";
export const SingleQuestion = ({
  questions,
  setQuestions,
  submitAnswers,
  quizType,
  setQuizType,
}) => {
  const [index, setIndex] = useState(0);
  const setBookmark = (event) => {
    let bookmarkId = event.target.getAttribute("value");
    questions.map((x, y) => {
      if (x.questionId == bookmarkId) {
        x.bookmark = x.bookmark ? 0 : 1;
      }
    });
    setQuestions([...questions]);
  };
  const clearAnswer = (event) => {
    let ans = event.target.getAttribute("value");
    questions.map((x, y) => {
      if (x.questionId == ans) {
        x.selectedOption = [];
      }
    });
    setQuestions([...questions]);
  };
  return (
    <>
      <div id="container">
        <div id="container1">
          <div className="questionAll">
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

            <span className="questionArea">
              <p>{`${questions[index].marks} Marks`} </p>
              <h3>{questions[index].question}</h3>
              {questions[index].questionType !== "text" ? (
                <button
                  onClick={clearAnswer}
                  value={questions[index].questionId}
                >
                  clear
                </button>
              ) : null}
              <p onClick={setBookmark} value={questions[index].questionId}>
                🔖
              </p>
            </span>

            <span className="options">
              {questions[index].questionType == "text" ? (
                <textarea
                  cols="100"
                  rows="10"
                  placeholder="enter your answer"
                  name={`${questions[index].questionId}_$_0`}
                  id={`${questions[index].questionId}_$_0`}
                  maxLength="200"
                  onChange={(event) => {
                    submitAnswers(event);
                    console.log(questions);
                  }}
                >
                  {questions[index].selectedOption[0]}
                </textarea>
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

          {index + 1 === questions.length && (
            <button onClick={() => setQuizType("preview")}>Submit</button>
          )}
        </div>
        <div id="controls2">
          <p>Jump to the question</p>
          <span>
            {questions.map((x, y) => (
              <label>
                <a href={`#${y + 1}`}>
                  <button
                    value={y}
                    name="question index"
                    onClick={(event) => {
                      setIndex(parseInt(event.target.value));
                    }}
                  >
                    <input
                      type="radio"
                      key={y + 1}
                      value={y + 1}
                      name="question index"
                      style={{ display: "none " }}
                    />
                    question{`${y + 1} ${x.bookmark ? "🔖" : ""}`}
                  </button>
                </a>
              </label>
            ))}
          </span>
          <button onClick={() => setQuizType("preview")}>Submit</button>
          {quizType === "one" ? (
            <button onClick={() => setQuizType("all")}>
              all question view
            </button>
          ) : null}
        </div>
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
    </>
  );
};

{
  //   questions.map((x, y) => (
  //     <>
  //       <div>
  //         <label>
  //           <input
  //             type="radio"
  //             value={y}
  //             name="question index"
  //             onClick={(event) => {
  //               setIndex(parseInt(event.target.value));
  //             }}
  //             key={y}
  //             checked={index === y ? true : false}
  //           />
  //           Question {y + 1}
  //         </label>
  //       </div>
  //     </>
  //   ));
}
