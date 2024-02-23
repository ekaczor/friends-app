import React from "react";

const HobbyCard = ({hobby, onClick}) => {

    //Insert an api with a list of hobbies for practice. You can hard code them first.
    return (
        <div className="hobby-card" onClick={() => onClick(hobby)}>
        <h3>{hobby.name}</h3>
        </div>
    );
};

export default HobbyCard;