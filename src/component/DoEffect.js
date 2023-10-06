import React, { useEffect, useState } from "react";
import "./DoEffect.css";
import Loading from "./Loading";
// Import Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.min.css";
import DoEffect2 from "../DoEffect2";

const DoEffect = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUsers = async function () {
      try {
        const response = await fetch("https://api.github.com/users");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const userData = await response.json();
        setUsers(userData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    console.log();
    getUsers();
  }, []);

  console.log("Component is rendering");
  if (isLoading) {
    return <Loading />; // Render the Loading component if isLoading is true
  }

  // Rest of your code here

  return (
    //using props as the a={a}
    <div>
      <DoEffect2 users={users} />
    </div>
  );
};

export default DoEffect;
