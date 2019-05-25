import React, { Component } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

class App extends Component {
  state = {
    editor: ""
  };

  componentDidMount() {
    const script = document.createElement("script");

    script.src =
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  }
  onTextChange = e => {
    this.setState({ editor: e.target.value });
  };
  render() {
    return (
      <div className="App container-fluid">
        <Editor onTextChange={this.onTextChange} />
        <Preview text={this.state.editor} />
      </div>
    );
  }
}

export default App;
