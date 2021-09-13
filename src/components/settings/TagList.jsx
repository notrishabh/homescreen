import React, { useEffect, useState } from "react";
import quoteApi from "../../api/quote.js";

const TagList = (props) => {
  const [allTags, setAllTags] = useState([]);
  const selectTagsFromStorage = localStorage.selectedTags
    ? JSON.parse(localStorage.getItem("selectedTags"))
    : [];
  const [selectedTags, setSelectedTags] = useState(selectTagsFromStorage);
  const fetchAllTags = () => {
    quoteApi.getAllTags().then((tags) => {
      setAllTags(tags.data);
    });
  };
  useEffect(() => {
    fetchAllTags();
  }, []);

  useEffect(() => {
    //acting as a callback function whenever the selectedTags state is updated
    localStorage.setItem("selectedTags", JSON.stringify(selectedTags));
  }, [selectedTags]);

  const handleTagClick = (tagName) => {
    //Adding tags to selected array
    if (selectedTags.includes(tagName)) {
      //Check if already present in selected array
      const index = selectedTags.indexOf(tagName);
      if (index > -1) {
        setSelectedTags((prevTags) => prevTags.filter((tag, i) => i !== index)); // remove from selected array (basically toggling tags)
      }
    } else {
      setSelectedTags((prevTags) => [...prevTags, tagName]); //Appending tags to the array
    }
  };
  return (
    <div className="mt-2 mx-2">
      <div className="flex justify-between">
        <h1 className="">Deselect all for random</h1>
      </div>
      <div className="grid grid-flow-col grid-rows-3 gap-4 mt-4">
        {allTags.length
          ? allTags.map((tag, i) => (
              <button
                key={tag._id}
                className={"rounded-lg hover:bg-blue-50 p-1"}
                onClick={() => handleTagClick(tag.name)}
                style={
                  selectedTags.includes(tag.name) //selective styles of individual buttons
                    ? { backgroundColor: "#BFDBFE" }
                    : { backgroundColor: "white" }
                }
              >
                {tag.name}
              </button>
            ))
          : "......."}
      </div>
    </div>
  );
};

export default TagList;
