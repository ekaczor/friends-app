import React from "react";
import NavBar from "../../navBar/NavBar";
import HobbyCard from "./HobbyCard";
import mockHobbies from "./MockHobbies";

const HobbiesPage = ({hobbies}) => {
  return (
    <div className="home-body">
      <header>
        <NavBar />
      </header>
      <div className="Hobby-page">
      <div className="my-hobbies">
      My Hobbies
      <div>
        {mockHobbies.map((hobby) => (
          <HobbyCard key={hobby.id} hobby={hobby}/>
        ))}
      </div>
      </div>
      <div className="hobby-info">
        Hobby info
      </div>
      </div>
    </div>
  );
};

export default HobbiesPage;
