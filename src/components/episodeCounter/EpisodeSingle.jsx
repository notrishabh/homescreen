import React, { useState, useRef } from "react";
import "../../style/index.css";
import api from "../../api/episode.js";

const EpisodeSingle = (props) => {
  const [updateData, setUpdateData] = useState(props.data);
  const [episodeNumber, setEpisodeNumber] = useState(props.episodeNumber);
  const handleDelete = () => {
    api
      .deleteEpisode(props.id)
      .then(() => {
        props.getFunc(props.user._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const inputRef = useRef(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    inputRef.current.blur(); //REMOVE FOCUS FROM INPUT FIELD AFTER SUBMIT
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
        props.getFunc(props.user._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addEpisode = async () => {
    setEpisodeNumber(episodeNumber + 1);
    let xd = {
      data: updateData,
      episodeNumber: episodeNumber + 1,
    };
    await api.updateEpisode(props.id, xd).then(() => {
      props.getFunc(props.user._id);
    });
  };
  const subEpisode = async () => {
    if (episodeNumber <= 0) {
      setEpisodeNumber(1);
      return;
    } else {
      setEpisodeNumber(episodeNumber - 1);
    }
    let xd = {
      data: updateData,
      episodeNumber: episodeNumber - 1,
    };
    await api.updateEpisode(props.id, xd).then(() => {
      props.getFunc(props.user._id);
    });
  };
  const handleChange = (e) => {
    setUpdateData(e.target.value);
  };

  return (
    <div className="my-4" key={props.id}>
      <form className="inline" onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          value={updateData}
          className="font-heading focus:ring focus:ring-gray-300 focus:ring-offset-4 focus:outline-none rounded-md focus:p-3"
          onChange={handleChange}
        />
      </form>
      <button
        className="inline float-left mx-2 bg-red-500 bg-opacity-0 rounded-2xl hover:bg-opacity-50 "
        onClick={handleDelete}
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>

      <button
        className="inline float-right mx-2 bg-green-300 bg-opacity-0 rounded-2xl hover:bg-opacity-50 "
        onClick={addEpisode}
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
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>

      <h1 className="inline float-right">{episodeNumber}</h1>
      <button
        className="inline float-right mx-2 bg-red-300 bg-opacity-0 rounded-2xl hover:bg-opacity-50 "
        onClick={subEpisode}
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
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};
export default EpisodeSingle;
