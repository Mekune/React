import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from "./page.js";

export default function Routers() {
  return (
    <section className="test">
      <h2 className="title">11. Routers</h2>
      <p>dans l'url : /page1, /page2</p>
      <Switch>
        <Route path="/page1">
          <Page />
        </Route>
        <Route path="/page2">
          <Page />
          <Page />
        </Route>
      </Switch>
    </section>
  );
}
