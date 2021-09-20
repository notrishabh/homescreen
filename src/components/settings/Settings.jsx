import React, { useState } from "react";
import TagList from "./TagList";
import Glogout from "../glogin/Glogout.jsx";
import Background from "./Background.jsx";

const Settings = (props) => {
  const [openTagList, setOpenTagList] = useState(false);
  const handleClose = () => {
    props.setOpenSettings(false);
  };
  return (
    <div className="absolute left-0 right-0 z-40 w-2/4 p-4 mx-auto bg-transparent rounded-xl h-2/4 backdrop-filter backdrop-blur-lg backdrop-saturate-200 ">
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
      <h1 className="m-3 text-4xl font-heading">Settings</h1>
      <div className="flex justify-start m-3 mb-4 align-center">
        <p className="p-1 font-bold">Set tags for Quotes</p>
        <button
          onClick={() => setOpenTagList(!openTagList)}
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
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {openTagList ? <TagList /> : ""}
      <Background />
      <div className="p-4 bottom-0 right-0 absolute">
        <Glogout setShowLogin={props.setShowLogin} />
      </div>
    </div>
  );
};

export default Settings;
