// // import React, { useState } from "react";

// // const Top = () => {
// //   const detailing = [
// //     {
// //       id: 2,
// //       Name: "Suvash",
// //       age: 34,
// //     },
// //     {
// //       id: 6,
// //       Name: "Bishnu",
// //       age: 34,
// //     },
// //     {
// //       id: 8,
// //       Name: "ND",
// //       age: 34,
// //     },
// //   ];

// //   const [playerDetails, setPlayerDetails] = useState(detailing);

// //   const handleButtonClick = () => {
// //     // Clear the playerDetails array by setting it to an empty array
// //     setPlayerDetails([]);
// //   };
// //   const anotherr = (Name) => {
// //     // alert(Name);
// //     const playe = playerDetails.filter((player) => {
// //       return player.Name !== Name;
// //     });
// //     setPlayerDetails(playe);
// //   };

// //   return (
// //     <div>
// //       <button onClick={handleButtonClick}>Click me</button>

// //       {playerDetails.map((player) => (
// //         <div key={player.id}>
// //           <p>Name: {player.Name}</p>
// //           <p>Age: {player.age}</p>
// //           <button className="btninside" onClick={() => anotherr(player.Name)}>
// //             remove
// //           </button>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Top;
// // import React, { useState } from "react";

// // const Top = () => {
// //   useState();
// //   const [truee, settruee] = useState("hi");
// //   const [eventer1, setEventer1] = useState("hi");

// //   // Move the data definitions outside the handleClick function
// //   const data =
// //     '<p style="font-size:23px;color:red">this is sample for inner,outer and dangerous, if it is showing/n then is the dangerously set innerhtml</p>';
// //   const data2 = '<b style="font-size:23px;color:blue">this is my home</b>';
// //   const adata = document.createElement("div");
// //   adata.innerHTML = data;
// //   const realinnerdata = adata.innerHTML;
// //   const realouterdata = adata.outerHTML;

// //   const handleClick = (e) => {
// //     if (e.target.id === "eventer") {
// //       // Log the event target to the console
// //       console.log(e.target);

// //       // Set the eventer1 state to the event target as a string
// //     }
// //   };

// //   return (
// //     <div className="app">
// //       <div>{realinnerdata}</div>
// //       <div>{realouterdata}</div>
// //       <div dangerouslySetInnerHTML={{ __html: data }}></div>

// //       <p style={{ fontSize: "34px", color: "red" }}>
// //         this is how you write css inside jsx
// //       </p>
// //       <div id="eventer" onClick={handleClick}>
// //         Click here
// //         <h1 className="h1style">
// //           <>
// //             <h1>New</h1>
// //             <p>ShotCircuitEvaluation</p>
// //             <p>Value of eventer1:</p>
// //           </>
// //         </h1>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Top;

// // import React, { useState } from "react";

// // const Top = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [allentry, setAllEntry] = useState([]);
// //   const fruits = ["apple", "banana", "mango"];
// //   const idd = new Date().getTime().toString();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (username && password) {
// //       const newEntry = { id: idd, username, password };
// //       setAllEntry([...allentry, newEntry]);
// //       console.log("Form submitted");
// //       setUsername("");
// //       setPassword("");
// //     } else {
// //       alert("Please fill in both username and password");
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="username">Username:</label>
// //           <input
// //             type="text"
// //             id="username"
// //             name="username"
// //             autoComplete="off"
// //             required
// //             value={username}
// //             onChange={(e) => {
// //               setUsername(e.target.value);
// //             }}
// //           />
// //         </div>
// //         <div>
// //           <h1>{idd} hi</h1>
// //           <label htmlFor="password">Password:</label>
// //           <input
// //             type="password"
// //             id="password"
// //             name="password"
// //             autoComplete="off"
// //             required
// //             value={password}
// //             onChange={(e) => {
// //               setPassword(e.target.value);
// //             }}
// //           />
// //         </div>
// //         <button type="submit">Login</button>
// //       </form>
// //       <>
// //         <>
// //           <>
// //             {allentry.map((elems) => {
// //               const { id, username, password } = elems;
// //               return (
// //                 <div className="new" key={id}>
// //                   <p>Username: {username}</p>
// //                   <p>Password: {password}</p>
// //                 </div>
// //               );
// //             })}

// //             <ol>
// //               {fruits.map((fruit, index) => (
// //                 <li key={index}>{fruit}</li>
// //               ))}
// //             </ol>
// //           </>
// //         </>
// //       </>
// //     </div>
// //   );
// // };

// // export default Top;

// import React, { useEffect } from "react";

// const Top = () => {
//   useEffect(() => {
//     console.log("hi");
//   });

//   return <div>outsider</div>;
// };

// export default Top;
// //to add logo just import with icon name and insert as component on down line on return
