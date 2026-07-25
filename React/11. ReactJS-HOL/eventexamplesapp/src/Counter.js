import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Method to increment the counter
  const increment = () => {
    setCount(count + 1);
    sayHello();
    showStaticMessage();
  };

  // Method to decrement the counter
  const decrement = () => {
    setCount(count - 1);
  };

  // Extra methods invoked by increment
  const sayHello = () => {
    console.log("Hello!");
    alert("Hello!");
  };

  const showStaticMessage = () => {
    console.log("This is a static message.");
    alert("This is a static message.");
  };

  // Function with argument
  const sayWelcome = (message) => {
    console.log(message);
    alert(message);
  };

  // Synthetic event handler
  const handleOnPress = (event) => {
    console.log("I was clicked");
    alert("I was clicked");
    console.log("Synthetic Event Object:", event);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter Example</h2>
      <p>Current Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />

      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>
      <br /><br />

      <button onClick={handleOnPress}>Synthetic Event OnPress</button>
    </div>
  );
}

export default Counter;
