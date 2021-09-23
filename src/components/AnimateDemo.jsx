import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Animate = () => {
  const [vis, setVis] = useState(true);
  const handleClick = () => {
    setVis(!vis);
  };
  const Sq = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        exit={{ opacity: 0, x: 500 }}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      ></motion.div>
    );
  };
  const Hel = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: 100 }}
      >
        hello
      </motion.div>
    );
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <AnimatePresence exitBeforeEnter>
        {vis ? <Sq key={1} /> : <Hel key={2} />}
      </AnimatePresence>
    </div>
  );
};

export default Animate;
