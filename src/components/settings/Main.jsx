import React from "react";
import Glogout from "../glogin/Glogout.jsx";
import { motion } from "framer-motion";

const Main = (props) => {
  const slideAnimation = {
    initial: {
      x: "30vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
    exit: {
      x: "-30vw",
      opacity: 0,
    },
  };
  const slideTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1,
  };
  return (
    <motion.div
      initial="initial"
      animate="visible"
      exit="exit"
      variants={slideAnimation}
      transition={slideTransition}
      //className="absolute"
    >
      <div className="flex flex-col mb-4 ml-3 align-center">
        <div className="flex justify-start mb-3 align-center">
          <p className="p-1 font-bold">Set tags for Quotes</p>
          <button
            onClick={() => props.setSelectedPage("Taglist")}
            className="p-1 rounded-xl hover:bg-gray-100 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-start align-center mb-3">
          <p className="p-1 font-bold">Change Background</p>
          <button
            onClick={() => props.setSelectedPage("Background")}
            className="p-1 rounded-xl hover:bg-gray-100 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className=" bottom-0 right-0 p-4 ">
        <Glogout setShowLogin={props.setShowLogin} />
      </div>
    </motion.div>
  );
};

export default Main;
