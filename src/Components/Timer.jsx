import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css"

const Timer = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [timer, settimer] = useState(0);
  console.log(timer);

  const handleStart = () => {
    settimer(start);
  };

  useEffect(() => {
    const id = setInterval(() => {
      if (timer >= end) {
        clearInterval(id);
      } else {
        settimer((prev) => prev + 1);
      }
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [timer]);

  return (
    <div>
      <div className={styles.main}>
        <input
          onChange={(e) => setStart(+e.target.value)}
          type="Number"
          placeholder="Start"
        />
        <input
          onChange={(e) => setEnd(+e.target.value)}
          type="Number"
          placeholder="End"
        />
        <br />
        <br />
      </div>
     <button className={styles.btn} onClick={handleStart}>Start Timer</button>
      <h1 className={styles.number}> {timer} </h1>
    </div>
  );
};

export default Timer;
