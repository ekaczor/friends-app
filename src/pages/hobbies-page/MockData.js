const getFriendsForHobby = (hobby) => {
    const friends = [
        { id: 1, name: "Alice", hobbies: ["Painting", "Cycling"] },
        { id: 2, name: "Bob", hobbies: ["Cycling", "Running"] },
        { id: 3, name: "Charlie", hobbies: ["Painting", "Reading"] },
        { id: 4, name: "David", hobbies: ["Cooking", "Swimming"] },
        { id: 5, name: "Eva", hobbies: ["Hiking", "Dancing"] },
        { id: 6, name: "Frank", hobbies: ["Singing", "Fishing"] },
        { id: 7, name: "Grace", hobbies: ["Gardening", "Photography"] },
        { id: 8, name: "Helen", hobbies: ["Painting", "Running"] },
        { id: 9, name: "Ian", hobbies: ["Cycling", "Cooking"] },
        { id: 10, name: "Julia", hobbies: ["Swimming", "Hiking"] },
        { id: 11, name: "Kevin", hobbies: ["Dancing", "Singing"] },
        { id: 12, name: "Lily", hobbies: ["Fishing", "Gardening"] },
        { id: 13, name: "Mike", hobbies: ["Photography", "Painting"] },
        { id: 14, name: "Nina", hobbies: ["Running", "Cycling"] },
        { id: 15, name: "Oscar", hobbies: ["Cooking", "Swimming"] },
        { id: 16, name: "Patty", hobbies: ["Hiking", "Dancing"] },
        { id: 17, name: "Quinn", hobbies: ["Singing", "Fishing"] },
        { id: 18, name: "Rachel", hobbies: ["Gardening", "Photography"] },
        { id: 19, name: "Steve", hobbies: ["Painting", "Running"] },
        { id: 20, name: "Tina", hobbies: ["Cycling", "Cooking"] },
    ];
  
    return friends.filter((friend) => friend.hobbies.includes(hobby.name));
  };

  
  export {getFriendsForHobby};