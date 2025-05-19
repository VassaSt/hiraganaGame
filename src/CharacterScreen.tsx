// src/CharacterScreen.tsx
import React, { useMemo, useState } from "react";
import Time from "./Time";
import { CHARACTERS } from "./utils/hiragana";

interface CharacterScreenProps {
  character: string;
  selectedTime: number;
  onSelectCharacter: (isCorrect: boolean) => void;
  onTimeOut: () => void;
}

const CharacterScreen: React.FC<CharacterScreenProps> = ({
  character,
  selectedTime,
  onSelectCharacter,
  onTimeOut,
}) => {
  const [timerStopped, setTimerStopped] = useState(false);
  const [selectedChar, setSelectedChar] = useState<string | null>(null); // Which character user clicked

  const getRandomCharacters = (correctChar: string) => {
    const filtered = CHARACTERS.filter((c) => c !== correctChar);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  const characterOptions = useMemo(() => {
    const others = getRandomCharacters(character);
    const mixed = [...others, character];
    return mixed.sort(() => 0.5 - Math.random());
  }, [character]);

  const handleClick = (char: string) => {
    if (selectedChar) return; // prevent multiple clicks
    setTimerStopped(true);
    setSelectedChar(char);
    const isCorrect = char === character;
    onSelectCharacter(isCorrect);
  };

  const handleTimeEnd = () => {
    if (!timerStopped) {
      onTimeOut();
      setTimerStopped(true);
    }
  };

  // Function to get additional class based on selectedChar
  const getClassName = (char: string) => {
    if (!selectedChar) return "characterBoxStyle";
    if (char !== selectedChar) return "characterBoxStyle"; // only clicked one gets a change
    const isCorrect = char === character;
    return `characterBoxStyle ${isCorrect ? "char-correct" : "char-incorrect"}`;
  };

  return (
    <div className="characterScreen">
      <h2>Find</h2>
      <Time
        initialTime={selectedTime}
        onTimeEnd={handleTimeEnd}
        stop={timerStopped}
      />
      <div className="screenStyle">
        {characterOptions.map((char) => (
          <div
            key={char}
            className={getClassName(char)}
            onClick={() => handleClick(char)}
          >
            {char}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterScreen;
