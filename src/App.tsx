// src/App.tsx
import React, { useState } from "react";
import { Layout } from "antd";
import "./App.css";
import BtnScreen from "./BtnScreen";
import { CHARACTERS, HIRAGANA_AUDIO } from "./utils/hiragana";

const App: React.FC = () => {
  const [showStartButton, setShowStartButton] = useState(true);

  const handleStart = () => {
    setShowStartButton(false);

    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    const randomCharacter = CHARACTERS[randomIndex];

    console.log(`Random Hiragana character: ${randomCharacter}`);

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
      <BtnScreen showStartButton={showStartButton} onStart={handleStart} />
    </Layout>
  );
};

export default App;
