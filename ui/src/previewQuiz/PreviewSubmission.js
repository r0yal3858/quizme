import "./PreviewQuiz.css";

export const PreviewSubmission = ({ questions, setQuizType, quizType }) => {
  return (
    <>
      <p>preview</p>
      {questions.map((z) => (
        <>
          <p>Question no : {z.questionId}</p>
          <h2>{z.question}</h2>
          {z.questionType == "text" ? (
            <textarea value={z.selectedOption}></textarea>
          ) : (
            z.options.map((x, y) => (
              <button
                className={
                  z.selectedOption.includes(x) ? "selectedBttn" : "normal"
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
