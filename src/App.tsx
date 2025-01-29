// src/App.tsx
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
  const [screen, setScreen] = useState<
    "btn" | "audio" | "character" | "true" | "false"
  >("btn");
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );

  const startNewRound = () => {
    setScreen("audio"); // Reset to AudioScreen with a new character

    // Select a new random Hiragana character
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    const randomCharacter = CHARACTERS[randomIndex];

    setSelectedCharacter(randomCharacter);
    console.log(`New Random Hiragana character: ${randomCharacter}`);

    // Play the audio for the new character
    const audioPath = HIRAGANA_AUDIO[randomCharacter];
    if (audioPath) {
      const audio = new Audio(audioPath);
      audio.play();
    } else {
      console.error(`Audio file not found for character: ${randomCharacter}`);
    }
  };

  const handleStart = () => {
    startNewRound(); // Start the game for the first time
  };

  const handleTimeEnd = () => {
    setScreen("character"); // Move to CharacterScreen when the timer ends
  };

  const handleCharacterSelection = (isCorrect: boolean) => {
    setScreen(isCorrect ? "true" : "false"); // Show TrueScreen or FalseScreen based on selection
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
      {screen === "true" && <TrueScreen restartGame={startNewRound} />}
      {screen === "false" && <FalseScreen restartGame={startNewRound} />}
    </Layout>
  );
};

export default App;
