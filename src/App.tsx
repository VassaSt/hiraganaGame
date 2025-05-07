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
  >("choseTime");
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
    null
  );
  const [result, setResult] = useState<"true" | "false" | null>(null); // :arrow_left: for popup
  const startNewRound = () => {
    setScreen("audio");
    setResult(null); // hide popup
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
    const handleTimeSelect = (time: number) => {
      setSelectedTime(time);
      setScreen("btn"); // Transition to the "btn" screen after selecting time
    };

  const handleTimeEnd = () => {
    setScreen("character");
  };
  const handleCharacterSelection = (isCorrect: boolean) => {
    setResult(isCorrect ? "true" : "false"); // :arrow_left: show popup
  };
  return (
    <Layout className="layoutStyles">
      {screen === "choseTime" && (
        <ChooseTimeScreen onTimeSelect={handleTimeSelect} />
      )}
      {screen === "btn" && (
        <StartBtnScreen showStartButton={true} onStart={handleStart} />
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
