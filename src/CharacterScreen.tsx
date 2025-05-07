import React, { useMemo, useState } from "react";
import Time from "./Time";
import { CHARACTERS } from "./utils/hiragana";

interface CharacterScreenProps {
  selectedTime: number;
  character: string;
  onSelectCharacter: (isCorrect: boolean) => void;
}
const CharacterScreen: React.FC<CharacterScreenProps> = ({
  selectedTime,
  character,
  onSelectCharacter,
}) => {
  const [clickedChar, setClickedChar] = useState<string | null>(null);
  const [isCorrectClick, setIsCorrectClick] = useState<boolean | null>(null);
  const getRandomCharacters = (correctChar: string) => {
    const filtered = CHARACTERS.filter((char) => char !== correctChar);
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };
  const characterOptions = useMemo(() => {
    const randomChars = getRandomCharacters(character);
    const all = [...randomChars, character];
    return all.sort(() => 0.5 - Math.random());
  }, [character]);
  const handleCharacterClick = (selected: string) => {
    if (clickedChar) return;
    const correct = selected === character;
    setClickedChar(selected);
    setIsCorrectClick(correct);
    onSelectCharacter(correct);
  };
  const getClassName = (char: string) => {
    if (char !== clickedChar) return "characterBoxStyle";
    return `characterBoxStyle ${
      isCorrectClick ? "char-correct" : "char-incorrect"
    }`;
  };
  return (
    <div className="characterScreen">
      <h2>Find</h2>
      <Time initialTime={selectedTime} />
      <div className="screenStyle">
        {characterOptions.map((char) => (
          <div
            key={char}
            className={getClassName(char)}
            onClick={() => handleCharacterClick(char)}
          >
            {char}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CharacterScreen;
