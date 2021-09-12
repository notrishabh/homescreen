import React from "react";
import Todo from "../components/todo/Todo";
import EpisodeCounter from "../components/episodeCounter/EpisodeCounter";
import Quote from "../components/quotes/Quote";
import "../style/index.css";

const App = () => {
  return (
    <div className="h-screen bg-lol bg-cover p-5 overflow-hidden">
      <Quote />
      <Todo />
      <EpisodeCounter />
    </div>
  );
};
export default App;
