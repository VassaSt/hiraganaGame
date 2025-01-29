// src/CharacterScreen.tsx
import React, { useMemo } from "react";
import Time from "./Time";
import { CHARACTERS } from "./utils/hiragana";

interface CharacterScreenProps {
  character: string; // Correct character from audio
  onSelectCharacter: (isCorrect: boolean) => void; // Function to handle selection
}

const CharacterScreen: React.FC<CharacterScreenProps> = ({
  character,
  onSelectCharacter,
}) => {
  // Function to get 4 random incorrect characters
  const getRandomCharacters = (correctChar: string) => {
    const filteredCharacters = CHARACTERS.filter(
      (char) => char !== correctChar
    ); // Remove correct character
    const shuffled = [...filteredCharacters].sort(() => 0.5 - Math.random()); // Shuffle
    return shuffled.slice(0, 4); // Pick first 4
  };

  // Memoized array of 5 characters (1 correct + 4 random)
  const characterOptions = useMemo(() => {
    const randomCharacters = getRandomCharacters(character);
    const allCharacters = [...randomCharacters, character]; // Add correct character
    return allCharacters.sort(() => 0.5 - Math.random()); // Shuffle again
  }, [character]);

  // Function to handle character click
  const handleCharacterClick = (selectedCharacter: string) => {
    const isCorrect = selectedCharacter === character;
    onSelectCharacter(isCorrect); // Pass the result to App.tsx
  };

  return (
    <div className="characterScreen">
      <h2>Find</h2>
      <Time initialTime={5} />
      <div className="screenStyle">
        {characterOptions.map((char) => (
          <div
            key={char}
            className="characterBoxStyle"
            onClick={() => handleCharacterClick(char)} // Handle user click
          >
            {char}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterScreen;
