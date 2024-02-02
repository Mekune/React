import React, { useState, useEffect } from "react";
import Props22 from "./Props2.2";
import useFetch from "./UseFetch";

export default function Custom_Hook() {
  const {
    data: blogs,
    setData: setBlogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  //.then = promesse, une promesse est : faire une action SI la promesse est respecter (comme si il y a une erreur ou si on a une réponse)
  // par exemple resolve(...) et (res == true) (si la réponse existe et si on a un retour alors on fait ...)

  return (
    <section className="test">
      <h2 className="title">10. Custom hook</h2>
      <p className="definition">
        rappel : un hook est une fonction spécial qui permet aux composants
        fonctionnels d'utiliser des fonctionnalité de react qui étaient
        auparavant réservés aux composants de classe
      </p>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {blogs && (
        <Props22
          blogs={blogs}
          title={"All blogs"}
          handleDelete={handleDelete}
        />
      )}
    </section>
  );
}
// json server "npx json-server --watch *root of json file* --port *8000 exemple*"
// exemple : npw json-server --watch "Data/db.json --port "8000"
