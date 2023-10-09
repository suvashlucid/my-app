// // import React, { useEffect, useState } from "react";
// // import "./DoEffect.css";
// // import Loading from "./Loading";
// // // Import Bootstrap's CSS
// // import "bootstrap/dist/css/bootstrap.min.css";
// // import DoEffect2 from "../DoEffect2";

// // const DoEffect = () => {
// //   const [users, setUsers] = useState([]);
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const getUsers = async function () {
// //       try {
// //         const response = await fetch("https://api.github.com/users");
// //         if (!response.ok) {
// //           throw new Error("Network response was not ok");
// //         }
// //         const userData = await response.json();
// //         setUsers(userData);
// //         setIsLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //         setIsLoading(false);
// //       }
// //     };
// //     console.log();
// //     getUsers();
// //   }, []);

// //   console.log("Component is rendering");
// //   if (isLoading) {
// //     return <Loading />; // Render the Loading component if isLoading is true
// //   }

// //   // Rest of your code here

// //   return (
// //     //using props as the a={a}
// //     <div>
// //       <DoEffect2 users={users} />
// //     </div>
// //   );
// // };

// // export default DoEffect;

// // import React from "react";

// // const DoEffect = () => {
// //   function newe() {
// //     try {
// //       let a = 1;
// //       let b = 1;
// //       let c = a / b;
// //       console.log(c);
// //       if (!isFinite(c)) {
// //         throw new Error("not good");
// //       }
// //     } catch (errored) {
// //       console.log(
// //         "the error is that it is not divide and is indeterminate so use as this error as following " +
// //           errored
// //       );
// //     }

// //     return <div>empty.</div>;
// //   }

// //   newe();
// // };

// // export default DoEffect;
// import React, { useState } from "react";
// import { useRef } from "react";
// // yesko insitial state is only and preserve the value . no rerender like use effect.
// const DoEffect = () => {
//   const checkname = useRef(null);
//   const [show, setShow] = useState(false);
//   console.log(checkname);
//   function checking(e) {
//     console.log(checkname);
//     e.preventDefault();
//     console.log(checkname.current);

//     checkname.current.value === ""
//       ? alert("plz fill the form given below")
//       : setShow(checkname.current.value);
//   }

//   return (
//     <div>
//       <form action="" onSubmit={checking}>
//         <div>
//           <h1> This is sample of login form</h1>
//           <label htmlFor="checkname">Name</label>
//           <input type="text" id="checkname" ref={checkname}></input>

//           <button type="submit" id="btn">
//             Submit here
//           </button>
//         </div>
//       </form>
//       <p>
//         {" "}
//         {show
//           ? `The given value is the given as the ${checkname.current.value}`
//           : ""}
//       </p>
//     </div>
//   );
// };

// export default DoEffect;
import React, { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  if (action.type == "BADHAUNE") {
    return (state = state + 123);
  }
  if ((action.type = "GHATAUNE")) {
    return (state = state - 100);
  }
  return state;
};
const DoEffect = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>
        {" "}
        This is following use the increment and decrement operator. the use of
        the useReducer is to perform some task with the minimizate of use state.{" "}
      </h1>
      <h1>Bishnu salary in</h1>
      <h2> The bank account state has become as in dollar as {state}</h2>
      <button onClick={() => dispatch({ type: "BADHAUNE" })}>
        Salary credited
      </button>
      <button onClick={() => dispatch({ type: "GHATAUNE" })}>
        Salary Decreased not good work
      </button>
    </div>
  );
};

export default DoEffect;
