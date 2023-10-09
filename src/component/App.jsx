import React, { createContext } from "react";
import Compa from "./Compa";

const FirstName = createContext();
const LastName = createContext();

const App = () => {
  return (
    <>
      <FirstName.Provider value={"Suvash"}>
        <LastName.Provider value={"Neupane"}>
          <C />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
};
export default App;
export { FirstName, LastName };
