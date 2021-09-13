import React, { useState, useEffect } from "react";
import quoteApi from "../api/quote.js";

const Settings = () => {
  const [allTags, setAllTags] = useState([]);
  const fetchAllTags = () => {
    quoteApi.getAllTags().then((tags) => {
      setAllTags(tags.data);
    });
  };
  useEffect(() => {
    fetchAllTags();
  }, []);
  return (
    <div className="absolute z-40 p-4 m-4 bg-white">
      <h1 className="text-4xl font-heading">Settings</h1>
      <div>
        <p>Set tags for Quotes</p>
        <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4">
          {allTags.length
            ? allTags.map((tag) => <p key={tag._id}>{tag.name}</p>)
            : "......."}
        </div>
      </div>
    </div>
  );
};

export default Settings;
