import React, { useState } from "react";
import NavBar from "../../navBar/NavBar";
import HobbyCard from "./HobbyCard";
import Hobbies from "./Hobbies";
import "./hobby_style.css";
import ModalHobbySearch from "./ModalHobbySearch";

const HobbiesPage = () => {
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddHobby = (hobby) => {
    if (!selectedHobbies.includes(hobby)) {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
    setShowModal(false);
  };

  const sortedHobbies = selectedHobbies.slice().sort((a, b) => a.name.localeCompare(b.name));

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
          <ModalHobbySearch
            onAddHobby={handleAddHobby}
            selectedHobbies={selectedHobbies}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default HobbiesPage;
