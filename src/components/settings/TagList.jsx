import React, { useEffect, useState } from "react";
import quoteApi from "../../api/quote.js";
import { motion } from "framer-motion";

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

  const slideAnimation = {
    initial: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
    },
    exit: {
      scale: 0,
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
      <div className="flex justify-start pb-5 text-lg align-center">
        <button
          className="p-1 pr-3 rounded-xl hover:bg-gray-100 "
          onClick={() => {
            props.setSelectedPage("");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h1 className="font-bold">Select Tags</h1>
      </div>
      <div className="flex justify-between mx-4">
        <h1 className="">Deselect all for random</h1>
      </div>
      <div className="grid grid-flow-col grid-rows-3 gap-4 mt-4 mx-4">
        {allTags.length
          ? allTags.map((tag, i) => (
              <button
                key={tag._id}
                className={"rounded-lg p-1 hover:text-gray-500"}
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
    </motion.div>
  );
};

export default TagList;
