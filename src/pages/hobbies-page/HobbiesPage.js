import React, { useState } from "react";
import NavBar from "../../navBar/NavBar";
import HobbyCard from "./HobbyCard";
import mockHobbies from "./MockHobbies";
import "./hobby_style.css";
import ModalHobbySearch from "./ModalHobbySearch";

const HobbiesPage = () => {
  const [hobbies, setHobbies] = useState(mockHobbies);
  const [showModal, setShowModal] = useState(false);

  const addNewHobby = (selectedHobby) => {
    setHobbies([...hobbies, selectedHobby]);
    setShowModal(false); // Close the modal after adding a new hobby
  };

  const sortedHobbies = hobbies.slice().sort((a, b) => a.name.localeCompare(b.name));

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
          <button className= "exit" onClick={() => setShowModal(false)}>&times;</button>
          <ModalHobbySearch/>
            <div className="modal-content">
              <ul>
                {mockHobbies.map((hobby) => (
                  <div className="choice" key={hobby.id} onClick={() => addNewHobby(hobby)}>
                    {hobby.name}
                  </div>
                ))}
              </ul>
            </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HobbiesPage;
