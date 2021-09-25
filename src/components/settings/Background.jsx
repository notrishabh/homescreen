import React, { useState } from "react";
import api from "../../api/unsplash.js";
import { motion } from "framer-motion";
import settingsapi from "../../api/settingsbg.js";

const Background = (props) => {
  //const [imageUrls, setImageUrls] = useState({});
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

  //const getRandom = () => {
  //api
  //.randomImage()
  //.then((fetched) => {
  //setImageUrls(fetched.data.urls);
  //})
  //.catch((err) => {
  //console.log(err);
  //});
  //};
  const searchImageByQuery = () => {
    api
      .searchImage(searchValue)
      .then((fetched) => {
        setImagesSearched(fetched.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChangeBg = (image) => {
    let fullURL = image.urls.full ? image.urls.full : image.urls.raw;
    const addSettingsToDb = {
      user: props.user._id,
      url: fullURL,
    };
    settingsapi.updateBG(addSettingsToDb).then(() => {
      props.setBackgroundURL(fullURL);
    });
  };
  const slideAnimation = {
    initial: {
      scale: 0.5,
      opacity: 0,
      position: "absolute",
    },
    visible: {
      scale: 1,
      opacity: 1,
      position: "relative",
    },
    exit: {
      scale: 0,
      opacity: 0,
      position: "absolute",
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
      <div className="flex align-center">
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={searchValue}
            onChange={handleChange}
            className="px-1 mx-5 rounded ring focus:outline-none focus:border-blue-300 font-heading"
          />
          <button type="submit" className="p-1 rounded-xl hover:bg-gray-100 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>
      <div className="flex flex-wrap my-3 align-center justify-between">
        {imagesSearched
          ? imagesSearched.map((image) => (
              <button
                key={image.id}
                className="bg-cover w-28 h-28 rounded-lg my-2 mx-3"
                style={{
                  backgroundImage: `url(${image.urls.thumb})`,
                }}
                onClick={() => handleChangeBg(image)}
              ></button>
            ))
          : ""}
      </div>
    </motion.div>
  );
};

export default Background;
