import React, { useEffect, useState } from "react";
import "../../style/index.css";
import api from "../../api/quote.js";
import Draggable from "react-draggable";

const Quote = () => {
  const [quote, setQuote] = useState(""); //Changing Quote line
  const [fontAccToTag, setFontAccToTag] = useState(""); //Changing font family in render
  const [tag, setTag] = useState([]); //Quote tag array fetched from api
  const [selectedTags] = useState(
    JSON.parse(localStorage.getItem("selectedTags"))
  );

  const quoteX = localStorage.quoteX ? JSON.parse(localStorage.quoteX) : 0;
  const quoteY = localStorage.quoteY ? JSON.parse(localStorage.quoteY) : 0;
  const [quotePos] = useState({ x: quoteX, y: quoteY });

  const getRandom = () => {
    api
      .randomQuote()
      .then((fetched) => {
        setTag(fetched.data.tags); //For Quote Tag array
        setQuote(fetched.data.content); //For Actual Quote Line
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getFromTags = () => {
    api
      .randomQuote()
      .then((fetched) => {
        setTag(fetched.data.tags); //For Quote Tag array
        setQuote(fetched.data.content); //For Actual Quote Line
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getRandom();
  }, []);
  useEffect(() => {
    const changeFontAccToTag = () => {
      if (tag.includes("technology")) {
        setFontAccToTag("technology");
      } else if (tag.includes("education")) {
        setFontAccToTag("education");
      } else if (tag.includes("friendship")) {
        setFontAccToTag("friendship");
      } else if (tag.includes("inspirational")) {
        setFontAccToTag("inspirational");
      } else if (tag.includes("business")) {
        setFontAccToTag("business");
      } else if (tag.includes("religion")) {
        setFontAccToTag("religion");
      } else if (tag.includes("future")) {
        setFontAccToTag("future");
      } else if (tag.includes("love")) {
        setFontAccToTag("love");
      } else if (tag.includes("life")) {
        setFontAccToTag("life");
      } else if (tag.includes("success")) {
        setFontAccToTag("success");
      } else if (tag.includes("happiness")) {
        setFontAccToTag("happiness");
      } else if (tag.includes("famous-quotes")) {
        setFontAccToTag("famous-quotes");
      } else {
        setFontAccToTag("");
      }
    };
    changeFontAccToTag();
  }, [tag]);
  const handleStop = (e, ui) => {
    localStorage.setItem("quoteX", ui.x);
    localStorage.setItem("quoteY", ui.y);
  };
  const nodeRef = React.useRef(null); //For warning in Draggable for FindDOMNode
  return (
    <Draggable
      bounds="parent"
      onStop={handleStop}
      nodeRef={nodeRef}
      defaultPosition={{ x: quotePos.x, y: quotePos.y }}
    >
      <div className="grid place-items-center" ref={nodeRef}>
        <div>
          <p className="inline text-4xl ">" </p>
          <h1 className={`inline text-2xl font-${fontAccToTag} `}>{quote}</h1>
          <p className="inline text-4xl "> "</p>
        </div>
      </div>
    </Draggable>
  );
};

export default Quote;
