import React from "react";
import TagList from "./TagList";
import Background from "./Background.jsx";

const SecondPage = ({ selectedPage, setSelectedPage }) => {
  if (selectedPage === "Taglist") {
    return <TagList key={"taglist"} setSelectedPage={setSelectedPage} />;
  } else if (selectedPage === "Background") {
    return <Background key={"background"} setSelectedPage={setSelectedPage} />;
  }
};

export default SecondPage;
