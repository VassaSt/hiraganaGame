
import React from "react";

interface TimeOffScreenProps {
  restartGame: () => void;
}

const TimeOffScreen: React.FC<TimeOffScreenProps> = ({ restartGame }) => {
  return (
    <div className="resultScreen incorrect">
      <h2>Time's Up!</h2>
      <button onClick={restartGame}>Try Again</button>
    </div>
  );
};

export default TimeOffScreen;
