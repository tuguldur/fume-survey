import React from "react";
import "./App.css";
import { home, survey } from "./countainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div style={{ height: "100%" }}>
        <Switch>
          <Route path="/survey" component={survey} />
          <Route exact path="/" component={home} />
        </Switch>
      </div>
    </Router>
  );
}
