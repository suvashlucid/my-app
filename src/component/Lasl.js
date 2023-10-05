import React, { useEffect } from "react";

const Lasl = () => {
  const getUsers = async function () {
    const aa = await fetch("https://api.github.com/users");
    console.log(aa);
  };

  useEffect(() => {
    getUsers();
  });

  return <div></div>;
};

export default Lasl;
