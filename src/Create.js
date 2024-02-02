import React, { useState } from "react";

export default function Create() {
  const [title, setTitle] = useState("test");
  const [body, setBody] = useState("test body");
  const [author, setAuthor] = useState("mekune");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    setTimeout(() => {
      fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log("new blog added");
        setIsPending(false);
      });
    }, 1000);
  };

  return (
    <div>
      <h2> add a new blog </h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mekune">mekune</option>
          <option value="mekune2">mekune2</option>
          <option value="mekune3">mekune3</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog ...</button>}
      </form>
    </div>
  );
}
