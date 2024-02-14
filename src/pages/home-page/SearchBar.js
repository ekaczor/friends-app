import React, { useState } from "react";
import './searchbar.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div>
    <h2 className="title">Search Hobbies</h2>
    <form onSubmit={handleSubmit} className="wholeSearch">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="searchBody"
      />
      <button type="submit" className="searchButton">Search</button>
    </form>
    </div>
  );
}

export default SearchBar;
