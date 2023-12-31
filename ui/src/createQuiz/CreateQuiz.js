import { useEffect, useState } from "react";
import { TestSettings } from "./TestSetting";
import "./CreateQuiz.css";

//adding settings to the quiz, time, deadline, type of quiz, provide hint to the question
export const CreateQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [questionType, setQuestionType] = useState("text");
  const [errors, setErrors] = useState([]);
  const [page, setPage] = useState(1);

  const addQuestion = (event) => {
    let error = [];
    let question = {};

    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
      if (key == "question")
        value.length <= 5
          ? (error = [
              ...error,
              "question length must be more that 5 characters",
            ])
          : (question.question = value);
      console.log(options.includes(value), options);
      if (key == "correct") {
        !options.includes(value)
          ? (error = [
              ...error,
              "the correct answer must be part of the option",
            ])
          : (question.correct = value);
      }
      if (key == "hint") {
        value.length && value.length <= 5
          ? (error = [...error, "hint must atleast be 5characters and above"])
          : (question.hint = value);
      }
      if (key == "marks") {
        question.marks = parseFloat(value);
      }
    }

    if (questionType != "text" && !(options.length > 1)) {
      error = [...error, "there must be minimum 2 option"];
    }

    if (error.length > 0) {
      setErrors([...error]);
      return;
    }

    setQuestions([
      ...questions,
      {
        question: question.question,
        options,
        questionType,
        correctAnswer: question.correct,
        hint: question.hint,
        marks: question.marks,
      },
    ]);
    setQuestionType("text");
    event.target.reset();
    setErrors([]);
    setOptions([]);
  };

  const addOption = () => {
    let option = document.getElementById("option").value;
    if (option.length > 0) {
      setOptions([...options, option]);
      document.getElementById("option").value = "";
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };
  const removeOption = (event) => {
    options.splice(options.indexOf(event.target.value), 1);
    setOptions([...options]);
  };

  useEffect(() => {
    document.getElementById("Title").innerHTML = "Creator Mode";
  }, []);

  return (
    <>
      {page ? (
        <>
          <form onSubmit={addQuestion} id="createQuestionForm">
            <select
              name="opt"
              onChange={(event) => setQuestionType(event.target.value)}
            >
              <option value="text">Text</option>
              <option value="single">Multiple Choice Single Answer</option>
              <option value="multiple">Multiple Choic Multiple Answer</option>
            </select>
            <input
              type="text"
              placeholder="enter your question"
              name="question"
              id="questionInput"
            />
            <iframe></iframe>

            {questionType === "text" ? null : (
              <>
                <span id="spantorow">
                  <input
                    type="text"
                    id="option"
                    placeholder="enter options to add"
                  />
                  <button
                    type="button"
                    onClick={addOption}
                    disabled={options.length >= 5 ? "disabled" : null}
                  >
                    add
                  </button>
                </span>
                {options?.map((x) => (
                  <span id="spantorow">
                    <p>{x}</p>
                    <button
                      type="button"
                      value={x}
                      onClick={removeOption}
                      id="bttn"
                    >
                      remove
                    </button>
                  </span>
                ))}
                {options.length > 1 ? (
                  <input
                    name="correct"
                    placeholder="enter the correct option provided"
                  />
                ) : null}
              </>
            )}
            <input type="text" placeholder="want to provide hint" name="hint" />
            <input
              type="number"
              placeholder="how many marks does this question worth "
              min="0"
              max="100"
              name="marks"
            />
            <button>add question</button>
          </form>
          {errors?.map((x) => (
            <p id="error">{x}</p>
          ))}

          <div id="questionDisplay">
            {questions.map((x, y) => (
              <span id="questionDisplayIn">
                <span>
                  {console.log(x)}
                  <p>Question : {x.question}</p>
                  <p>Marks : {x.marks || 1}</p>
                  <p>Question Type : {x.questionType}</p>
                  {x.hint ? <p>Hint : {x.hint}</p> : null}
                  {x.questionType == "text" ? null : (
                    <span>
                      <span>
                        <p>Options : </p>
                        <span>
                          {x.options.map((x) => (
                            <p>{x}</p>
                          ))}
                        </span>
                      </span>
                      <p>Correct Answer: {x.correctAnswer}</p>
                    </span>
                  )}
                </span>
                <button
                  id="removeBttn"
                  onClick={(event) => {
                    questions.splice(questions.indexOf(event.target.value), 1);
                    setQuestions([...questions]);
                  }}
                  value={x}
                >
                  X
                </button>
              </span>
            ))}
          </div>
          <button onClick={() => setPage(0)}>Next</button>
        </>
      ) : (
        <TestSettings submitForm={submitForm} />
      )}
    </>
  );
};
