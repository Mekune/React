import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BlogDetail from "./BlogDetail.js";
import Custom_Hook from "./Custom_Hook.js";

export default function Routers() {
  return (
    <section className="test">
      <h2 className="title">14. Route Param</h2>
      <nav>
        <ul>
          <li>
            <Link to="/blogs">blogs</Link>
          </li>
        </ul>
      </nav>
      <Switch>
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
