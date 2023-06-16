import { useState } from "react";
import "./CreateQuiz.css";

//adding settings to the quiz, time, deadline, type of quiz, provide hint to the question
export const CreateQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);
  const [questionType, setQuestionType] = useState("text");
  const [errors, setErrors] = useState([]);
  const addQuestion = (event) => {
    let error = [];
    let conp = [];
    let question = {};

    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
      if (key == "question")
        value.length <= 5
          ? (error = [...error, "question cannot be empty"])
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
    }

    if (questionType != "text" && !(options.length > 1)) {
      error = [...error, "there must be minimum 2 option"];
    }

    if (error.length > 0) {
      setErrors([...error]);
      return;
    }
    setOptions([]);
    setQuestions([
      ...questions,
      {
        question: question.question,
        options,
        questionType,
        correctAnswer: question.correct,
      },
    ]);
    setQuestionType("text");
    event.target.reset();
    setErrors([]);
  };

  const addOption = () => {
    let option = document.getElementById("option").value;
    if (option.length > 0) {
      setOptions([...options, option]);
      document.getElementById("option").value = "";
    }
  };

  const removeOption = (event) => {
    options.splice(options.indexOf(event.target.value), 1);
    setOptions([...options]);
  };
  return (
    <>
      <h1>Creator Mode</h1>
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
        <button>add question</button>
      </form>
      {errors?.map((x) => (
        <p id="error">{x}</p>
      ))}

      <div id="questionDisplay">
        {questions.map((x, y) => (
          <span id="questionDisplayIn">
            <span>
              <p>Question : {x.question}</p>
              <p>Question Type : {x.questionType}</p>
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
      <div id="testSettings">
        <h2>Test Settings</h2>
        <p>test deadline</p>
        <p>test duration</p>
        <p>Test questions display type</p>
        <select name="quizType">
          <option value="all">All questions at once</option>
          <option value="one">one question at a time</option>
          <option value="one no back">
            one question at a time but cant visit previous question
          </option>
        </select>
      </div>
    </>
  );
};
