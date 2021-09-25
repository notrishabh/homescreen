import React, { useState } from "react";
import Main from "./Main.jsx";
import SecondPage from "./SecondPage.jsx";
import Backdrop from "./Backdrop.jsx";
import { motion, AnimatePresence } from "framer-motion";

const Settings = (props) => {
  //Change the condition by the clicked button page from main to pass as a prop in secondpage
  const [selectedPage, setSelectedPage] = useState("");

  const handleClose = () => {
    props.setOpenSettings(false);
  };

  //Dropping animation of settings
  //const dropIn = {
  //hidden: {
  //y: "-100vh",
  //opacity: 0,
  //},
  //visible: {
  //y: "0",
  //opacity: 1,
  //transition: {
  //duration: 0.2,
  //type: "spring",
  //damping: 25,
  //stiffness: 500,
  //},
  //},
  //exit: {
  //y: "20vh",
  //opacity: 0,
  //},
  //};
  const topLeftScale = {
    hidden: {
      x: "30vw",
      y: "-20vh",
      scale: 0,
    },
    visible: {
      x: "0",
      y: "0",
      scale: 1,
      transition: {
        type: "spring",
        damping: 100,
        stiffness: 500,
      },
    },
    exit: {
      x: "30vw",
      y: "-20vh",
      scale: 0,
    },
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        variants={topLeftScale}
        initial="hidden"
        animate="visible"
        exit="exit"
        style={{ minHeight: "50vh" }}
        className="absolute left-0 right-0 z-40 w-1/2 p-4 mx-auto mt-10 bg-transparent rounded-xl backdrop-filter backdrop-blur-lg backdrop-saturate-200 "
      >
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="float-right p-px rounded-xl"
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
        </motion.button>
        <h1 className="m-3 text-4xl mb-7 font-heading">Settings</h1>
        <div className="">
          <AnimatePresence initial={false}>
            {selectedPage === "" ? (
              <Main
                key={"main"}
                setShowLogin={props.setShowLogin}
                setSelectedPage={setSelectedPage}
              />
            ) : (
              <SecondPage
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Settings;
