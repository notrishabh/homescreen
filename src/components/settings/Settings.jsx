import React, { useState } from "react";
import Main from "./Main.jsx";
import TagList from "./TagList";
import Backdrop from "./Backdrop.jsx";
import Background from "./Background.jsx";
import { motion } from "framer-motion";

const Settings = (props) => {
  const [openTagList, setOpenTagList] = useState(false);
  const [openBackground, setOpenBackground] = useState(false);

  const handleClose = () => {
    props.setOpenSettings(false);
  };

  const Conditional = () => {
    if (openTagList) {
      return <TagList setOpenTagList={setOpenTagList} />;
    } else if (openBackground) {
      return <Background setOpenBackground={setOpenBackground} />;
    } else {
      return (
        <Main
          setOpenTagList={setOpenTagList}
          setShowLogin={props.setShowLogin}
          setOpenBackground={setOpenBackground}
        />
      );
    }
  };
  //Dropping animation of settings
  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.2,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "20vh",
      opacity: 0,
    },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute left-0 right-0 z-40 w-2/4 p-4 mx-auto mt-10 bg-transparent rounded-xl h-2/4 backdrop-filter backdrop-blur-lg backdrop-saturate-200 "
      >
        <button
          className="float-right p-px hover:bg-red-300 rounded-xl"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h1 className="m-3 text-4xl mb-7 font-heading">Settings</h1>
        <Conditional />
      </motion.div>
    </Backdrop>
  );
};

export default Settings;
