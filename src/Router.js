import React from "react";
import APP from "./components/App/App";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Verification from "./components/Verification";

export default (props) => (
  <Router>
    <div>
      <Route exact path="/">
        <APP />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/verification">
        <Verification />
      </Route>
    </div>
  </Router>
);
