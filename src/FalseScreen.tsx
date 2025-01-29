// src/FalseScreen.tsx
import React from "react";

interface FalseScreenProps {
  restartGame: () => void; // Function to restart the game
}

const FalseScreen: React.FC<FalseScreenProps> = ({ restartGame }) => {
  return (
    <div className="resultScreen incorrect">
      <h2>❌ Incorrect!</h2>
      <p>Oops! Try again next time.</p>
      <button onClick={restartGame}>Try Again</button>
    </div>
  );
};

export default FalseScreen;
