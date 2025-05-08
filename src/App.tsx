// src/App.tsx
import React, { useState } from "react";
import { Layout } from "antd";
import "./App.css";
import ChooseTimeScreen from "./ChooseTimeScreen";
import StartBtnScreen from "./StartBtnScreen";
import AudioScreen from "./AudioScreen";
import CharacterScreen from "./CharacterScreen";
import TrueScreen from "./TrueScreen";
import FalseScreen from "./FalseScreen";
import TimeOffScreen from "./TimeOffScreen";
import { CHARACTERS, HIRAGANA_AUDIO } from "./utils/hiragana";

const App: React.FC = () => {
  const [screen, setScreen] = useState<
    "start" | "choseTime" | "btn" | "audio" | "character" | "timeOff"
  >("start");
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const [result, setResult] = useState<"true" | "false" | null>(null);

  const startNewRound = () => {
    setScreen("audio");
    setResult(null); // Hide popup
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

  const handleGameStart = () => {
    setScreen("choseTime"); // Switch to the time selection screen
  };

  const handleTimeSelect = (time: number) => {
    setSelectedTime(time);
    setScreen("btn"); // Switch to the start button screen
  };

  const handleStart = () => {
    startNewRound();
  };

  const handleTimeEnd = () => {
    setScreen("character");
  };

  const handleCharacterSelection = (isCorrect: boolean) => {
    if (isCorrect) {
      setResult("true");
    } else {
      setResult("false");
    }
  };

  // Handle timeout scenario
  const handleTimeout = () => {
    setScreen("timeOff");
  };

  return (
    <Layout className="layoutStyles">
      {screen === "choseTime" && (
        <ChooseTimeScreen onTimeSelect={handleTimeSelect} />
      )}
      {screen === "btn" && (
        <StartBtnScreen
          showStartButton={true}
          title="Listen and find"
          buttonText="Start"
          onStart={handleStart}
        />
      )}
      {screen === "audio" && selectedCharacter && (
        <AudioScreen character={selectedCharacter} onTimeEnd={handleTimeEnd} />
      )}
      {screen === "character" && selectedCharacter && (
        <CharacterScreen
          selectedTime={selectedTime || 5} // Default time if not set
          character={selectedCharacter}
          onSelectCharacter={handleCharacterSelection}
          onTimeOut={handleTimeout} // Improve passing handleTimeout
        />
      )}
      {screen === "timeOff" && <TimeOffScreen restartGame={startNewRound} />}
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
