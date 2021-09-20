import React, { useState, useEffect } from "react";
import Draggable from "react-draggable";

const Greet = (props) => {
  const [Name, setName] = useState(props.user.name);
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    setName(props.user.name);
  }, [props.user.name]);

  const setGreetingByHours = () => {
    let datexd = new Date().getHours();
    if (datexd >= 0 && datexd < 12) {
      setGreeting("Good Morning");
    } else if (datexd >= 12 && datexd < 17) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  };
  useEffect(() => {
    setGreetingByHours();
    const interval = setInterval(() => {
      setGreetingByHours();
    }, 14400000);
    return () => clearInterval(interval);
  }, []);

  const greetX = localStorage.greetX ? JSON.parse(localStorage.greetX) : 0;
  const greetY = localStorage.greetY ? JSON.parse(localStorage.greetY) : 0;
  const [greetPos] = useState({ x: greetX, y: greetY });

  const nodeRef = React.useRef(null);
  const handleStop = (e, ui) => {
    localStorage.setItem("greetX", ui.x);
    localStorage.setItem("greetY", ui.y);
  };
  return (
    <Draggable
      nodeRef={nodeRef}
      bounds="body"
      defaultPosition={{ x: greetPos.x, y: greetPos.y }}
      onStop={handleStop}
    >
      <div
        className="cursor-default absolute left-0 right-0 flex justify-center mx-auto w-96 top-10"
        ref={nodeRef}
      >
        <h1 className="text-2xl font-future">
          {greeting}, {Name ? Name.split(" ")[0] : ""}
        </h1>
      </div>
    </Draggable>
  );
};

export default Greet;
