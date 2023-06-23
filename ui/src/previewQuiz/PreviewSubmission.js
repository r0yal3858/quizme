import "./PreviewQuiz.css";

export const PreviewSubmission = ({ questions, setQuizType, quizType }) => {
  return (
    <>
      <p>preview</p>
      {questions.map((z) => (
        <>
          <div className="questionAll">
            <p>Question no : {z.questionId}</p>
            <span className="questionArea">
              <p>{`${z.marks} Marks`} </p>
              <h3 id={z.questionId}>{z.question}</h3>

              {z.bookmark ? <p>🔖</p> : null}
            </span>
            <span className="options">
              {z.questionType == "text" ? (
                <textarea
                  rows="10"
                  cols="100"
                  value={z.selectedOption}
                ></textarea>
              ) : (
                z.options.map((x, y) => (
                  <button
                    className={
                      z.selectedOption.includes(x)
                        ? "isSelected"
                        : "notSelected"
                    }
                  >
                    {x}
                  </button>
                ))
              )}
              {z.selectedOption.length ? null : (
                <p style={{ color: "red" }}>
                  {z.questionType == "text"
                    ? "the input field is empty"
                    : "No option was selected"}
                </p>
              )}
            </span>
          </div>
        </>
      ))}
      {/** the setQuiz is set to all right now but have to be changed with respect to the quiztype */}
      {quizType == "preview" ? (
        <button onClick={() => setQuizType("one")}> go back to Quiz</button>
      ) : null}

      <button onClick={() => alert("your quiz has been submitted")}>
        submit
      </button>
    </>
  );
};
