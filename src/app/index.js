import React from "react";
import Todo from "../components/Todo";
import "../style/index.css";

const App = () => {
  return (
    <div className="h-screen bg-lol bg-cover p-5">
      <h1>Home page</h1>
      <Todo />
    </div>
  );
};
export default App;
