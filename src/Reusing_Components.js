import React, { useState } from "react";
import Props2 from "./Props2";

export default function Reusing_Components() {
  const [blogs, setBlog] = useState([
    { title: "Website", body: "body of website", author: "mekune", id: 1 },
    { title: "Welcome", body: "body of welcome", author: "mekune2", id: 2 },
    { title: "Tips", body: "body of tips", author: "mekune3", id: 3 },
  ]);
  return (
    <section>
      <h2 className="title">5. Reusing_Components</h2>
      <Props2
        blogs={blogs.filter((blog) => blog.author === "mekune")}
        title={"Filter by author 'mekune' "}
      />
    </section>
  );
}
