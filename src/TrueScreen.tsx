import React from "react";

interface TrueScreenProps {
  restartGame: () => void; // Restart the game
}

const TrueScreen: React.FC<TrueScreenProps> = ({ restartGame }) => {
  return (
    <div className="resultScreen correct">
      <h2>✅ Correct!</h2>
      <p>Great job! You chose the right character.</p>
      <button onClick={restartGame}>Continue</button>
    </div>
  );
};

export default TrueScreen;
