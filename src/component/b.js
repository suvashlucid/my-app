import React, { useState, useEffect } from "react";

function ClickMeButton() {
  // Initialize a state variable for the counter
  const [count, setCount] = useState(0);

  // Use useEffect to perform side effects when the component renders
  useEffect(() => {
    document.title = `Clicked ${count} times`; // Update the document title
  }, [count]); // This effect will re-run whenever the 'count' variable changes

  // Function to handle the button click
  const handleClick = () => {
    setCount(count + 1); // Increment the count
  };

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickMeButton;
