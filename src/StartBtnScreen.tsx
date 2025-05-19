import React from "react";
import { Button } from "./Button";
import "./App.css";

interface BtnScreenProps {
  showStartButton: boolean;
  onStart: () => void;
  title: string; 
  buttonText: string; 
}

const StartBtnScreen: React.FC<BtnScreenProps> = ({
  showStartButton,
  onStart,
  title,
  buttonText,
}) => {
  return (
    <div className="btnScreen">
      <h1 className="title">{title}</h1>
      {showStartButton && <Button onClick={onStart} text={buttonText} />}
    </div>
  );
};

export default StartBtnScreen;
