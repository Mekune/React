import React from "react";

export default function Props2({ blogs, title }) {
  // export default function Props2(props) {
  //   const blogs = props.blogs;
  //   const title = props.title;
  return (
    <article>
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <p>title : {blog.title}</p>
          <p>content : {blog.body}</p>
          <p> by {blog.author}</p>
        </div>
      ))}
    </article>
  );
}
