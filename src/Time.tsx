import React, { useEffect, useState } from "react";
import "./App.css";

type TimeProps = {
  initialTime: 3 | 5 | 7 | 10; // Restrict to specific values
};

const Time: React.FC<TimeProps> = ({ initialTime }) => {
  const [time, setTime] = useState<number>(initialTime);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    if (time === 0) {
      setTimeout(() => setVisible(false), 500); // Short delay before hiding
      return;
    }

    const timer = setTimeout(() => setTime((prevTime) => prevTime - 1), 1000);

    return () => clearTimeout(timer);
  }, [time]);

  if (!visible) return null;

  return (
    <div className="clockStyles">
      <span className="line line_left"></span>
      <div className="clockImg"></div>
      <div className="time">{time}</div>
      <span className="line line_right"></span>
    </div>
  );
};

export default Time;
