// src/App.tsx
import React, { useState } from "react";
import { Layout } from "antd";
import "./App.css";
import { Button } from "./Button";
import { CHARACTERS, HIRAGANA_AUDIO } from "./utils/hiragana";

const App: React.FC = () => {
  const [showStartButton, setShowStartButton] = useState(true); // Tracks button visibility

  // Function to handle the START button click
  const handleStart = () => {
    // Hide the START button
    setShowStartButton(false);

    // Select a random Hiragana character
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    const randomCharacter = CHARACTERS[randomIndex];

    // Log the character to the console
    console.log(`Random Hiragana character: ${randomCharacter}`);

    // Play the audio for the selected character
    const audioPath = HIRAGANA_AUDIO[randomCharacter];
    if (audioPath) {
      const audio = new Audio(audioPath);
      audio.play();
    } else {
      console.error(`Audio not found for character: ${randomCharacter}`);
    }
  };

  return (
    <Layout className="layoutStyles">
      <i className="cloud cloud_1"></i>
      <i className="cloud cloud_2"></i>
      <i className="cloud cloud_3"></i>
      <h1 className="title">Listen and find</h1>
      {showStartButton && <Button onClick={handleStart} text="Start" />}
    </Layout>
  );
};

export default App;
