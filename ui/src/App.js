import logo from "./logo.svg";
import { Question } from "./Quiz";
import "./App.css";
import { useState } from "react";
import { CreateQuiz } from "./createQuiz/CreateQuiz";

function App() {
  const [disp, setDisp] = useState(1);
  return (
    <div className="App">
      <button
        onClick={() => {
          setDisp(disp ? 0 : 1);
        }}
      >
        change
      </button>
      {disp ? <Question></Question> : <CreateQuiz />}
    </div>
  );
}

export default App;
