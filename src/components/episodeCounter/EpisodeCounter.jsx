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
      bounds="parent"
      onStop={handleStop}
      nodeRef={nodeRef}
      defaultPosition={{ x: episodePos.x, y: episodePos.y }}
    >
      <div className="max-w-sm mt-4 bg-white rounded-2xl" ref={nodeRef}>
        <div className="handle">
          <h3 className="inline-block mt-2 ml-4 text-lg font-semibold font-heading">
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
                className="inline-block w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>{" "}
              <p className="inline-block ml-3">Done For The Day</p>
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
