import React from "react";
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
      className="absolute top-0 left-0 right-0 bottom-0 h-full w-full flex align-center justify-center"
      style={{ backgroundColor: "#00000099" }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
