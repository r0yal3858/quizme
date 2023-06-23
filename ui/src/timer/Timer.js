import { useEffect, useState } from "react";
//i need to se
export const Timer = ({ setQuizType }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [deadLine, setDeadLine] = useState(
    new Date(Date.parse(new Date()) + 1000 * 60 * 60 * 1).toString()
  );
  const [start, setStart] = useState(Date.now());
  useEffect(() => {
    setInterval(() => {
      const time = Date.parse(deadLine) - Date.parse(new Date());
      const totalTime = Date.parse(deadLine) - start;
      console.log(time);
      console.log(time / totalTime);
      // document
      //   .querySelector(".battery")
      //   .style.setProperty("width", `${(time / totalTime) * 100}%`);
      if (time > 0) {
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
      } else {
        setQuizType("done");
      }
    }, 1000);
  }, []);
  return (
    <>
      <p>
        Hours : {hours}, Minutes :{minutes}, seconds: {seconds}
      </p>
    </>
  );
};
