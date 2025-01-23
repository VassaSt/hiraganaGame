import React from "react";

// Define the type for the props
interface CharacterScreenProps {
  characters: string[];
}

// Accept props and render characters
export const CharacterScreen: React.FC<CharacterScreenProps> = ({
  characters,
}) => {
  return (
    <div className="screenStyle">
      {characters.map((char, index) => (
        <div key={index} className="characterBoxStyle">
          {char}
        </div>
      ))}
    </div>
  );
};
