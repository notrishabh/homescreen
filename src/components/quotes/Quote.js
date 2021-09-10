import React, { useEffect, useState } from "react";
import "../../style/index.css";
import api from "../../api/quote.js";

const Quote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const getRandom = () => {
    api
      .randomQuote()
      .then((fetched) => {
        console.log(fetched);
        setQuote(fetched.data.content);
        setAuthor(fetched.data.author);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRandom();
  }, []);
  return (
    <div>
      <h1>{quote}</h1>
      <h1>{author}</h1>
    </div>
  );
};

export default Quote;
