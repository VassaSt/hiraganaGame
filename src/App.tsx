// src/App.tsx
import React, { useState } from "react";
import { Layout } from "antd";
import "./App.css";
import BtnScreen from "./BtnScreen";
import AudioScreen from "./AudioScreen";
import CharacterScreen from "./CharacterScreen";
import { CHARACTERS, HIRAGANA_AUDIO } from "./utils/hiragana";

const App: React.FC = () => {
  const [screen, setScreen] = useState<"btn" | "audio" | "character">("btn"); // Track which screen is shown
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  ); // Store the selected Hiragana character

  const handleStart = () => {
    setScreen("audio"); // Show AudioScreen

    // Select a random Hiragana character
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    const randomCharacter = CHARACTERS[randomIndex];

    // Save the selected character
    setSelectedCharacter(randomCharacter);

    // Log the character to the console
    console.log(`Random Hiragana character: ${randomCharacter}`);

    // Play the audio for the selected character
    const audioPath = HIRAGANA_AUDIO[randomCharacter];
    if (audioPath) {
      const audio = new Audio(audioPath);
      audio.play();
    } else {
      console.error(`Audio file not found for character: ${randomCharacter}`);
    }
  };

  const handleTimeEnd = () => {
    setScreen("character"); // Switch to CharacterScreen when time ends
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
        <CharacterScreen character={selectedCharacter} />
      )}
    </Layout>
  );
};

export default App;
