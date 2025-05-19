// src/Time.tsx
import React, { useEffect, useState } from "react";

interface TimeProps {
  initialTime: number;
  onTimeEnd: () => void;
  stop?: boolean; // Optional prop to stop the timer
}

const Time: React.FC<TimeProps> = ({
  initialTime,
  onTimeEnd,
  stop = false,
}) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (stop || time <= 0) return;

    const timer = setInterval(() => {
      setTime((prevTime) => {
        const nextTime = prevTime - 1;
        if (nextTime <= 0) {
          clearInterval(timer);
          onTimeEnd();
        }
        return nextTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [time, stop, onTimeEnd]);

  return (
    <div className="clockStyles">
      <div className="line line_left"></div>
      <div className="clockImg"></div>
      <div className="timer">{time}</div>
      <div className="line line_right"></div>
    </div>
  );
};

export default Time;
