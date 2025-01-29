// src/CharacterScreen.tsx
import React from "react";
import Time from "./Time";

interface CharacterScreenProps {
  character: string;
}

const CharacterScreen: React.FC<CharacterScreenProps> = ({ character }) => {
  return (
    <div className="characterScreen">
      <h2>Find</h2>
      <Time initialTime={10} />
      <div className="screenStyle">
        <div className="characterBoxStyle">{character}</div>
      </div>
    </div>
  );
};

export default CharacterScreen;
