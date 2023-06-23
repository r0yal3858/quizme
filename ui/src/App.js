import logo from "./logo.svg";
import { Question } from "./Quiz";
import "./App.css";
import { useState } from "react";
import { CreateQuiz } from "./createQuiz/CreateQuiz";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar>
              <Question />
            </Navbar>
          }
        ></Route>
        <Route
          path="create-quiz"
          element={
            <Navbar>
              <CreateQuiz />
            </Navbar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
