
import './App.css';
import React, { useState, useEffect } from "react";


const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div id="quote-box" style={{ textAlign: "center", marginTop: "20%" }}>
      <h1 id="text">"{quote}"</h1>
      <p id="author">- {author}</p>
      <div>
        <button id="new-quote" onClick={fetchQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote}" - ${author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
};

export default App;


