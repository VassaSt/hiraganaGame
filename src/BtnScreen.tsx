import React from "react";
import { Button } from "./Button";
import "./App.css";

interface BtnScreenProps {
  showStartButton: boolean;
  onStart: () => void;
}

const BtnScreen: React.FC<BtnScreenProps> = ({ showStartButton, onStart }) => {
  return (
    <div className="btnScreen">
      {/* <i className="cloud cloud_1"></i>
      <i className="cloud cloud_2"></i>
      <i className="cloud cloud_3"></i> */}
      <h1 className="title">Listen and find</h1>
      {showStartButton && <Button onClick={onStart} text="Start" />}
    </div>
  );
};

export default BtnScreen;
