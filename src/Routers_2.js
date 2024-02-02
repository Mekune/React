import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Page from "./page.js";
import Create from "./Create.js";

export default function Routers() {
  return (
    <section className="test">
      <h2 className="title">12. Routers_2</h2>
      <p>utiliser Link plutot que a href car Link ne recharge pas la page</p>
      <nav>
        <ul>
          <li>
            <Link to="/page">page2</Link>
          </li>
          <li>
            <Link to="/create">create</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/page">
          <Page />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </section>
  );
}
