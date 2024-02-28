import React, { useState } from "react";
import NavBar from "../../navBar/NavBar";
import HobbyCard from "./HobbyCard";
import Hobbies from "./Hobbies";
import "./hobby_style.css";
import ModalHobbySearch from "./ModalHobbySearch";
import HobbyNav from "../../components/HobbyNav";
import {getFriendsForHobby} from "./MockData";

const HobbiesPage = () => {
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [hobbyFriends, setHobbyFriends] = useState([]);
  const [selectedNav, setSelectedNav] = useState("friends"); 


  const handleAddHobby = (hobby) => {
    if (!selectedHobbies.includes(hobby)) {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
    setShowModal(false);
  };


  const sortedHobbies = selectedHobbies.slice().sort((a, b) => a.name.localeCompare(b.name));

  const openHobbyPage = (hobby) => {
    setSelectedHobby(hobby);
    setHobbyFriends(getFriendsForHobby(hobby)); 
  };
  

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
            <HobbyCard key={hobby.id} hobby={hobby} onClick={openHobbyPage} />
          ))}
        </div>
        <div className="hobby-info">
          {selectedHobby ? (
            <div className="HobbyFriends">
            <HobbyNav selectedNav={selectedNav} setSelectedNav={setSelectedNav} hobbyFriends={hobbyFriends} />
              <h3>{selectedHobby.name}</h3>
              {selectedNav === "friends" && (
        <div className="friendsList">
          {hobbyFriends.map((friend) => (
            <div key={friend.id}>{friend.name}</div>
          ))}
        </div>
      )}
            </div>
          ) : (
            <p>Select a hobby to view details</p>
          )}
        </div>
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
