import React, { useEffect, useState } from "react";

interface TimeProps {
  initialTime: number;
  onTimeEnd?: () => void; // Callback when time reaches 0
}

const Time: React.FC<TimeProps> = ({ initialTime, onTimeEnd }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time === 0) {
      if (onTimeEnd) {
        onTimeEnd(); // Trigger callback when time reaches 0
      }
      return;
    }

    const timer = setTimeout(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, onTimeEnd]);

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
