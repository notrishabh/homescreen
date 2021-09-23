import React, { useState } from "react";
import api from "../../api/unsplash.js";
import { motion } from "framer-motion";

const Background = (props) => {
  const [imageUrls, setImageUrls] = useState({});
  const getRandom = () => {
    api
      .randomImage()
      .then((fetched) => {
        setImageUrls(fetched.data.urls);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //const searchImageByQuery = () => {
  //api
  //.searchImage()
  //.then((fetched) => {
  //setImageUrls(fetched.data.urls);
  //})
  //.catch((err) => {
  //console.log(err);
  //});
  //};
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
      x: "30vw",
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
      className="absolute"
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
            className="w-5 h-5"
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
        <h1 className="font-bold">Select Background</h1>
      </div>
      <button onClick={getRandom}>random</button>
      <div
        className="bg-cover w-28 h-28"
        style={{
          backgroundImage: `url(${imageUrls.thumb})`,
        }}
      ></div>
    </motion.div>
  );
};

export default Background;
