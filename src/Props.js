import React, { useState } from "react";
import Props2 from "./Props2";

export default function Props() {
  const [blogs, setBlog] = useState([
    { title: "Website", body: "body of website", author: "mekune", id: 1 },
    { title: "Welcome", body: "body of welcome", author: "mekune2", id: 2 },
    { title: "Tips", body: "body of tips", author: "mekune3", id: 3 },
  ]);
  return (
    <section>
      <h2 className="title">Props</h2>
      <p className="definition">
        le props sert a faire communiquer les données entre différent composant
      </p>
      <Props2 blogs={blogs} title={"All blogs"} />
    </section>
  );
}
