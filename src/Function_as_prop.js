import React, { useState } from "react";
import Props22 from "./Props2.2";

export default function Function_as_prop() {
  const [blogs, setBlogs] = useState([
    { title: "Website", body: "body of website", author: "mekune", id: 1 },
    { title: "Welcome", body: "body of welcome", author: "mekune2", id: 2 },
    { title: "Tips", body: "body of tips", author: "mekune3", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <section>
      <h2 className="title">6. Function_as_prop</h2>
      <p className="definition">
        le props sert a faire communiquer les données entre différent composant
      </p>
      <Props22 blogs={blogs} title={"All blogs"} handleDelete={handleDelete} />
    </section>
  );
}
