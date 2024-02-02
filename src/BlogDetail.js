import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./UseFetch";

export default function BlogDetail() {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div>
      <h2>BlogDetail - {id} </h2>
      {isPending && <div>Loading...</div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p> written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
}
