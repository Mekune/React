import React, { useState, useEffect } from "react";
import Props22 from "./Props2.2";

export default function Loading() {
  const [name, setName] = useState("mario");

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
        });
    }, 1500);
  }, []);

  return (
    <section className="test">
      <h2 className="title">8.1. Json server + Loading</h2>
      {isPending && <div>Loading....</div>}
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
