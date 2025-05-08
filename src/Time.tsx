import React, { useEffect, useState } from "react";

interface TimeProps {
  initialTime: number;
  onTimeEnd: () => void; // Callback when time reaches 0
}

const Time: React.FC<TimeProps> = ({ initialTime, onTimeEnd }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) {
      onTimeEnd(); // Trigger callback when time reaches 0
      return;
    }

    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
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
