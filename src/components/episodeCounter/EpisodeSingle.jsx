import React, { useState } from "react";
import "../../style/index.css";
import api from "../../api/episode.js";

const EpisodeSingle = (props) => {
  const [updateData, setUpdateData] = useState(props.data);
  const [episodeNumber, setEpisodeNumber] = useState(props.episodeNumber);
  const handleDelete = () => {
    api
      .deleteEpisode(props.id)
      .then(() => {
        props.getFunc();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = async () => {
    const updateToDb = {
      data: updateData,
      episodeNumber: episodeNumber,
    };
    if (updateData === "") {
      updateToDb.data = " ";
    }
    if (!episodeNumber) {
      updateToDb.episodeNumber = 0;
    }
    await api
      .updateEpisode(props.id, updateToDb)
      .then(() => {
        props.getFunc();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEpisodeNumber = async (op) => {
    op === "+"
      ? setEpisodeNumber(episodeNumber + 1)
      : setEpisodeNumber(episodeNumber - 1);
    console.log(episodeNumber);
    const updateToDb = {
      data: updateData,
      episodeNumber: episodeNumber,
    };
    if (updateData === "") {
      updateToDb.data = " ";
    }
    if (!episodeNumber || episodeNumber < 0) {
      updateToDb.episodeNumber = 0;
    }
    await api
      .updateEpisode(props.id, updateToDb)
      .then(() => {
        props.getFunc();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setUpdateData(e.target.value);
  };

  return (
    <div className="m-3">
      <h1>{props.episodeNumber}</h1>
      <form className="inline-block" onSubmit={handleSubmit}>
        <input
          value={updateData}
          className="overflow-hidden font-heading focus:ring focus:ring-gray-300 focus:ring-offset-4 focus:outline-none rounded-md focus:p-3"
          onChange={handleChange}
        />
      </form>
      <button
        className="inline-block float-right p-1 mx-2 bg-green-300 bg-opacity-0 rounded-2xl hover:bg-opacity-50 "
        onClick={handleDelete}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <button
        className="inline-block float-right p-1 mx-2 bg-green-300 bg-opacity-0 rounded-2xl hover:bg-opacity-50 "
        onClick={() => handleEpisodeNumber("+")}
      >
        +
      </button>
    </div>
  );
};
export default EpisodeSingle;
