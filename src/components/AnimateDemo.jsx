import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpring, useSpringRef } from "react-spring";

function Toggle() {
  const [toggle, setToggle] = useState(false);
  const props = useSpring({
    to: {
      transform: "translate3d(10px,0,0) scale(1) rotateX(180deg)",
    },
    from: {
      transform: "translate3d(0px,0,0) scale(0.2) rotateX(0deg)",
    },
    delay: 500,
    reset: true,
    reverse: toggle,
    onRest: () => setToggle(!toggle),
  });
  return (
    <div>
      <animated.h1 style={props} className="text-xl">
        lol
      </animated.h1>
    </div>
  );
}

const Hello = () => {
  const [vis, setVis] = useState(false);
  const transRef = useSpringRef();
  const transition = useTransition(vis, {
    ref: transRef,
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 1, transform: "translate3d(0%,50%,0)" },
    reverse: vis,
    reset: true,
  });
  useEffect(() => {
    transRef.start();
  }, [vis]);
  return (
    <div>
      <button onClick={() => setVis(!vis)}>click</button>
      <div>
        {transition((style, item) =>
          item ? (
            <animated.h1 style={style}>hello</animated.h1>
          ) : (
            <animated.h1 style={style}>bye</animated.h1>
          )
        )}
      </div>
    </div>
  );
};

export default Hello;
