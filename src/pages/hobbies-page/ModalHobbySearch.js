import React, { useState } from "react";
import "./modalsearchbar.css";
import Hobbies from "./Hobbies"; // Assuming Hobbies is the array of all hobbies

const ModalHobbySearch = ({ onAddHobby, selectedHobbies, onClose }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query && !selectedHobbies.includes(query)) {
      onAddHobby(query);
    }
    setQuery("");
  };

  const filteredHobbies = Hobbies.filter(
    (hobby) =>
      !selectedHobbies.includes(hobby) &&
      hobby.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="modal">
        <button className="exit" onClick={onClose}>
          &times;
        </button>
        <form onSubmit={handleSubmit} className="wholeSearch">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search..."
            className="searchBody"
          />
          <button type="submit" className="searchButton">
            Search
          </button>
        </form>
        <div className="modal-content">
          {/* Display filtered hobbies */}
          {filteredHobbies.map((hobby) => (
            <div className="choice" key={hobby.id} onClick={() => onAddHobby(hobby)}>
              {hobby.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModalHobbySearch;
