import "./AllQuestions.css";
export const AllQuestions = ({
  questions,
  setQuestions,
  submitAnswers,
  quizType,
  setQuizType,
}) => {
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
      <div id="containerAll">
        <div id="questions">
          {questions.map((x, y) => (
            <>
              <div id="questionAll">
                <span id="questionArea">
                  <h3 id={x.questionId}>{x.question}</h3>

                  {x.questionType !== "text" ? (
                    <button onClick={clearAnswer} value={x.questionId}>
                      clear
                    </button>
                  ) : null}
                  <p onClick={setBookmark} value={x.questionId}>
                    🔖
                  </p>
                </span>
                <p>
                  {
                    {
                      multiple: "multiple choice mutiple answer",
                      single: "multiple choice single answer",
                      text: "enter your answer maximum words 200",
                    }[x.questionType]
                  }
                </p>
                <span id="options">
                  {x.questionType == "text" ? (
                    <textarea
                      cols="100"
                      rows="10"
                      placeholder="enter your answer"
                      name={`${questions[y].questionId}_$_0`}
                      id={`${questions[y].questionId}_$_0`}
                      maxLength="200"
                      onChange={(event) => {
                        console.log("(?");
                        submitAnswers(event);
                      }}
                    >
                      {x.selectedOption[0]}
                    </textarea>
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
              </div>
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
                    question{`${y + 1} ${x.bookmark ? "🔖" : ""}`}
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
          {quizType === "all" ? (
            <button onClick={() => setQuizType("one")}>
              one question view
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
