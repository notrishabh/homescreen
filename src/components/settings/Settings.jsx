import React, { useState } from "react";
import TagList from "./TagList";

const Settings = () => {
  const [openTagList, setOpenTagList] = useState(false);
  return (
    <div className="absolute left-0 right-0 z-40 w-2/4 p-4 mx-auto bg-transparent rounded-xl h-2/4 backdrop-filter backdrop-blur-lg backdrop-saturate-200 ">
      <h1 className="m-3 text-4xl font-heading">Settings</h1>
      <div className="flex justify-between m-3 mb-4 items-center">
        <p className="p-1.5 font-bold">Set tags for Quotes</p>
        <button
          onClick={() => setOpenTagList(!openTagList)}
          className="p-1.5 bg-blue-100 rounded-xl hover:bg-gray-100 mb-4"
        >
          Select
        </button>
      </div>
      {openTagList ? <TagList /> : ""}
    </div>
  );
};

export default Settings;
