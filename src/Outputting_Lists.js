import React, { useState } from "react";

export default function Outputting_Lists() {
  const [blogs, setBlog] = useState([
    { title: "Website", body: "body of website", author: "mekune", id: 1 },
    { title: "Welcome", body: "body of welcome", author: "mekune2", id: 2 },
    { title: "Tips", body: "body of tips", author: "mekune3", id: 3 },
  ]);
  return (
    <section>
      <h2 className="title">Outputting_Lists</h2>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <p>title : {blog.title}</p>
          <p>content : {blog.body}</p>
          <p> by {blog.author}</p>
          <br></br>
        </div>
      ))}
    </section>
  );
}
