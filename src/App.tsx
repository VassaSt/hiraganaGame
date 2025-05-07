import React, { useState } from "react";
import { Layout } from "antd";
import "./App.css";
import ChooseTimeScreen from "./ChooseTimeScreen";
import StartBtnScreen from "./StartBtnScreen";
import AudioScreen from "./AudioScreen";
import CharacterScreen from "./CharacterScreen";
import TrueScreen from "./TrueScreen";
import FalseScreen from "./FalseScreen";
import { CHARACTERS, HIRAGANA_AUDIO } from "./utils/hiragana";

const App: React.FC = () => {
  const [screen, setScreen] = useState<
    "start" | "choseTime" | "btn" | "audio" | "character"
  >("start");
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const [result, setResult] = useState<"true" | "false" | null>(null); // For popup

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
    setScreen("choseTime"); // Transition to the "choseTime" screen
  };

  const handleTimeSelect = (time: number) => {
    setSelectedTime(time);
    setScreen("btn"); // Transition to the "btn" screen after selecting time
  };

  const handleStart = () => {
    startNewRound();
  };

  const handleTimeEnd = () => {
    setScreen("character");
  };

  const handleCharacterSelection = (isCorrect: boolean) => {
    setResult(isCorrect ? "true" : "false"); // Show popup
  };

  return (
    <Layout className="layoutStyles">
      {screen === "start" && (
        <StartBtnScreen
          showStartButton={true}
          onStart={handleGameStart}
          title="Find Character"
          buttonText="Let's play"
        />
      )}
      {screen === "choseTime" && (
        <ChooseTimeScreen onTimeSelect={handleTimeSelect} />
      )}
      {screen === "btn" && (
        <StartBtnScreen
          showStartButton={true}
          onStart={handleStart}
          title="Listen and Find"
          buttonText="Start"
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
