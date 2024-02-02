import React from "react";
import { Link } from "react-router-dom";
// for function on props
export default function Props22({ blogs, title, handleDelete }) {
  // export default function Props2(props) {
  //   const blogs = props.blogs;
  //   const title = props.title;

  return (
    <article>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <Link to={`/blog/${blog.id}`}>
            <p>title : {blog.title}</p>
            <p>content : {blog.body}</p>
            <p> by {blog.author}</p>
          </Link>
          <button onClick={() => handleDelete(blog.id)}>delete</button>
        </div>
      ))}
    </article>
  );
}
