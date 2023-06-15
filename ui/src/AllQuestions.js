import "./AllQuestions.css";
export const AllQuestions = ({
  questions,
  submitAnswers,
  quizType,
  setQuizType,
}) => {
  return (
    <>
      <div id="container">
        <div id="questions">
          {quizType === "all" ? (
            <button onClick={() => setQuizType("one")}>
              switch to one question view
            </button>
          ) : null}
          {questions.map((x, y) => (
            <>
              <h3 id={x.questionId}>{x.question}</h3>
              <p>
                {
                  {
                    multiple: "multiple choice mutiple answer",
                    single: "multiple choice single answer",
                    text: "enter your answer maximum words 200",
                  }[x.questionType]
                }
              </p>
              <span>
                {x.questionType == "text" ? (
                  <textarea
                    cols="100"
                    rows="10"
                    placeholder="enter your answer"
                    name={`${questions[y].questionId}_$_0`}
                    id={`${questions[y].questionId}_$_0`}
                    maxLength="200"
                    onBlur={(event) => {
                      submitAnswers(event);
                    }}
                  ></textarea>
                ) : (
                  x.options.map((x, z) => (
                    <button
                      onClick={(event) => {
                        submitAnswers(event);
                        console.log(questions);
                      }}
                      id={`${questions[y].questionId}_$_${z}`}
                      key={`${questions[y].questionId}_$_${z}`}
                      className={
                        questions[y].selectedOption.includes(x)
                          ? "isSelected"
                          : "notSelected"
                      }
                    >
                      {x}
                    </button>
                  ))
                )}
              </span>
            </>
          ))}
          <button onClick={() => setQuizType("preview")}>Submit</button>
        </div>
        <div id="controls2">
          <p>Jump to the question</p>
          <span>
            {questions.map((x, y) => (
              <label>
                <a href={`#${y + 1}`}>
                  <button>
                    <input
                      type="radio"
                      key={y + 1}
                      value={y + 1}
                      name="question index"
                      style={{ display: "none " }}
                    />
                    question{y + 1}
                  </button>
                </a>
              </label>
            ))}
          </span>
          <button
            // style={{ "margin-top": "10px", "margin-left": "20px" }}
            onClick={() => setQuizType("preview")}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};
