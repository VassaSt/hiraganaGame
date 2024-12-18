import React from 'react'

const ScreenStyle = {
  display: "flex",
  flexWrap: "wrap",
  margin: "20px auto",
  width: "",
  height: "200px",
  border: "1px solid #000",
  borderRadius: "16px",
  background: "#FEF9F2",
};

const CharacterBoxStyle = {
  display: "flex",
  margin: "5px",
  width: "50px",
  height: "50px",
  border: "1px solid #000",
  borderRadius: "4px",
  background: "#FEF9F2",
};



export const CharacterScreen = () => {
  return (
    <div style={ScreenStyle}>
      <div style={CharacterBoxStyle} id="0"></div>
      <div style={CharacterBoxStyle} id="1"></div>
      <div style={CharacterBoxStyle} id="2"></div>
      <div style={CharacterBoxStyle} id="3"></div>
      <div style={CharacterBoxStyle}  id="4"></div>
      <div style={CharacterBoxStyle} id="5"></div>
      <div style={CharacterBoxStyle} id="6"></div>
      <div style={CharacterBoxStyle} id="7"></div>
      <div style={CharacterBoxStyle} id="8"></div>
    </div>
  );
};
