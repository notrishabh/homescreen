import React, { useState, useEffect } from "react";
import "../../style/index.css";
import EpisodeSingle from "./EpisodeSingle";
import CreateEpisode from "./CreateEpisode";
import Draggable from "react-draggable";
import api from "../../api/episode.js";

const EpisodeCounter = () => {
  const [episodeData, setepisodeData] = useState([{}]);
  const [addEpisodeBtn, setAddEpisodeBtn] = useState(false);
  const episodeX = localStorage.episodeX
    ? JSON.parse(localStorage.episodeX)
    : 0;
  const episodeY = localStorage.episodeY
    ? JSON.parse(localStorage.episodeY)
    : 0;
  const [episodePos] = useState({ x: episodeX, y: episodeY });

  const getAllEpisodesFunc = async () => {
    await api
      .getAllEpisodes()
      .then((episode) => {
        setepisodeData(episode.data.allGet);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getAllEpisodesFunc();
  }, []);

  const handleStop = (e, ui) => {
    localStorage.setItem("episodeX", ui.x);
    localStorage.setItem("episodeY", ui.y);
  };
  const nodeRef = React.useRef(null); //For warning in Draggable for FindDOMNode

  return (
    <Draggable
      handle=".handle"
      bounds="body"
      onStop={handleStop}
      nodeRef={nodeRef}
      defaultPosition={{ x: episodePos.x, y: episodePos.y }}
    >
      <div className="max-w-sm mt-4 bg-white rounded-2xl" ref={nodeRef}>
        <div className="handle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block mx-4 text-red-500"
            fill="red"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <h3 className="inline-block mt-2  text-lg font-semibold font-heading">
            Watch List
          </h3>
          <button
            onClick={() => setAddEpisodeBtn(!addEpisodeBtn)}
            className="inline-block float-right p-1 mt-2 mr-5 font-bold bg-blue-500 rounded-2xl bg-opacity-0 hover:bg-opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="p-3">
          {episodeData ? (
            episodeData.map((episode) => (
              <EpisodeSingle
                key={episode._id}
                data={episode.data}
                id={episode._id}
                episodeNumber={episode.episodeNumber}
                getFunc={getAllEpisodesFunc}
              />
            ))
          ) : (
            <div className="m-3 ml-6 text-xl font-heading">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
              <p className="inline ml-3 text-base">Watched Everything !</p>
            </div>
          )}
          {addEpisodeBtn ? (
            <div className="p-3">
              <CreateEpisode
                getFunc={getAllEpisodesFunc}
                toggleForm={setAddEpisodeBtn}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </Draggable>
  );
};
export default EpisodeCounter;
