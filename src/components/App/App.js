import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <form className="col-12">
            <div className="form-group">
              <br/>
              <br/>
              <br/>
              <h1>OrchidRoots</h1>
              <br/>
              <h4>We are coming soon with a speedy version be tuned <span role="img" aria-label="">😉</span></h4>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(App);
