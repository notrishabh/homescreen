import React, { useState } from "react";
import "../../style/index.css";
import api from "../../api/todo.js";
import TextareaAutoSize from "react-autosize-textarea";

const TodoSingle = (props) => {
  const [updateData, setUpdateData] = useState(props.data);
  const handleDelete = () => {
    api
      .deleteTodo(props.id)
      .then(() => {
        props.getFunc(props.user._id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleBlur = async () => {
    const updateToDb = {
      data: updateData,
    };
    if (updateData === "") {
      updateToDb.data = " ";
    }
    await api
      .updateTodo(props.id, updateToDb)
      .then(() => {
        props.getFunc(props.user._id);
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
      <form className="inline-block">
        <TextareaAutoSize
          defaultValue={updateData}
          className="overflow-hidden font-heading focus:ring focus:ring-gray-300 focus:ring-offset-4 focus:outline-none rounded-md focus:p-3"
          onChange={handleChange}
          onBlur={handleBlur}
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
    </div>
  );
};
export default TodoSingle;
