import React, { useState } from "react";
import { Layout } from "antd";
import "./App.css";
import BtnScreen from "./BtnScreen";
import AudioScreen from "./AudioScreen";
import CharacterScreen from "./CharacterScreen";
import TrueScreen from "./TrueScreen";
import FalseScreen from "./FalseScreen";
import { CHARACTERS, HIRAGANA_AUDIO } from "./utils/hiragana";
const App: React.FC = () => {
  const [screen, setScreen] = useState<"btn" | "audio" | "character">("btn");
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const [result, setResult] = useState<"true" | "false" | null>(null); // :arrow_left: Для модалки
  const startNewRound = () => {
    setScreen("audio");
    setResult(null); // Скрыть попап
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    const randomCharacter = CHARACTERS[randomIndex];
    setSelectedCharacter(randomCharacter);
    const audioPath = HIRAGANA_AUDIO[randomCharacter];
    if (audioPath) {
      new Audio(audioPath).play();
    } else {
      console.error(`Audio not found for character: ${randomCharacter}`);
    }
  };
  const handleStart = () => {
    startNewRound();
  };
  const handleTimeEnd = () => {
    setScreen("character");
  };
  const handleCharacterSelection = (isCorrect: boolean) => {
    setResult(isCorrect ? "true" : "false"); // :arrow_left: Показать попап
  };
  return (
    <Layout className="layoutStyles">
      {screen === "btn" && (
        <BtnScreen showStartButton={true} onStart={handleStart} />
      )}
      {screen === "audio" && selectedCharacter && (
        <AudioScreen character={selectedCharacter} onTimeEnd={handleTimeEnd} />
      )}
      {screen === "character" && selectedCharacter && (
        <CharacterScreen
          character={selectedCharacter}
          onSelectCharacter={handleCharacterSelection}
        />
      )}
      {/* Popup-overlay */}
      {result === "true" && (
        <div className="popupOverlay">
          <TrueScreen restartGame={startNewRound} />
        </div>
      )}
      {result === "false" && (
        <div className="popupOverlay">
          <FalseScreen restartGame={startNewRound} />
        </div>
      )}
    </Layout>
  );
};
export default App;
