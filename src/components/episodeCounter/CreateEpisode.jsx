import React, { useState } from "react";
import "../../style/index.css";
import api from "../../api/episode.js";

const CreateEpisode = (props) => {
  const [stateData, setStateData] = useState("");

  //Input Data field
  const handleDataChange = (e) => {
    setStateData(e.target.value);
  };

  //Button for submitting
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const addTodoToDB = {
      data: stateData,
    };
    api.insertTodo(addTodoToDB).then(() => {
      props.getFunc();
      props.toggleForm(false);
    });
  };
  return (
    <div className="">
      <form onSubmit={handleSubmitForm}>
        <input
          autoFocus
          value={stateData}
          onChange={handleDataChange}
          className="px-3 py-1 ring inline-block focus:outline-none focus:border-blue-300 rounded"
        />
        <button
          type="submit"
          className="inline-block float-right mr-3 hover:bg-blue-200 rounded-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 11l5-5m0 0l5 5m-5-5v12"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default CreateEpisode;
