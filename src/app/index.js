import React from "react";
import Todo from "../components/todo/Todo";
import EpisodeCounter from "../components/episodeCounter/EpisodeCounter";
import "../style/index.css";

const App = () => {
  return (
    <div className="h-screen bg-lol bg-cover p-5 overflow-hidden">
      <h1>Home page</h1>
      <Todo />
      <EpisodeCounter />
    </div>
  );
};
export default App;
