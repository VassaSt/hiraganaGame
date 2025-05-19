import React from "react";

interface FalseScreenProps {
  restartGame: () => void; // Restart the game
}

const FalseScreen: React.FC<FalseScreenProps> = ({ restartGame }) => {
  return (
    <div className="resultScreen incorrect">
      <h2>Ops! It's wrong</h2>
      <button onClick={restartGame}>Try Again</button>
    </div>
  );
};

export default FalseScreen;
