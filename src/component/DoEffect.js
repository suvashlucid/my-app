// import React, { useState, useEffect } from "react";

// const DoEffect = () => {
//   const [userData, setUserData] = useState({
//     name: "User Name",
//     username: "username",
//     followers: 0,
//     repositories: 0,
//     ratings: 0,
//   });

//   useEffect(() => {
//     // Fetch user data from the GitHub API or another data source
//     // Update the userData state with the fetched data
//     // For demonstration, we'll use placeholder data here
//     const fetchData = async () => {
//       // Simulate fetching data
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       setUserData({
//         name: "John Doe",
//         username: "johndoe",
//         followers: 1000,
//         repositories: 50,
//         ratings: 4.5,
//       });
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <div className="card">
//         <div className="card-body">
//           <div className="row">
//             <div className="col-md-4">
//               <img
//                 src="https://via.placeholder.com/150"
//                 alt="User Avatar"
//                 className="img-fluid rounded-circle"
//               />
//             </div>
//             <div className="col-md-8">
//               <h3 className="card-title">{userData.name}</h3>
//               <p className="card-text">GitHub Username: @{userData.username}</p>
//               <p className="card-text">Followers: {userData.followers}</p>
//               <p className="card-text">Repositories: {userData.repositories}</p>
//               <p className="card-text">Ratings: {userData.ratings}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoEffect;
// import React, { useEffect, useState } from "react";

// const DoEffect = () => {
//   const [users, setUsers] = useState([]);

//   const getUsers = async function () {
//     const aa = await fetch("https://api.github.com/users");
//     setUsers(await aa.json());
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   return <div></div>;
// };

// export default DoEffect;

// import React, { useEffect, useState } from "react";

// const DoEffect = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const response = await fetch("https://api.github.com/users");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const userData = await response.json();
//         setUsers(userData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     getUsers();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <div className="row">

//         {users.map((user) => (
//           <div className="col-md-4 mb-4" key={user.id}>
//             <div className="card">
//               <img
//                 src={user.avatar_url}
//                 alt={`${user.login}'s Avatar`}
//                 className="card-img-top"
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{user.login}</h5>
//                 <p className="card-text">Followers: {user.followers}</p>
//                 <p className="card-text">Repositories: {user.public_repos}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DoEffect;
