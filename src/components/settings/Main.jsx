import React from "react";
import Glogout from "../glogin/Glogout.jsx";

const Main = (props) => {
  return (
    <div>
      <div className="flex flex-col m-3 mb-4 align-center">
        <div className="flex justify-start align-center mb-3">
          <p className="p-1 font-bold">Set tags for Quotes</p>
          <button
            onClick={() => props.setOpenTagList(true)}
            className="p-1 rounded-xl hover:bg-gray-100 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-start align-center mb-3">
          <p className="p-1 font-bold">Change Background</p>
          <button
            onClick={() => props.setOpenBackground(true)}
            className="p-1 rounded-xl hover:bg-gray-100 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4 bottom-0 right-0 absolute">
        <Glogout setShowLogin={props.setShowLogin} />
      </div>
    </div>
  );
};

export default Main;
