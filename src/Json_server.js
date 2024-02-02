import React, { useState, useEffect } from "react";
import Props22 from "./Props2.2";

export default function Json_server() {
  const [name, setName] = useState("mario");

  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <section className="test">
      <h2 className="title">8. Json server</h2>
      <p>Add in the root Data/db.json</p>
      <p>npx json-server --watch Data/db.json --port "8000"</p>
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
