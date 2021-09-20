import React, { useState } from "react";
import Clock from "react-live-clock";
import Draggable from "react-draggable";

const DigitalClock = () => {
  const clockX = localStorage.clockX ? JSON.parse(localStorage.clockX) : 0;
  const clockY = localStorage.clockY ? JSON.parse(localStorage.clockY) : 0;
  const [clockPos] = useState({ x: clockX, y: clockY });

  const nodeRef = React.useRef(null);
  const handleStop = (e, ui) => {
    localStorage.setItem("clockX", ui.x);
    localStorage.setItem("clockY", ui.y);
  };
  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="body"
      defaultPosition={{ x: clockPos.x, y: clockPos.y }}
      onStop={handleStop}
    >
      <div
        className="cursor-default max-w-xs text-xl font-heading"
        ref={nodeRef}
      >
        <div>
          <Clock className="" format={"h:mm A"} />
        </div>
        <div>
          <Clock className="" format={"ddd, Do MMM"} />
        </div>
      </div>
    </Draggable>
  );
};

export default DigitalClock;
