import React, { useEffect, useState } from "react";
import InputTimer from "./components/InputTimer";
import ShowTimer from "./components/ShowTimer";
import HandleResume from "./components/handleResume";
import HandlePaused from "./components/HandlePaused";
import HandleReset from "./components/HandleReset";

const App = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(0);

  const handleStart = () => {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert("Invalid Input");
      return;
    }
    setIsStart(true);
  };

  const handlePaused = () => {
    setIsPaused(true);
    clearInterval(timerId);
  };
  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    setIsStart(false);
    resetTimer();
  };

  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    clearInterval(timerId);
  };

  const handleChange = (e) => {
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") {
      setMinutes(value);
    } else {
      setSeconds(value);
    }
  };

  const runTimer = () => {
    setSeconds((prevSec) => {
      if (prevSec > 0) return prevSec - 1;
      setMinutes((prevMin) => {
        if (prevMin > 0) {
          setSeconds(59);
          return prevMin - 1;
        }
        setHours((prevHr) => {
          if (prevHr > 0) {
            setSeconds(59);
            setMinutes(59);
            return prevHr - 1;
          }
          clearInterval(timerId);
          return 0;
        });
        return 0;
      });
      return 0;
    });
  };

  useEffect(() => {
    if (!isStart) return;
    if (hours === 0 && minutes === 0 && seconds === 0) {
      alert("Timer finished!");
      setIsStart(false);
    }
  }, [hours, minutes, seconds]);

  useEffect(() => {
    if (!isStart || isPaused) return;
    const tid = setInterval(() => {
      runTimer();
    }, 1000);
    setTimerId(tid);
    return () => {
      clearInterval(tid);
    };
  }, [isStart, isPaused]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-5xl mt-10 font-bold">Countdown Timer</h1>
      {!isStart && (
        <InputTimer handleStart={handleStart} handleChange={handleChange} />
      )}
      {isStart && (
        <div className="flex flex-col w-full items-center mt-10 justify-center">
          <ShowTimer hours={hours} minutes={minutes} seconds={seconds} />
          <div className="flex gap-2 w-full justify-center">
            {isPaused ? (
              <HandleResume handleResume={handleResume} />
            ) : (
              <HandlePaused handlePaused={handlePaused} />
            )}
            <HandleReset handleReset={handleReset} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
