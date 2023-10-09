// import React from "react";
// import { FirstName,LastName } from "./App";
// const Final = () => {
//   return (
//     <>

//         <FirstName.Consumer>
//           {(value) => {
//             return(

// <LastName.Consumer>
// {(value2)=>{
//     return (<h1> this is {value} {value2}</h1>);

// }}

// </LastName.Consumer>
// )

// </FirstName.Consumer>

//             )
//           }}

//         </FirstName.Consumer>
//       </div>
//     </>
//   );
// };

// export default Final;
//this is called the use Context.
import React, { useContext } from "react";
import { FirstName } from "./App";

const Final = () => {
  const pascal = useContext(FirstName);
  return <h1> This is the {pascal}</h1>;
};

export default Final;
