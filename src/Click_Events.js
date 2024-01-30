import React from "react";

export default function Click_Events() {
  const handleClick = () => {
    console.log("hello world");
  };

  const handleClickAgain = (name) => {
    console.log("hello " + name);
  };
  return (
    <section>
      <h2 className="title">Click Events</h2>
      <h2>Action in console when button clicked :</h2>
      <button onClick={handleClick}>Click me</button>

      <h2>Dynamic value :</h2>
      <button onClick={() => handleClickAgain("nans")}>Click me dynamic</button>
    </section>
  );
}
