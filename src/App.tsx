// src/App.tsx
import React, { useState } from "react";
import { Layout } from "antd";
import "./App.css";
import BtnScreen from "./BtnScreen";
import AudioScreen from "./AudioScreen";
import { CHARACTERS, HIRAGANA_AUDIO } from "./utils/hiragana";

const App: React.FC = () => {
  const [showAudioScreen, setShowAudioScreen] = useState(false); // Controls whether AudioScreen is shown
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  ); // Stores the random character

  const handleStart = () => {
    setShowAudioScreen(true); // Show AudioScreen

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

  return (
    <Layout className="layoutStyles">
      {showAudioScreen && selectedCharacter ? (
        <AudioScreen character={selectedCharacter} />
      ) : (
        <BtnScreen showStartButton={true} onStart={handleStart} />
      )}
    </Layout>
  );
};

export default App;
