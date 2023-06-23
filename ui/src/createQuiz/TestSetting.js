import "./CreateQuiz.css";
export const TestSettings = ({ submitForm }) => (
  <div>
    <form onSubmit={submitForm} id="testSettings">
      <h2>Test Settings</h2>
      <label>
        Test Deadline
        <input
          type="date"
          min={(function () {
            return new Date().toISOString().split("T")[0];
          })()}
          max={(function () {
            return new Date(Date.now() + 1000 * 60 * 60 * 24 * 45)
              .toISOString()
              .split("T")[0];
          })()}
          name="deadlineDate"
          required
        />
        Deadline Time
        <input type="time" name="deadlineTime" />
        <p className="instructionHover">i</p>
        <p className="instruction">
          The date of test must be within 45 days from today
        </p>
      </label>

      <label>
        Test Duration
        <input
          type="number"
          name="hourDuration"
          placeholder="enter hours"
          min="0"
          max="4"
          required
        />
        <input
          type="number"
          name="minutesDuration"
          placeholder=" enter"
          min="0"
          max="59"
          required
        />
      </label>

      <p>Test questions display type</p>
      <select name="quizType">
        <option value="all">All questions at once</option>
        <option value="one">one question at a time</option>
        <option value="one no back">
          one question at a time but cant visit previous question
        </option>
      </select>
      <button> Done</button>
    </form>
  </div>
);
