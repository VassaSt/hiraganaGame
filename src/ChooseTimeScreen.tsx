// src/components/ChooseTimeScreen.tsx
import React from "react";

interface ChooseTimeScreenProps {
  onTimeSelect: (time: number) => void;
}

const ChooseTimeScreen: React.FC<ChooseTimeScreenProps> = ({
  onTimeSelect,
}) => {
  const times = [5, 7, 10];

  return (
    <div style={styles.container}>
      <h2>Choose Time</h2>
      {times.map((time) => (
        <button
          key={time}
          onClick={() => {
            console.log(`Selected time: ${time}s`);
            onTimeSelect(time);
          }}
        >
          {time}s
        </button>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
};

export default ChooseTimeScreen;
