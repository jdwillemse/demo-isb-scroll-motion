import React, { Component } from "react";

import "./App.css";
import ImageBlock from "./ImageBlock";

class App extends Component {
  render() {
    const blockThemes = [
      "water",
      "snow",
      "forest",
      "tree",
      "flower",
      "field",
      "pink",
      "wild",
      "rocks",
      "landscape",
      "fruit",
      "jelly"
    ];

    return (
      <div className="app">
        {blockThemes.map((theme, i) => (
          <ImageBlock key={i} theme={theme} index={i} />
        ))}
      </div>
    );
  }
}

export default App;

/* <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> */
