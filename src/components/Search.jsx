import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      setSearchTerm(text);
    }
  };

  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();
  };

  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="type favorite meal"
          onChange={handleChange}
          value={text}
        />
        <button className="btn" type="submit">
          Search
        </button>
        <button
          onClick={handleRandomMeal}
          className="btn btn-hipster"
          type="button"
        >
          Suprise Me!
        </button>
      </form>
    </header>
  );
};

export default Search;
