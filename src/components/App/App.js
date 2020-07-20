import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux'

const displayEmojiName = (event) => alert(event.target.id);
const emojis = [
  {
    emoji: "😀",
    name: "grinning face",
  },
  {
    emoji: "🎉",
    name: "party popper",
  },
  {
    emoji: "💃",
    name: "woman dancing",
  },
];

class App extends Component {
  componentDidMount(){
// call action
  }
  render() {
    return (
      <div className="container">
        <h1>Hello, World</h1>
        <p>I am writing JSX</p>
        <ul>
          {emojis.map((emoji) => (
            <li>
              <button onClick={displayEmojiName}>
                <span role="img" aria-label="grinning face" id={emoji.name}>
                  {emoji.emoji}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect()(App);
