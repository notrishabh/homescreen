import React, { useState } from "react";
import api from "../../api/unsplash.js";

const Background = () => {
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
  const searchImageByQuery = () => {
    api
      .searchImage()
      .then((fetched) => {
        setImageUrls(fetched.data.urls);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Change Background</h1>
      <button onClick={getRandom}>random</button>
      <div
        className="bg-cover w-28 h-28"
        style={{
          backgroundImage: `url(${imageUrls.thumb})`,
        }}
      ></div>
    </div>
  );
};

export default Background;
