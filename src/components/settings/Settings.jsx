import React, { useState } from "react";
import Main from "./Main.jsx";
import TagList from "./TagList";
import Background from "./Background.jsx";

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
      <h1 className="m-3 mb-7 text-4xl font-heading">Settings</h1>
      <Conditional />
    </div>
  );
};

export default Settings;
