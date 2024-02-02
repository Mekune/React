import React, { useState, useEffect } from "react";
import Props22 from "./Props2.2";

export default function UseEffectComponent() {
  const [blogs, setBlogs] = useState([
    { title: "Website", body: "body of website", author: "mekune", id: 1 },
    { title: "Welcome", body: "body of welcome", author: "mekune2", id: 2 },
    { title: "Tips", body: "body of tips", author: "mekune3", id: 3 },
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // // a chaque rendu
  // useEffect(() => {
  //   console.log("useEffect run");
  // });

  // a chaque rendu qui modifie de [name]
  useEffect(() => {
    console.log("useEffect run");
  }, [name]);

  return (
    <section className="test">
      <h2 className="title">7. useEffect</h2>
      <p className="definition">le hook "useEffect" </p>
      <Props22 blogs={blogs} title={"All blogs"} handleDelete={handleDelete} />
      <p>{name}</p>
      <button onClick={() => setName("luigi")}>change name</button>
    </section>
  );
}
