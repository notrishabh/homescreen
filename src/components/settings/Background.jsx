import React, { useState } from "react";
import api from "../../api/unsplash.js";
import { motion } from "framer-motion";

const Background = (props) => {
  const [imageUrls, setImageUrls] = useState({});
  const [imagesSearched, setImagesSearched] = useState();

  //handle search form
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    searchImageByQuery();
  };
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

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
  const searchImageByQuery = () => {
    api
      .searchImage(searchValue)
      .then((fetched) => {
        setImagesSearched(fetched.data.results);
        console.log(fetched.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
  const inputRef = React.useRef(null); //Form input focus ref
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
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
      {
        //<button onClick={getRandom}>random</button>
        //<div
        //className="bg-cover w-28 h-28"
        //style={{
        //backgroundImage: `url(${imageUrls.thumb})`,
        //}}
        //></div>
      }
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={searchValue}
          onChange={handleChange}
        />
        <button type="submit">search</button>
      </form>
      <div className="  grid grid-flow-col grid-rows-2 gap-5 mt-4 mx-4">
        {imagesSearched
          ? imagesSearched.map((image) => (
              <div
                className="bg-cover w-28 h-28"
                style={{
                  backgroundImage: `url(${image.urls.thumb})`,
                }}
              ></div>
            ))
          : ""}
      </div>
    </motion.div>
  );
};

export default Background;
