import React from "react";
import Glogin from "../components/glogin/Glogin";

const Homescreen = (props) => {
  return (
    <div className="flex flex-row items-center justify-around h-full bg-red-500 bg-opacity-0">
      <h1 className="absolute text-6xl top-20 font-homescreen">
        Home Sweet Home
      </h1>
      <div className="text-xl font-heading  max-w-xl p-4">
        <h1 className="m-4">
          This is a highly customizable homescreen, which can make YOU feel at
          home whenever you open your browser.
        </h1>
        <h1 className="m-4">
          At these times, Internet can be a scary place to be. So lets make it a
          little bit less scarier by staying at "Home".
        </h1>
      </div>
      <div className="max-w-lg mr-5 font-heading">
        <h1 className="mb-4 text-xl">Enter your Home by logging in</h1>
        <Glogin setShowLogin={props.setShowLogin} setUser={props.setUser} />
      </div>
    </div>
  );
};

export default Homescreen;
