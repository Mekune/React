import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function BlogDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2>BlogDetail - {id} </h2>
    </div>
  );
}
