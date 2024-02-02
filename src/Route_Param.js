import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BlogDetail from "./BlogDetail.js";
import Custom_Hook from "./Custom_Hook.js";
import Create from "./Create.js";

export default function Routers() {
  return (
    <section className="test">
      <h2 className="title">19. Adding blog (POST request)</h2>
      <nav>
        <ul>
          <li>
            <Link to="/blogs">blogs</Link>
          </li>
          <li>
            <Link to="/create">create</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/blogs">
          <Custom_Hook />
        </Route>
        <Route path="/blog/:id">
          <BlogDetail />
        </Route>
      </Switch>
    </section>
  );
}
