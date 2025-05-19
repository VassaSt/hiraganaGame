import React from "react";

interface TrueScreenProps {
  restartGame: () => void; // Restart the game
}

const TrueScreen: React.FC<TrueScreenProps> = ({ restartGame }) => {
  return (
    <div className="resultScreen correct">
      <h2>Well done!</h2>
      <button onClick={restartGame}>Continue</button>
    </div>
  );
};

export default TrueScreen;
