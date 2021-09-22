import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Animate = () => {
  const [vis, setVis] = useState(true);
  const handleClick = () => {
    setVis(!vis);
  };
  return (
    <div>
      <button onClick={handleClick}>click</button>
      <AnimatePresence exitBeforeEnter>
        {vis ? (
          <motion.div
            initial={{ opacity: 0 }}
            key={1}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            style={{ width: "100px", height: "100px", backgroundColor: "red" }}
          ></motion.div>
        ) : (
          <motion.div
            key={2}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            hello
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Animate;
