import React, { useState } from "react";

const Top = () => {
  const detailing = [
    {
      id: 2,
      Name: "Suvash",
      age: 34,
    },
    {
      id: 6,
      Name: "Bishnu",
      age: 34,
    },
    {
      id: 8,
      Name: "ND",
      age: 34,
    },
  ];

  const [playerDetails, setPlayerDetails] = useState(detailing);

  const handleButtonClick = () => {
    // Clear the playerDetails array by setting it to an empty array
    setPlayerDetails([]);
  };
  const anotherr = (Name) => {
    // alert(Name);
    const playe = playerDetails.filter((player) => {
      return player.Name !== Name;
    });
    setPlayerDetails(playe);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click me</button>

      {playerDetails.map((player) => (
        <div key={player.id}>
          <p>Name: {player.Name}</p>
          <p>Age: {player.age}</p>
          <button className="btninside" onClick={() => anotherr(player.Name)}>
            remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Top;
