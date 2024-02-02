import React, { useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./UseFetch";

export default function BlogDetail() {
  const { id } = useParams();
  const [isPendingDelete, setIsPendingDelete] = useState(false);
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const handleClickDelete = () => {
    setIsPendingDelete(true);
    setTimeout(() => {
      fetch("http://localhost:8000/blogs/" + blog.id, {
        method: "DELETE",
      }).then(() => {
        setIsPendingDelete(false);
        history.push("/blogs");
      });
    }, 1500);
  };
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
          {!isPendingDelete && (
            <button onClick={handleClickDelete}>delete</button>
          )}
          {isPendingDelete && (
            <button onClick={handleClickDelete}>deleting ...</button>
          )}
        </article>
      )}
    </div>
  );
}
