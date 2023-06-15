import { useEffect, useState } from "react";
//i need to se
export const Timer = ({ setQuizType, startTime }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [deadLine, setDeadLine] = useState(
    new Date(startTime + 1000 * 60 * 60).toString()
  );
  useEffect(() => {
    setInterval(() => {
      const time = Date.parse(deadLine) - startTime;
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
