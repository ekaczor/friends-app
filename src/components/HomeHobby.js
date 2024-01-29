import React from 'react';
import HobbiesImage from '../assets/Hobbies.jpg';

const HomeHobby = () => {
  return (
    <button className="home-hobby">
      <h4>Hobbies</h4>
      <img src={HobbiesImage} alt="Hobbies Link" className="hobby-image"/>
    </button>
  );
};

export default HomeHobby;
