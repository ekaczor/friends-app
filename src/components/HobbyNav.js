import React, { useState } from "react";
import  "./hobby_nav.css";

const HobbyNav = () => {
  const [selectedNav, setSelectedNav] = useState("friends");

  const handleNavClick = (navOption) => {
    setSelectedNav(navOption);
  };

  return (
    <nav className="wholeNav">
      <div className="navButton" onClick={() => handleNavClick("friends")}>Hobby Friends</div>
      <div className="navButton" onClick={() => handleNavClick("friendFeed")}>Friend Feed</div>
      <div className="navButton" onClick={() => handleNavClick("communityFeed")}>
        Community Feed
      </div>
    </nav>
  );
};

export default HobbyNav;
