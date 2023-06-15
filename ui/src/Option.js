import "./Option.css";
export const Option = ({ option, setAnswer, qid }) => {
  return (
    <button onClick={(event) => setAnswer(event)} id={qid} className={"btn2"}>
      {option}
    </button>
  );
};
