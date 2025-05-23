import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button className="startButton" onClick={onClick}>
      {text}
    </button>
  );
};
