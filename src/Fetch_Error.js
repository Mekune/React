import React, { useState, useEffect } from "react";
import Props22 from "./Props2.2";

export default function Fetch_Error() {
  const [name, setName] = useState("mario");

  const [blogs, setBlogs] = useState(null);
  // perding = en attente
  // fetch = aller chercher
  const [isPending, setIsPending] = useState(true);

  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  //.then = promesse, une promesse est : faire une action SI la promesse est respecter (comme si il y a une erreur ou si on a une réponse)
  // par exemple resolve(...) et (res == true) (si la réponse existe et si on a un retour alors on fait ...)
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        // toujours le corps de la réponse
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resources");
          }
          return res.json();
        })
        // toujours l'objet réponse
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        // error
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1500);
  }, []);

  return (
    <section className="test">
      <h2 className="title">9. Fetch error</h2>
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
