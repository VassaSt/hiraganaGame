import React from "react";
import { Button } from "./Button";
import "./App.css";

interface BtnScreenProps {
  showStartButton: boolean;
  onStart: () => void;
}

const StartBtnScreen: React.FC<BtnScreenProps> = ({
  showStartButton,
  onStart,
}) => {
  return (
    <div className="btnScreen">
      <h1 className="title">Listen and find</h1>
      {showStartButton && <Button onClick={onStart} text="Start" />}
    </div>
  );
};

export default StartBtnScreen;
