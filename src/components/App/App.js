import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount(){
  }
  render() {
    return (
      <div className="container">
        <h1>Hello, World</h1>
      </div>
    );
  }
}

export default connect()(App);
