import React from "react";

interface FalseScreenProps {
  restartGame: () => void; // Restart the game
}

const FalseScreen: React.FC<FalseScreenProps> = ({ restartGame }) => {
  return (
    <div className="resultScreen incorrect">
      <h2>Time off</h2>
      <button onClick={restartGame}>Try Again</button>
    </div>
  );
};

export default FalseScreen;
