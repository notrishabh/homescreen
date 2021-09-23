import React, { useState } from "react";
import Todo from "../components/todo/Todo";
import EpisodeCounter from "../components/episodeCounter/EpisodeCounter";
import Quote from "../components/quotes/Quote";
import DigitalClock from "../components/clock/DigitalClock";
import Settings from "../components/settings/Settings";
import Homescreen from "./homescreen";
import Greet from "../components/greet/Greet";
import "../style/index.css";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [openSettings, setOpenSettings] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState({});

  const handleSettings = () => {
    setOpenSettings(!openSettings);
  };
  return (
    <div className={"h-screen p-5 overflow-hidden bg-cover bg-homepage "}>
      {showLogin ? (
        <Homescreen setShowLogin={setShowLogin} setUser={setUser} />
      ) : (
        <div>
          <div>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="float-right p-1 bg-blue-400 bg-opacity-0 rounded-2xl "
              onClick={handleSettings}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </motion.button>
          </div>
          <AnimatePresence initial={false} exitBeforeEnter={true}>
            {openSettings ? (
              <Settings
                setOpenSettings={setOpenSettings}
                setShowLogin={setShowLogin}
              />
            ) : (
              ""
            )}
          </AnimatePresence>
          <DigitalClock />
          <Greet user={user} />
          <Quote />
          <Todo user={user} />
          <EpisodeCounter user={user} />
        </div>
      )}
    </div>
  );
};
export default App;
