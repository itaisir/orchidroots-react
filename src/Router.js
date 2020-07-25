import React from "react";
import APP from "./components/App/App";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import Signup from "./components/Signup";
import Verification from "./components/Verification";
import { isLoggedIn } from "./constants";
import ResetPassword from "./components/ResetPassword";

export default (props) => (
  <Router>
    <div>
      <Route exact path="/">
        <APP />
      </Route>
      {!isLoggedIn() ? (
        <>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/forgetpassword">
            <ForgetPassword />
          </Route>
          <Route exact path="/resetpassword">
            <ResetPassword />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/verification">
            <Verification />
          </Route>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  </Router>
);
