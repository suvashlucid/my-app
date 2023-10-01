import React, { useState } from 'react';

const Checking = () => {
  const [roomMembers, setRoomMembers] = useState([
    {
      number: 9862417880,
      Name: "Suvash",
      age: 23,
    },
    {
      number: 9846649004,
      Name: "Mani",
      age: 31,
    },
    {
      number: 9846863445,
      Name: "Bishnu",
      age: 18,
    },
  ]);

  const clearMembers = () => {
    setRoomMembers([]);
  };

  return (
    <>
      {roomMembers.map((curElm,index) => (
        <h1 key={index} className='h1style'>
          keey:{index} number: {curElm.number} & age: {curElm.age}
        </h1>
      ))}
      <button className="btn" onClick={clearMembers}>Click to Clear</button>
    </>
  );
};

export default Checking;
