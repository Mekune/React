import React, { useState } from "react";

export default function Using_State() {
  // let name = "my name ?";
  const [name, setName] = useState("my name ?");
  const [name2, setName2] = useState("my name ?");

  const handleClick = () => {
    setName("nans");
  };

  const handleClick2 = (event) => {
    setName2(event.target.value);
  };
  return (
    <section>
      <p className="definition">
        le hook "UseState" sert a gérer l'état d'une variable, composant pour
        par exemple la réactualisé
      </p>
      <h2 className="title">Using state</h2>

      <p>{name}</p>
      <button onClick={handleClick}>Change name</button>

      <h2>bonus :</h2>

      <p> {name2} </p>
      <input onChange={handleClick2}></input>
    </section>
  );
}
