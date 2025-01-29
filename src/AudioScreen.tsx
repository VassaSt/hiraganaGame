// src/AudioScreen.tsx
import React, { useEffect } from "react";
import Time from "./Time";
import { HIRAGANA_AUDIO } from "./utils/hiragana";

interface AudioScreenProps {
  character: string; // The selected Hiragana character
}

const AudioScreen: React.FC<AudioScreenProps> = ({ character }) => {
  const audioPath = HIRAGANA_AUDIO[character];

  // Play the audio when the component mounts
  useEffect(() => {
    if (audioPath) {
      const audio = new Audio(audioPath);
      audio.play();
    }
  }, [audioPath]);

  // Function to replay the audio when button is clicked
  const replayAudio = () => {
    if (audioPath) {
      const audio = new Audio(audioPath);
      audio.play();
    }
  };

  return (
    <div className="AudioScreen">
      <h2>Listen</h2>
      <Time initialTime={5} />
      <button
        type="button"
        className="screenStyle audioImg"
        onClick={replayAudio}
      ></button>
    </div>
  );
};

export default AudioScreen;
