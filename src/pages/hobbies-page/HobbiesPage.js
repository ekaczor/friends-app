import React, { useState } from "react";
import NavBar from "../../navBar/NavBar";
import HobbyCard from "./HobbyCard";
import Hobbies from "./Hobbies";
import "./hobby_style.css";
import ModalHobbySearch from "./ModalHobbySearch";

const HobbiesPage = () => {
  const [hobbies, setHobbies] = useState(Hobbies);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const addNewHobby = (selectedHobby) => {
    setHobbies([...hobbies, selectedHobby]);
    setShowModal(false);
    setSearchQuery("");
  };

  const sortedHobbies = hobbies.slice().sort((a, b) => a.name.localeCompare(b.name));

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredHobbies = hobbies.filter((hobby) =>
    hobby.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="hobby-body">
      <header>
        <NavBar />
      </header>
      <div className="Hobby-page">
        <div className="my-hobbies">
          <h3 className="hobby-title">My Hobbies</h3>
          <button className="AddHobby" onClick={() => setShowModal(true)}>
            Add new
          </button>
          {sortedHobbies.map((hobby) => (
            <HobbyCard key={hobby.id} hobby={hobby} />
          ))}
        </div>
        <div className="hobby-info">Hobby info</div>
        {showModal && (
          <div>
            <div className="modal">
              <button className="exit" onClick={() => {setShowModal(false); setSearchQuery("")}}>
                &times;
              </button>
              <ModalHobbySearch onSearch={handleSearch} />
              <div className="modal-content">
                {filteredHobbies.map((hobby) => (
                  <div className="choice" key={hobby.id} onClick={() => addNewHobby(hobby)}>
                    {hobby.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HobbiesPage;
