import React from "react";

Audio = () => {
  let audio = new Audio("/background.mp3");

  const start = () => {
    audio.play();
  };

  return (
    <div>
      <button onClick={start}>Play</button>
    </div>
  );
};

export default Audio;
