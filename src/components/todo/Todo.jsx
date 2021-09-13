import React, { useState, useEffect } from "react";
import "../../style/index.css";
import TodoSingle from "./TodoSingle";
import CreateTodo from "./CreateTodo";
import Draggable from "react-draggable";
import api from "../../api/todo.js";

const Todo = () => {
  const [todoData, setTodoData] = useState([{}]);
  const [addTodoBtn, setAddTodoBtn] = useState(false);
  const todoX = localStorage.todoX ? JSON.parse(localStorage.todoX) : 0;
  const todoY = localStorage.todoY ? JSON.parse(localStorage.todoY) : 0;
  const [todoPos] = useState({ x: todoX, y: todoY });

  const getAllTodosFunc = async () => {
    await api
      .getAllTodos()
      .then((todo) => {
        setTodoData(todo.data.allGet);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getAllTodosFunc();
  }, []);

  const handleStop = (e, ui) => {
    localStorage.setItem("todoX", ui.x);
    localStorage.setItem("todoY", ui.y);
  };
  const nodeRef = React.useRef(null); //For warning in Draggable for FindDOMNode

  return (
    <Draggable
      handle=".handle"
      bounds="parent"
      onStop={handleStop}
      nodeRef={nodeRef}
      defaultPosition={{ x: todoPos.x, y: todoPos.y }}
    >
      <div className="max-w-sm mt-4 bg-white rounded-2xl" ref={nodeRef}>
        <div className="handle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block mx-4 text-purple-500 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
          <h3 className="inline-block mt-2 text-lg font-semibold font-heading">
            Todo List
          </h3>
          <button
            onClick={() => setAddTodoBtn(!addTodoBtn)}
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
          {todoData ? (
            todoData.map((todo) => (
              <TodoSingle
                key={todo._id}
                data={todo.data}
                id={todo._id}
                isDone={todo.isDone}
                getFunc={getAllTodosFunc}
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
          {addTodoBtn ? (
            <div className="p-3">
              <CreateTodo
                getFunc={getAllTodosFunc}
                toggleForm={setAddTodoBtn}
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
export default Todo;
